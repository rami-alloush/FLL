const path = require('node:path');
const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'FLL Coaching Hub';
pptx.company = 'FLL Coaching Hub';
pptx.subject = 'FIRST LEGO League Challenge BIOGLOW Meet & Greet';
pptx.title = 'FLL Challenge BIOGLOW Meet & Greet';
pptx.lang = 'en-US';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'en-US',
};
pptx.margin = 0;
pptx.defineSlideMaster({
  title: 'FLL_MASTER',
  background: { color: 'F7FAF8' },
  objects: [],
  slideNumber: { x: 12.38, y: 7.06, color: '496478', fontFace: 'Aptos', fontSize: 8 },
});

const C = {
  navy: '102A43',
  ink: '163A4B',
  muted: '5B7083',
  pale: 'F7FAF8',
  white: 'FFFFFF',
  mint: 'DCF4EE',
  aqua: '00A6A6',
  lime: 'B6D53C',
  gold: 'F6B843',
  coral: 'F26B5B',
  sky: 'DCEEF8',
  line: 'D7E4E1',
  darkMint: '177E79',
};

const W = 13.333;
const H = 7.5;
const videoPath = path.join(__dirname, 'fll_about_video.mp4');
const outputPath = path.join(__dirname, 'meet_and_greet_editable.pptx');

function addShape(slide, shape, x, y, w, h, fill, line = { color: fill, transparency: 100 }, extra = {}) {
  slide.addShape(shape, { x, y, w, h, fill: { color: fill, ...extra.fill }, line, ...extra });
}

function addText(slide, text, x, y, w, h, options = {}) {
  slide.addText(text, {
    x,
    y,
    w,
    h,
    fontFace: 'Aptos',
    fontSize: 15,
    color: C.ink,
    margin: 0,
    breakLine: false,
    fit: 'shrink',
    valign: 'mid',
    ...options,
  });
}

function addHeader(slide, number, kicker, title, subtitle, accent = C.aqua) {
  addShape(slide, pptx.ShapeType.rect, 0, 0, W, H, C.pale);
  addShape(slide, pptx.ShapeType.rect, 0, 0, W, 0.12, accent);
  addShape(slide, pptx.ShapeType.ellipse, 11.76, 0.36, 0.72, 0.72, C.mint, { color: C.mint, transparency: 100 });
  addShape(slide, pptx.ShapeType.ellipse, 12.18, 0.73, 0.38, 0.38, C.lime, { color: C.lime, transparency: 100 });
  addShape(slide, pptx.ShapeType.ellipse, 11.44, 0.95, 0.24, 0.24, C.gold, { color: C.gold, transparency: 100 });
  addText(slide, kicker.toUpperCase(), 0.62, 0.42, 8.8, 0.23, { fontSize: 8.5, bold: true, color: accent, charSpacing: 1.8 });
  addText(slide, title, 0.62, 0.74, 10.5, 0.55, { fontFace: 'Aptos Display', fontSize: 26, bold: true, color: C.navy });
  addText(slide, subtitle, 0.62, 1.36, 10.55, 0.38, { fontSize: 11.5, color: C.muted });
  addShape(slide, pptx.ShapeType.line, 0.62, 6.93, 12.1, 0, C.line, { color: C.line, pt: 0.65 });
  addText(slide, 'FIRST LEGO LEAGUE  |  BIOGLOW 2026–2027', 0.62, 7.04, 6.5, 0.16, { fontSize: 7.5, color: C.muted, charSpacing: 0.5 });
  addText(slide, String(number).padStart(2, '0'), 11.95, 6.99, 0.65, 0.18, { fontSize: 8, bold: true, color: C.muted, align: 'right' });
}

function addPill(slide, text, x, y, w, color = C.aqua, fill = C.mint) {
  addShape(slide, pptx.ShapeType.roundRect, x, y, w, 0.3, fill, { color: fill, transparency: 100 }, { radius: 0.08 });
  addText(slide, text.toUpperCase(), x + 0.08, y + 0.055, w - 0.16, 0.12, { fontSize: 7.6, bold: true, color, charSpacing: 1.1, align: 'center' });
}

function addCard(slide, { x, y, w, h, accent = C.aqua, label, title, body, number, link }) {
  addShape(slide, pptx.ShapeType.roundRect, x, y, w, h, C.white, { color: C.line, pt: 0.7 }, { radius: 0.08, shadow: { type: 'outer', color: 'B8C8C2', opacity: 0.12, blur: 1, angle: 45, distance: 1 } });
  addShape(slide, pptx.ShapeType.roundRect, x, y, 0.08, h, accent, { color: accent, transparency: 100 }, { radius: 0.04 });
  if (number) {
    addShape(slide, pptx.ShapeType.ellipse, x + 0.25, y + 0.25, 0.38, 0.38, accent, { color: accent, transparency: 100 });
    addText(slide, String(number), x + 0.25, y + 0.335, 0.38, 0.12, { fontSize: 9, bold: true, color: C.white, align: 'center' });
  }
  const textX = x + (number ? 0.78 : 0.27);
  const textW = w - (number ? 1.02 : 0.54);
  if (label) addText(slide, label.toUpperCase(), textX, y + 0.27, textW, 0.16, { fontSize: 7.3, bold: true, color: accent, charSpacing: 1.2 });
  if (title) addText(slide, title, textX, y + (label ? 0.52 : 0.28), textW, 0.34, { fontFace: 'Aptos Display', fontSize: 14, bold: true, color: C.navy });
  if (body) addText(slide, body, textX, y + (title ? (label ? 0.98 : 0.73) : 0.28), textW, h - (title ? (label ? 1.2 : 0.97) : 0.52), { fontSize: 10.5, color: C.muted, breakLine: false, valign: 'top', breakLine: false });
  if (link) {
    addShape(slide, pptx.ShapeType.roundRect, x + 0.27, y + h - 0.44, Math.min(w - 0.54, 1.72), 0.24, accent, { color: accent, transparency: 100 }, { hyperlink: { url: link }, radius: 0.05 });
    addText(slide, 'OPEN RESOURCE', x + 0.32, y + h - 0.39, Math.min(w - 0.64, 1.52), 0.1, { fontSize: 6.6, bold: true, color: C.white, align: 'center', charSpacing: 0.7 });
  }
}

function addBullets(slide, items, x, y, w, lineHeight = 0.5, accent = C.aqua, fontSize = 11) {
  items.forEach((item, index) => {
    const itemY = y + index * lineHeight;
    addShape(slide, pptx.ShapeType.ellipse, x, itemY + 0.1, 0.13, 0.13, accent, { color: accent, transparency: 100 });
    addText(slide, item, x + 0.25, itemY, w - 0.25, lineHeight - 0.02, { fontSize, color: C.ink, valign: 'mid' });
  });
}

function addQuote(slide, text, x, y, w, h, accent = C.aqua) {
  addShape(slide, pptx.ShapeType.roundRect, x, y, w, h, C.mint, { color: C.mint, transparency: 100 }, { radius: 0.08 });
  addShape(slide, pptx.ShapeType.rect, x, y, 0.1, h, accent, { color: accent, transparency: 100 });
  addText(slide, text, x + 0.34, y + 0.2, w - 0.58, h - 0.4, { fontFace: 'Aptos Display', fontSize: 15, bold: true, color: C.navy, italic: true, valign: 'mid' });
}

function addNotes(slide, text) {
  slide.addNotes(text);
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  slide.background = { color: C.navy };
  addShape(slide, pptx.ShapeType.rect, 0, 0, W, H, C.navy);
  addShape(slide, pptx.ShapeType.ellipse, 8.85, -1.35, 5.9, 5.9, C.darkMint, { color: C.darkMint, transparency: 65 });
  addShape(slide, pptx.ShapeType.ellipse, 9.95, 0.25, 4.55, 4.55, C.aqua, { color: C.aqua, transparency: 70 });
  addShape(slide, pptx.ShapeType.ellipse, 10.73, 1.02, 3.05, 3.05, C.lime, { color: C.lime, transparency: 72 });
  addShape(slide, pptx.ShapeType.ellipse, 8.95, 5.9, 0.25, 0.25, C.gold, { color: C.gold, transparency: 100 });
  addShape(slide, pptx.ShapeType.ellipse, 9.42, 5.48, 0.14, 0.14, C.white, { color: C.white, transparency: 20 });
  addShape(slide, pptx.ShapeType.ellipse, 11.83, 5.83, 0.32, 0.32, C.coral, { color: C.coral, transparency: 100 });
  addPill(slide, 'Official Team Kickoff', 0.65, 0.77, 1.85, C.aqua, '1D4E5B');
  addText(slide, 'FIRST LEGO\nLEAGUE CHALLENGE', 0.65, 1.42, 7.35, 1.42, { fontFace: 'Aptos Display', fontSize: 31, bold: true, color: C.white, breakLine: false, valign: 'mid', breakLine: false });
  addText(slide, 'BIOGLOW™  |  MEET & GREET', 0.67, 3.0, 5.6, 0.25, { fontSize: 13, bold: true, color: C.lime, charSpacing: 1.4 });
  addText(slide, 'Exploring biodiversity and bio-tech innovation with LEGO SPIKE Prime', 0.67, 3.44, 5.75, 0.5, { fontSize: 15, color: 'D9F0EC', valign: 'top' });
  addShape(slide, pptx.ShapeType.roundRect, 0.65, 5.55, 6.3, 0.8, '183D52', { color: '2E5C69', pt: 0.65 }, { radius: 0.08 });
  addText(slide, '2026–2027 SEASON', 0.94, 5.72, 1.55, 0.13, { fontSize: 8, bold: true, color: C.aqua, charSpacing: 1.1 });
  addText(slide, 'Students ages 9–12 + parents', 0.94, 5.94, 2.6, 0.17, { fontSize: 10, color: C.white });
  addText(slide, '1× weekly  •  2.5 hours  •  Team Lab Room', 3.61, 5.85, 2.85, 0.2, { fontSize: 9, color: 'D9F0EC', align: 'right' });
  addText(slide, 'THE KIDS DO THE WORK.', 0.67, 6.86, 3.5, 0.18, { fontSize: 8, bold: true, color: C.gold, charSpacing: 1.25 });
  addNotes(slide, 'Welcome students and parents. Today is about getting to know each other, understanding the FLL journey, and having fun.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 2, 'Session map', 'Today’s roadmap', 'A 2.5-hour meet and greet with hands-on discovery.', C.aqua);
  const cards = [
    ['PROGRAM', 'What is FLL?', 'How young innovators research, build, code, and present.', C.aqua],
    ['WATCH', 'Video spotlight', 'See the energy of a season and a robot match.', C.coral],
    ['TRY', 'Hands-on challenges', 'Build together, meet teammates, and explore SPIKE Prime.', C.lime],
    ['PLAN', 'Logistics & next steps', 'Set a schedule, find a role, and leave ready to start.', C.gold],
  ];
  cards.forEach(([label, title, body, accent], index) => addCard(slide, { x: 0.72 + (index % 2) * 6.0, y: 2.05 + Math.floor(index / 2) * 2.0, w: 5.55, h: 1.5, accent, number: index + 1, label, title, body }));
  addQuote(slide, 'The goal: leave with new teammates, a shared purpose, and a first idea worth building.', 0.72, 6.05, 11.52, 0.54, C.aqua);
  addNotes(slide, 'Set expectations. The session is interactive, so students and parents will participate in a mini building challenge.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 3, 'The big picture', 'What is FIRST LEGO League?', 'A global STEM program for students ages 9–12.', C.aqua);
  addShape(slide, pptx.ShapeType.roundRect, 0.72, 2.06, 5.0, 4.25, C.navy, { color: C.navy, transparency: 100 }, { radius: 0.08 });
  addPill(slide, 'The mission', 1.02, 2.39, 1.35, C.lime, '1D4E5B');
  addText(slide, 'Real problems.\nReal robots.\nReal teamwork.', 1.02, 2.96, 3.9, 1.38, { fontFace: 'Aptos Display', fontSize: 24, bold: true, color: C.white, valign: 'mid' });
  addText(slide, 'Teams investigate challenges, build and code autonomous LEGO robots, and share their ideas with others.', 1.02, 4.75, 3.98, 0.8, { fontSize: 12, color: 'D9F0EC', valign: 'top' });
  addCard(slide, { x: 6.13, y: 2.06, w: 5.6, h: 1.12, accent: C.aqua, label: 'Learn', title: 'Problem solving', body: 'Use science, technology, and engineering to take on real challenges.' });
  addCard(slide, { x: 6.13, y: 3.5, w: 5.6, h: 1.12, accent: C.lime, label: 'Build', title: 'Coding & robotics', body: 'Design mechanisms and program a SPIKE Prime robot to act autonomously.' });
  addCard(slide, { x: 6.13, y: 4.94, w: 5.6, h: 1.12, accent: C.gold, label: 'Grow', title: 'Confidence & community', body: 'Practice communication, leadership, inclusion, and collaborative problem solving.' });
  addNotes(slide, 'FLL is more than playing with LEGO bricks. It is an engineering and public-speaking journey.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 4, 'Video spotlight', 'See FLL in action', 'Watch a short kickoff video, then imagine your team on tournament day.', C.coral);
  addShape(slide, pptx.ShapeType.roundRect, 0.72, 2.08, 7.15, 4.04, C.navy, { color: C.navy, transparency: 100 }, { radius: 0.08 });
  slide.addMedia({ type: 'video', path: videoPath, x: 0.93, y: 2.3, w: 6.73, h: 3.6 });
  addCard(slide, { x: 8.25, y: 2.08, w: 4.35, h: 1.4, accent: C.coral, label: 'Watch for', title: 'A full-team experience', body: 'Students building, coding, presenting, and celebrating together.' });
  addCard(slide, { x: 8.25, y: 3.78, w: 4.35, h: 1.4, accent: C.aqua, label: 'Explore later', title: 'FIRST LEGO League Official', body: 'Season videos, match breakdowns, and championship highlights.', link: 'https://www.youtube.com/@FIRSTLEGOLeagueofficial' });
  addText(slide, 'Embedded local video: fll_about_video.mp4', 0.93, 6.28, 4.0, 0.17, { fontSize: 7.8, color: C.muted });
  addNotes(slide, 'Play the video clip for the room. Point out the excitement of tournament day and the variety of team roles.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 5, 'Season theme', 'BIOGLOW™: nature inspires innovation', 'What can living systems teach us about technology and the world around us?', C.darkMint);
  addShape(slide, pptx.ShapeType.roundRect, 0.72, 2.05, 5.38, 4.12, C.mint, { color: C.mint, transparency: 100 }, { radius: 0.08 });
  addShape(slide, pptx.ShapeType.ellipse, 4.1, 2.28, 1.45, 1.45, C.aqua, { color: C.aqua, transparency: 70 });
  addShape(slide, pptx.ShapeType.ellipse, 4.78, 3.28, 0.86, 0.86, C.lime, { color: C.lime, transparency: 50 });
  addPill(slide, 'Season question', 1.03, 2.43, 1.65, C.darkMint, C.white);
  addText(slide, 'Nature has millions of years of engineering experience.', 1.03, 3.04, 3.6, 0.65, { fontFace: 'Aptos Display', fontSize: 19, bold: true, color: C.navy, valign: 'mid' });
  addText(slide, 'Teams explore bioluminescence, biodiversity, ecosystems, and the technology inspired by living things.', 1.03, 4.12, 3.65, 0.72, { fontSize: 12, color: C.ink, valign: 'top' });
  addCard(slide, { x: 6.55, y: 2.05, w: 5.7, h: 1.65, accent: C.aqua, label: 'Robot game', title: 'Complete themed missions', body: 'Build and program an autonomous robot to complete biodiversity missions on the official field mat.' });
  addCard(slide, { x: 6.55, y: 4.0, w: 5.7, h: 1.65, accent: C.lime, label: 'Innovation project', title: 'Invent something useful', body: 'Identify a nature or technology problem, create a solution, and share it with others.' });
  addNotes(slide, 'Ask students to name an animal or plant that inspired an invention, such as Velcro, sonar, or glowing lights inspired by fireflies.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 6, 'Competition framework', 'The 4 pillars of FLL', 'A strong team grows in all four areas—not just the robot game.', C.gold);
  const pillars = [
    ['CORE VALUES', 'Team first', 'Discovery, innovation, impact, inclusion, teamwork, and fun.', C.gold],
    ['INNOVATION PROJECT', 'Solve a problem', 'Research, create a solution, and share it with experts and community.', C.lime],
    ['ROBOT DESIGN', 'Engineer wisely', 'Build reliable mechanisms, organize code, test, and explain decisions.', C.aqua],
    ['ROBOT GAME', 'Make it move', 'Score points in a fast 2.5-minute autonomous match.', C.coral],
  ];
  pillars.forEach(([label, title, body, accent], index) => addCard(slide, { x: 0.72 + index * 3.03, y: 2.28, w: 2.68, h: 3.42, accent, number: index + 1, label, title, body }));
  addQuote(slide, 'Balanced teams build skill, confidence, and character at the same time.', 0.72, 6.08, 11.72, 0.54, C.gold);
  addNotes(slide, 'Reassure families that the robot game is one part of the whole experience. Core Values and the Innovation Project matter deeply, too.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 7, 'Team culture', 'Core Values are how we work', 'Gracious Professionalism® and Coopertition® turn competition into community.', C.gold);
  addShape(slide, pptx.ShapeType.roundRect, 0.72, 2.06, 5.25, 4.23, C.navy, { color: C.navy, transparency: 100 }, { radius: 0.08 });
  addPill(slide, 'The golden rule', 1.04, 2.44, 1.62, C.gold, '314B5D');
  addText(slide, '“The kids do\nthe work.”', 1.04, 3.1, 3.95, 1.15, { fontFace: 'Aptos Display', fontSize: 28, bold: true, color: C.white, valign: 'mid' });
  addText(slide, 'Coaches and parents guide, ask questions, and cheer. Students build, code, research, decide, and present.', 1.04, 4.78, 3.9, 0.72, { fontSize: 12, color: 'D9F0EC', valign: 'top' });
  addCard(slide, { x: 6.45, y: 2.06, w: 5.7, h: 1.05, accent: C.aqua, label: 'Gracious Professionalism', title: 'Do high-quality work with kindness and respect.', body: '' });
  addCard(slide, { x: 6.45, y: 3.43, w: 5.7, h: 1.05, accent: C.lime, label: 'Coopertition', title: 'Compete hard—and help everyone grow.', body: '' });
  addCard(slide, { x: 6.45, y: 4.8, w: 5.7, h: 1.05, accent: C.gold, label: 'Learning mindset', title: 'Mistakes are data. We test, learn, and try again.', body: '' });
  addNotes(slide, 'Emphasize that mistakes are celebrated as learning opportunities. The adults should not build or write the students’ work.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 8, 'Let’s build', 'Icebreaker challenges', 'Pick one, set a timer, and learn how your new team thinks together.', C.coral);
  const challenges = [
    ['Tallest tower', '10 LEGO bricks. 3 minutes. Highest freestanding structure wins.', C.aqua],
    ['Bio-tech creature', 'Build a glowing sea creature or beetle for a BIOGLOW ecosystem.', C.lime],
    ['Blindfold relay', 'One partner builds; one partner gives clear directions.', C.coral],
  ];
  challenges.forEach(([title, body, accent], index) => addCard(slide, { x: 0.72 + index * 4.0, y: 2.24, w: 3.62, h: 2.64, accent, number: index + 1, label: '3-minute challenge', title, body }));
  addShape(slide, pptx.ShapeType.roundRect, 2.1, 5.43, 9.05, 0.65, C.navy, { color: C.navy, transparency: 100 }, { radius: 0.08 });
  addText(slide, 'TEAM PROMPT  |  What did you try first—and what would you change next time?', 2.36, 5.66, 8.55, 0.18, { fontSize: 11, bold: true, color: C.white, align: 'center' });
  addNotes(slide, 'Choose one challenge. After building, ask the team to reflect on what worked, what changed, and how they communicated.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 9, 'Robotics toolkit', 'Meet LEGO SPIKE Prime', 'A flexible hardware and coding platform built for ideas that move.', C.aqua);
  addShape(slide, pptx.ShapeType.roundRect, 0.72, 2.08, 4.0, 4.15, C.sky, { color: C.sky, transparency: 100 }, { radius: 0.08 });
  addPill(slide, 'The hub', 1.03, 2.42, 1.08, C.aqua, C.white);
  addText(slide, 'The programmable\nbrain of the robot', 1.03, 3.0, 3.1, 0.72, { fontFace: 'Aptos Display', fontSize: 20, bold: true, color: C.navy, valign: 'mid' });
  addBullets(slide, ['6-axis gyroscope', '5×5 LED light matrix', 'Six smart ports', 'Bluetooth + rechargeable battery'], 1.03, 4.18, 3.05, 0.42, C.aqua, 10.5);
  addCard(slide, { x: 5.15, y: 2.08, w: 3.38, h: 3.93, accent: C.lime, label: 'Movement', title: 'Motors', body: 'High-precision angular motors power a drive base and attachments that solve missions.' });
  addCard(slide, { x: 8.86, y: 2.08, w: 3.38, h: 3.93, accent: C.gold, label: 'Sensing', title: 'Smart sensors', body: 'Color, distance, and force sensors let the robot notice its world and respond.' });
  addNotes(slide, 'Show the physical SPIKE Hub. Demonstrate the LED matrix and identify the motors and sensors.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 10, 'Learning spotlight', 'Code, test, improve, repeat', 'SPIKE Prime supports Scratch-style blocks and Python as students grow.', C.gold);
  addShape(slide, pptx.ShapeType.roundRect, 0.72, 2.08, 5.46, 3.98, C.navy, { color: C.navy, transparency: 100 }, { radius: 0.08 });
  addText(slide, 'The engineering loop', 1.04, 2.46, 3.3, 0.28, { fontFace: 'Aptos Display', fontSize: 17, bold: true, color: C.white });
  const loop = [['BUILD', C.lime], ['CODE', C.aqua], ['TEST', C.gold], ['LEARN', C.coral]];
  loop.forEach(([label, color], index) => {
    const x = 1.04 + (index % 2) * 2.22;
    const y = 3.1 + Math.floor(index / 2) * 1.1;
    addShape(slide, pptx.ShapeType.roundRect, x, y, 1.8, 0.62, color, { color, transparency: 100 }, { radius: 0.07 });
    addText(slide, label, x, y + 0.22, 1.8, 0.13, { fontSize: 9, bold: true, color: C.navy, align: 'center', charSpacing: 1 });
  });
  addCard(slide, { x: 6.62, y: 2.08, w: 5.62, h: 1.5, accent: C.gold, label: 'Prime Lessons', title: 'Practice the essentials', body: 'Line followers, gyro straight drives, and attachment mechanisms.', link: 'https://primelessons.org' });
  addCard(slide, { x: 6.62, y: 3.88, w: 5.62, h: 1.5, accent: C.aqua, label: 'LEGO Education', title: 'Competition Ready units', body: 'Guided lessons that build core robotics and coding skills.', link: 'https://education.lego.com' });
  addNotes(slide, 'Show how visual block coding makes the first programs approachable. Explain that testing is a central part of programming.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 11, 'Innovation project', 'From question to community impact', 'Students turn curiosity into a thoughtful, shareable solution.', C.lime);
  const steps = [
    ['IDENTIFY', 'Find a specific nature or technology problem.', C.coral],
    ['DESIGN', 'Invent a device, app, model, or bio-system.', C.aqua],
    ['SHARE', 'Gather feedback from community experts.', C.gold],
    ['PRESENT', 'Create a clear, creative 5-minute pitch.', C.lime],
  ];
  steps.forEach(([title, body, accent], index) => {
    const x = 0.72 + index * 3.03;
    addCard(slide, { x, y: 2.18, w: 2.68, h: 3.45, accent, number: index + 1, label: 'Step', title, body });
    if (index < 3) addShape(slide, pptx.ShapeType.chevron, x + 2.74, 3.62, 0.22, 0.36, 'B8D6D1', { color: 'B8D6D1', transparency: 100 });
  });
  addQuote(slide, 'A great project begins with careful listening: to a problem, to research, and to people affected by it.', 0.72, 6.03, 11.72, 0.56, C.lime);
  addNotes(slide, 'Explain that interviewing a real scientist, engineer, or community member gives the project stronger research and feedback.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 12, 'Commitment', 'Meeting schedule & expectations', 'Steady weekly practice turns small experiments into a confident team.', C.aqua);
  addShape(slide, pptx.ShapeType.roundRect, 0.72, 2.05, 5.35, 4.12, C.navy, { color: C.navy, transparency: 100 }, { radius: 0.08 });
  addPill(slide, 'Meeting cadence', 1.04, 2.42, 1.43, C.aqua, '1D4E5B');
  addText(slide, 'Once a week\nfor 2.5 hours', 1.04, 3.06, 3.55, 0.94, { fontFace: 'Aptos Display', fontSize: 25, bold: true, color: C.white, valign: 'mid' });
  addText(slide, 'Longer sessions create time to build, code, research, practice, and reset together.', 1.04, 4.6, 3.85, 0.55, { fontSize: 11.5, color: 'D9F0EC', valign: 'top' });
  addCard(slide, { x: 6.5, y: 2.05, w: 5.72, h: 3.73, accent: C.gold, label: 'Student expectations', title: 'Show up ready to contribute', body: '• Attend consistently and on time\n• Encourage teammates and practice Gracious Professionalism®\n• Care for SPIKE Prime parts\n• Take part in the five-minute clean-up' });
  addNotes(slide, 'Explain that attendance matters because robot integration and presentation work depend on every member.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 13, 'Parent partnership', 'A team needs a village', 'Parents empower the team by handling support tasks—not doing the student work.', C.coral);
  const roles = [
    ['SNACK CAPTAIN', 'Coordinate healthy snacks and water for weekly sessions.', C.coral],
    ['PROJECT CONNECTOR', 'Connect the team with bio-tech or environmental experts.', C.lime],
    ['PRACTICE JUDGE', 'Give feedback during mock presentations in weeks 12–13.', C.aqua],
    ['EVENT LOGISTICS', 'Help move robot mats, boards, and supplies on tournament day.', C.gold],
  ];
  roles.forEach(([title, body, accent], index) => addCard(slide, { x: 0.72 + index * 3.03, y: 2.23, w: 2.68, h: 3.5, accent, number: index + 1, label: 'Volunteer role', title, body }));
  addQuote(slide, 'Choose one role that lets you support the team while students stay in the driver’s seat.', 0.72, 6.08, 11.72, 0.54, C.coral);
  addNotes(slide, 'Invite parents to sign up for a volunteer role before leaving. Reinforce that the students remain responsible for the work.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  addHeader(slide, 14, 'Keep learning', 'Recommended video & resource hubs', 'Save these links for practice, research, and season updates.', C.aqua);
  const resources = [
    ['FIRST LEGO League Official', 'Season videos, match highlights, and tournament inspiration.', 'https://www.youtube.com/@FIRSTLEGOLeagueofficial', C.coral],
    ['Prime Lessons', 'SPIKE Prime tutorials for line following, gyro drives, and mechanisms.', 'https://primelessons.org', C.aqua],
    ['LEGO Education', 'Official learning materials and Competition Ready units.', 'https://education.lego.com', C.lime],
    ['FIRST Game & Season Hub', 'Official game, rules, and season updates.', 'https://www.firstinspires.org/programs/fll/game-and-season', C.gold],
  ];
  resources.forEach(([title, body, link, accent], index) => addCard(slide, { x: 0.72 + (index % 2) * 6.0, y: 2.08 + Math.floor(index / 2) * 2.0, w: 5.55, h: 1.54, accent, label: 'Bookmark', title, body, link }));
  addText(slide, 'Each resource button is a clickable hyperlink in PowerPoint.', 0.73, 6.42, 5.6, 0.18, { fontSize: 8, color: C.muted });
  addNotes(slide, 'Encourage parents and students to bookmark these resources on their home devices.');
}

{
  const slide = pptx.addSlide('FLL_MASTER');
  slide.background = { color: C.navy };
  addShape(slide, pptx.ShapeType.rect, 0, 0, W, H, C.navy);
  addShape(slide, pptx.ShapeType.ellipse, 8.72, -1.1, 5.55, 5.55, C.darkMint, { color: C.darkMint, transparency: 65 });
  addShape(slide, pptx.ShapeType.ellipse, 10.1, 0.8, 3.7, 3.7, C.aqua, { color: C.aqua, transparency: 72 });
  addPill(slide, 'Ready to launch', 0.72, 0.83, 1.43, C.lime, '1D4E5B');
  addText(slide, 'Let’s build an\nincredible season.', 0.72, 1.45, 7.0, 1.25, { fontFace: 'Aptos Display', fontSize: 33, bold: true, color: C.white, valign: 'mid' });
  addText(slide, 'Questions, comments, and hands-on LEGO time', 0.75, 3.0, 5.4, 0.25, { fontSize: 14, color: 'D9F0EC' });
  addShape(slide, pptx.ShapeType.roundRect, 0.72, 3.78, 6.6, 1.8, '183D52', { color: '2E5C69', pt: 0.65 }, { radius: 0.08 });
  addText(slide, 'NEXT STEPS', 1.04, 4.06, 1.25, 0.13, { fontSize: 8, bold: true, color: C.lime, charSpacing: 1.2 });
  addBullets(slide, ['Sign the Team Code of Conduct', 'Confirm family contact information', 'Program a first glowing LED animation'], 1.04, 4.37, 5.4, 0.36, C.gold, 10.5);
  addText(slide, 'THANK YOU', 0.75, 6.32, 2.4, 0.27, { fontFace: 'Aptos Display', fontSize: 17, bold: true, color: C.gold, charSpacing: 1.2 });
  addText(slide, 'FLL Challenge  |  BIOGLOW 2026–2027', 9.1, 6.96, 3.35, 0.16, { fontSize: 7.5, color: 'D9F0EC', align: 'right', charSpacing: 0.6 });
  addNotes(slide, 'Open the floor to questions, then invite everyone to the building tables for hands-on SPIKE Hub exploration.');
}

pptx.writeFile({ fileName: outputPath });
