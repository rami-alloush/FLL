import os, re, sys, unicodedata
import pymupdf

SRC = 'spike_prime_element_overview.pdf'
OUT = 'elements_output'
os.makedirs(OUT, exist_ok=True)

pat = re.compile(r'^\d+x$')
PAD = 6
ZOOM = 4.0
BAND_TOL = 25.0

def safe_name(s):
    s = s.replace('/', ' ').replace('\\', ' ').strip()
    s = re.sub(r'[\x00-\x1f<>:"|?*]', '', s)
    s = unicodedata.normalize('NFKD', s)
    s = s.encode('ascii', 'ignore').decode('ascii')
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

doc = pymupdf.open(SRC)
manifest = []
total = 0

for pno, page in enumerate(doc):
    blocks = page.get_text('dict')['blocks']
    
    # 1. Extract text spans
    spans = []
    for b in blocks:
        if b['type'] == 0:
            for l in b['lines']:
                for sp in l['spans']:
                    t = sp['text'].strip()
                    if t: spans.append((sp['bbox'], t))

    # 2. Build element structures
    elements = []
    for bbox, t in spans:
        if pat.match(t):
            x0, y0, x1, y1 = bbox
            name_spans = []
            for b2, t2 in spans:
                if b2 != bbox and abs(b2[0] - x0) < 25 and -5 <= b2[1] - y1 < 45 and not pat.match(t2):
                    name_spans.append((b2, t2))
            name_spans.sort(key=lambda s: s[0][1])
            
            full_name = ' '.join(s[1] for s in name_spans)
            full_name = re.sub(r'\s+', ' ', full_name).strip()
            
            top = y0
            lbl_bottom = max([y1] + [s[0][3] for s in name_spans])
            lbl_left = min([x0] + [s[0][0] for s in name_spans])
            lbl_right = max([x1] + [s[0][2] for s in name_spans])
            
            all_lbl_spans = [(bbox, t)] + name_spans
            
            elements.append({
                'qty': t,
                'name': full_name,
                'col_x': x0,
                'top': top,
                'lbl_bottom': lbl_bottom,
                'lbl_left': lbl_left,
                'lbl_right': lbl_right,
                'spans': all_lbl_spans
            })

    # Group into visual rows
    elements.sort(key=lambda e: e['top'])
    rows = []
    for e in elements:
        placed = False
        for r in rows:
            if abs(r[0]['top'] - e['top']) < BAND_TOL:
                r.append(e)
                placed = True
                break
        if not placed:
            rows.append([e])

    for r_idx, r in enumerate(rows):
        r.sort(key=lambda e: e['col_x'])

    # Grid cell boundaries per slot
    for r_idx, r in enumerate(rows):
        if r_idx > 0:
            prev_bot = max(e['lbl_bottom'] for e in rows[r_idx-1])
            this_top = min(e['top'] for e in r)
            row_top = (prev_bot + this_top) / 2.0
        else:
            row_top = max(0, min(e['top'] for e in r) - 90)

        for c_idx, e in enumerate(r):
            if c_idx > 0:
                cell_left = (r[c_idx-1]['col_x'] + e['col_x']) / 2.0
            else:
                cell_left = max(0, e['col_x'] - 20)

            if c_idx < len(r) - 1:
                cell_right = (e['col_x'] + r[c_idx+1]['col_x']) / 2.0
            else:
                cell_right = min(page.rect.x1, e['col_x'] + 105)

            e['cell'] = (cell_left, row_top, cell_right, e['lbl_bottom'] + 4)

    elements.sort(key=lambda e: (round(e['top'] / 30.0), e['col_x']))

    img_blocks = [b['bbox'] for b in blocks if b['type'] == 1]
    TOL = 8.0
    n = len(img_blocks)
    parent = list(range(n))
    def find(x):
        while parent[x] != x: parent[x] = parent[parent[x]]; x = parent[x]
        return x
    def union(a, b):
        ra, rb = find(a), find(b)
        if ra != rb: parent[rb] = ra
    for i in range(n):
        ax0, ay0, ax1, ay1 = img_blocks[i]
        for j in range(i + 1, n):
            bx0, by0, bx1, by1 = img_blocks[j]
            if (ax0 <= bx1 + TOL and bx0 <= ax1 + TOL and ay0 <= by1 + TOL and by0 <= ay1 + TOL):
                union(i, j)
    comp = {}
    for i in range(n): comp.setdefault(find(i), []).append(img_blocks[i])
    background = set()
    for root, members in comp.items():
        h = max(m[3] for m in members) - min(m[1] for m in members)
        if h > 300.0: background.update(map(tuple, members))
    part_img_blocks = [im for im in img_blocks if tuple(im) not in background]

    assign = {idx: [] for idx in range(len(elements))}
    for ib in part_img_blocks:
        bx0, by0, bx1, by1 = ib
        w = bx1 - bx0
        ref_x = bx0 + w * 0.25 if w > 100 else (bx0 + bx1) / 2.0
        best, best_dist = None, None
        for idx, e in enumerate(elements):
            if e['top'] - 95 <= by1 <= e['top'] + 45 and by0 < e['top'] + 35:
                dist = abs(ref_x - e['col_x'])
                if best_dist is None or dist < best_dist:
                    best, best_dist = idx, dist
        if best is not None:
            assign[best].append(ib)

    for idx, e in enumerate(elements):
        if not assign[idx]:
            for ib in part_img_blocks:
                bx0, by0, bx1, by1 = ib
                cx = (bx0 + bx1) / 2.0
                if (e['col_x'] - 10 <= cx <= e['col_x'] + 90
                        and e['top'] - 95 <= by1 <= e['top'] + 45
                        and by0 < e['top'] + 35):
                    assign[idx].append(ib)

    pr = page.rect

    # Keywords for oversized/wide parts that intentionally span across columns
    WIDE_KEYWORDS = ['15m', '13m', '32m', '7x11', '11x15', '11x19', '3x11', 'flex hose', 'cable', '2x16']

    for idx, e in enumerate(elements):
        total += 1
        cands = assign[idx]
        cell_l, cell_t, cell_r, cell_b = e['cell']
        is_wide = any(k in e['name'].lower() for k in WIDE_KEYWORDS)

        if cands:
            img_l = min(c[0] for c in cands)
            img_t = min(c[1] for c in cands)
            img_r = max(c[2] for c in cands)
            img_b = max(c[3] for c in cands)

            if is_wide:
                crop_l = max(pr.x0, min(cell_l, img_l - PAD))
                crop_r = min(pr.x1, max(cell_r, img_r + PAD))
            else:
                crop_l = max(pr.x0, min(cell_l, e['lbl_left'] - PAD))
                crop_r = min(pr.x1, max(cell_r, e['lbl_right'] + PAD))
                
            crop_t = max(pr.y0, min(cell_t, img_t - PAD))
            crop_b = min(pr.y1, cell_b)
        else:
            crop_l = max(pr.x0, cell_l)
            crop_r = min(pr.x1, cell_r)
            crop_t = max(pr.y0, e['top'] - 55.0)
            crop_b = min(pr.y1, cell_b)

        clip = pymupdf.Rect(crop_l, crop_t, crop_r, crop_b)

        # Redact ONLY text spans belonging to other elements that intersect clip
        redact_rects = []
        for o_idx, o_elem in enumerate(elements):
            if o_idx != idx:
                for s_bbox, _ in o_elem['spans']:
                    r = pymupdf.Rect(s_bbox)
                    if clip.intersects(r):
                        redact_rects.append(r)

        if redact_rects:
            fresh_doc = pymupdf.open(SRC)
            fresh_page = fresh_doc[pno]
            for r in redact_rects:
                fresh_page.add_redact_annot(r, fill=(1, 1, 1))
            fresh_page.apply_redactions()
            pix = fresh_page.get_pixmap(matrix=pymupdf.Matrix(ZOOM, ZOOM), clip=clip, alpha=False)
            fresh_doc.close()
        else:
            pix = page.get_pixmap(matrix=pymupdf.Matrix(ZOOM, ZOOM), clip=clip, alpha=False)

        fname = f"p{pno+1}_{total:03d}_{e['qty']}_{safe_name(e['name'])}.png"
        out_path = os.path.join(OUT, fname)
        pix.save(out_path)
        manifest.append(f"{fname}\t{e['qty']}\t{e['name']}")
        print(f"  {fname}")

open(os.path.join(OUT, '_manifest.tsv'), 'w', encoding='utf-8').write('\n'.join(manifest))
print(f'TOTAL processed: {total}')