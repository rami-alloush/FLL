import os, sys, glob, shutil
from PIL import Image
import numpy as np

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

SRC_DIR = r'd:\Work\FLL\elements_output'
DST_DIR = r'd:\Work\FLL\clean_elements'

if os.path.exists(DST_DIR):
    shutil.rmtree(DST_DIR)
os.makedirs(DST_DIR, exist_ok=True)

manifest_path = os.path.join(SRC_DIR, '_manifest.tsv')

if os.path.exists(manifest_path):
    with open(manifest_path, 'r', encoding='utf-8') as f:
        entries = [l.strip().split('\t') for l in f if l.strip()]
else:
    entries = [[f, '', ''] for f in os.listdir(SRC_DIR) if f.endswith('.png')]

print(f"Auditing {len(entries)} manifest files from '{SRC_DIR}'...")

clean_entries = []

for entry in entries:
    fname = entry[0]
    qty = entry[1] if len(entry) > 1 else ''
    name = entry[2] if len(entry) > 2 else ''
    filepath = os.path.join(SRC_DIR, fname)
    if not os.path.exists(filepath): continue

    im = Image.open(filepath).convert('RGB')
    arr = np.array(im)
    h, w, _ = arr.shape

    # Non-white mask (< 230 in RGB)
    non_white = (arr[:, :, 0] < 230) | (arr[:, :, 1] < 230) | (arr[:, :, 2] < 230)

    # Border touches (checking 2px frame along edges)
    top_touch = np.sum(non_white[0:2, :])
    bot_touch = np.sum(non_white[h-2:h, :])
    left_touch = np.sum(non_white[:, 0:2])
    right_touch = np.sum(non_white[:, w-2:w])

    if top_touch > 5 or bot_touch > 5 or left_touch > 5 or right_touch > 5:
        continue

    # Disconnected side cluster check (stray neighbor graphics)
    col_proj = np.sum(non_white, axis=0) > 0
    segments = []
    in_seg = False
    seg_start = 0
    for x_idx, val in enumerate(col_proj):
        if val and not in_seg:
            in_seg = True; seg_start = x_idx
        elif not val and in_seg:
            in_seg = False
            if x_idx - seg_start > 3: segments.append((seg_start, x_idx))
    if in_seg and len(col_proj) - seg_start > 3:
        segments.append((seg_start, len(col_proj)))

    has_stray = False
    for i in range(len(segments) - 1):
        gap_size = segments[i+1][0] - segments[i][1]
        seg1_w = segments[i][1] - segments[i][0]
        seg2_w = segments[i+1][1] - segments[i+1][0]
        if gap_size > 15 and seg1_w > 10 and seg2_w > 10:
            has_stray = True
            break
    if has_stray:
        continue

    # Text presence check in bottom region
    bottom_region = non_white[int(h * 0.60):, :]
    if np.sum(bottom_region) < 30:
        continue

    # Graphic presence check in top region
    top_region = non_white[:int(h * 0.70), :]
    if np.sum(top_region) < 50:
        continue

    clean_entries.append({
        'fname': fname,
        'qty': qty,
        'name': name,
        'filepath': filepath,
        'w': w, 'h': h
    })

# Deduplicate elements by identity
grouped = {}
for item in clean_entries:
    key = f"{item['qty']}_{item['name']}".strip().lower()
    grouped.setdefault(key, []).append(item)

copied_count = 0
dst_manifest = []

for key, items in grouped.items():
    # Pick the element image with highest resolution/canvas area
    items.sort(key=lambda x: -(x['w'] * x['h']))
    best = items[0]

    src_p = best['filepath']
    dst_p = os.path.join(DST_DIR, best['fname'])
    shutil.copy2(src_p, dst_p)
    copied_count += 1
    dst_manifest.append(f"{best['fname']}\t{best['qty']}\t{best['name']}")

with open(os.path.join(DST_DIR, '_manifest.tsv'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(dst_manifest))

print(f"Audited {len(entries)} manifest files.")
print(f"Found {len(clean_entries)} clean element images.")
print(f"Copied {copied_count} unique clean images into '{DST_DIR}'.")
