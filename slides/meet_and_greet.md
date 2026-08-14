---
marp: true
theme: default
size: 16:9
paginate: true
header: "FIRST® LEGO® LEAGUE  |  BIOGLOW™ 2026–2027"
footer: "Meet & Greet  ·  Founders Edition / SPIKE™ Prime"
style: |
  section {
    box-sizing: border-box;
    padding: 58px 76px 52px;
    background-color: #071b22;
    background-image: radial-gradient(circle at 92% 8%, rgba(0, 212, 190, 0.23), transparent 24%), radial-gradient(circle at 78% 92%, rgba(174, 214, 67, 0.15), transparent 28%);
    color: #edf7f4;
    font-family: Aptos, Arial, sans-serif;
    font-size: 25px;
    line-height: 1.35;
  }
  section::before {
    color: #82d7ce;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.1em;
  }
  section::after {
    color: #b9cfc9;
    font-size: 13px;
  }
  h1, h2, h3 {
    font-family: "Aptos Display", Aptos, Arial, sans-serif;
    letter-spacing: -0.025em;
    margin: 0 0 0.32em;
  }
  h1 {
    color: #ffffff;
    font-size: 66px;
    line-height: 1.03;
  }
  h2 {
    color: #ffffff;
    font-size: 44px;
    line-height: 1.08;
  }
  h3 {
    color: #aee54a;
    font-size: 24px;
    margin-top: 0.35em;
  }
  p { margin: 0.35em 0; }
  strong { color: #ffffff; }
  a { color: #75e4d8; font-weight: 700; }
  code { color: #aee54a; }
  blockquote {
    border-left: 7px solid #00b8a9;
    background: rgba(255, 255, 255, 0.07);
    border-radius: 0 14px 14px 0;
    margin: 0.65em 0;
    padding: 0.48em 0.8em;
    color: #e6f5f0;
  }
  table {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 20px;
    margin-top: 0.45em;
    margin-bottom: 0.8em;
    overflow: hidden;
    border: 1px solid rgba(202, 237, 228, 0.22);
    border-radius: 12px;
  }
  th {
    background: #0f4a52;
    color: #ffffff;
    padding: 0.5em 0.75em;
    text-align: left;
  }
  td {
    padding: 0.5em 0.75em;
    background: rgba(255, 255, 255, 0.055);
    color: #e6f5f0;
    border-color: rgba(202, 237, 228, 0.16);
  }
  th:first-child, td:first-child {
    width: 35%;
  }
  th:last-child, td:last-child {
    width: 65%;
  }
  ul, ol { margin: 0.38em 0 0; padding-left: 1.15em; }
  li { margin: 0.24em 0; }
  section.lead {
    padding: 76px;
    background-color: #06252b;
    background-image: radial-gradient(circle at 86% 18%, rgba(0, 202, 182, 0.42), transparent 26%), radial-gradient(circle at 73% 65%, rgba(171, 216, 62, 0.24), transparent 24%), linear-gradient(135deg, #06242a 0%, #0b3a42 100%);
  }
  section.lead h1 { font-size: 72px; max-width: 820px; }
  section.lead h2 { color: #b8e94e; font-size: 32px; font-weight: 600; }
  section.light {
    background-color: #f3faf7;
    background-image: radial-gradient(circle at 90% 5%, rgba(0, 184, 169, 0.17), transparent 24%), linear-gradient(135deg, #f8fcfa 0%, #e7f7f1 100%);
    color: #19383b;
  }
  section.light h1, section.light h2 { color: #103b40; }
  section.light h3 { color: #087e76; }
  section.light strong { color: #103b40; }
  section.light a { color: #007d73; font-weight: 700; }
  section.light blockquote { background: #ddf2eb; color: #164047; }
  section.light table { border-color: #b8d9d1; }
  section.light th { background: #0c756f; color: #ffffff; }
  section.light td { background: #ffffff; color: #103b40; border-color: #d1e7e0; font-weight: 500; }
  section.light td strong { color: #103b40; }
  section.light .callout { background: rgba(244, 177, 62, 0.18); color: #103b40; }
  section.light .callout strong { color: #103b40; }
  section.light .card { border-color: #c2dfd7; background: rgba(255, 255, 255, 0.75); }
  section.light .source { color: #4d7271; }
  section.accent {
    background-color: #13434b;
    background-image: radial-gradient(circle at 8% 10%, rgba(174, 229, 74, 0.19), transparent 24%), radial-gradient(circle at 92% 88%, rgba(244, 177, 62, 0.23), transparent 22%);
  }
  .kicker {
    color: #8be6da;
    font-size: 17px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
    align-items: start;
  }
  .columns-3 {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    align-items: stretch;
  }
  .card {
    box-sizing: border-box;
    min-height: 210px;
    padding: 22px 25px;
    border: 1px solid rgba(207, 240, 230, 0.23);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.075);
  }
  .light .card {
    border-color: #c2dfd7;
    background: rgba(255, 255, 255, 0.75);
  }
  .card h3 { margin-top: 0; }
  .card p, .card ul { font-size: 20px; }
  .tag {
    display: inline-block;
    margin-bottom: 8px;
    padding: 4px 10px;
    border-radius: 999px;
    background: #aee54a;
    color: #12383d;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .callout {
    padding: 19px 24px;
    border-left: 7px solid #f4b13e;
    border-radius: 0 14px 14px 0;
    background: rgba(244, 177, 62, 0.12);
    font-size: 23px;
  }
  .small { font-size: 18px; }
  .source { color: #b9cfc9; font-size: 15px; }
  .light .source { color: #4d7271; }
---

<!-- _class: lead -->

<div class="kicker">Official team kickoff</div>

# FIRST LEGO LEAGUE<br>CHALLENGE

## BIOGLOW™ · 2026–2027

**Meet & Greet for students and families**<br>
FLL Founders Edition Challenge · SPIKE™ Prime

> **Tonight’s goal:** meet your team, understand the season, and answer any questions.

---

<!-- _class: light -->

<div class="kicker">90 minutes together</div>

# Today’s roadmap

<div class="columns">
<div class="card">

<span class="tag">Discover</span>

### The FLL experience

What students build, code, research, and present—and why Core Values guide every part of it.

</div>
<div class="card">

<span class="tag">Watch</span>

### BIOGLOW kickoff

Meet this year’s biodiversity theme and see the official season material in action.

</div>
<div class="card">

<span class="tag">Try</span>

### Learn together

Quick LEGO challenges for students and families, followed by a first look at SPIKE Prime.

</div>
<div class="card">

<span class="tag">Plan</span>

### Make the season work

Meeting rhythm, family support, official resources, questions, and next steps.

</div>
</div>

---

<div class="kicker">The program</div>

# What is FIRST LEGO League Challenge?

<div class="columns">
<div>

FIRST LEGO League is a team-based STEM program in which students use **research, engineering, coding, and communication** to tackle a shared challenge.

> Teams learn to solve problems with curiosity, persistence, and respect for one another.

</div>
<div class="card">

### SPIKE Prime team

- Build and program an autonomous robot
- Explore a real-world biodiversity challenge
- Design and share an Innovation Project solution
- Practice presenting, teamwork, and reflection

</div>
</div>

---

<!-- _class: accent -->

<div class="kicker">Watch first</div>

# Welcome to BIOGLOW™

<div class="columns">
<div class="card">

<span class="tag">What is FLL?</span>

### About FIRST LEGO League

[Watch: About FIRST LEGO League](https://www.youtube.com/watch?v=8J43DQixwPI&t=2s)

A short overview of FIRST LEGO League for families and new team members.

</div>
<div class="card">

<span class="tag">3–5 minute opener</span>

### Official season reveal

[Watch: Introducing the 2026–2027 FIRST LEGO League BIOGLOW Season](https://www.youtube.com/watch?v=_g9kl7xb8nU)

Introduce the biodiversity theme and give families a shared picture of the season.

</div>
</div>

---

<!-- _class: light -->

<div class="kicker">The 2026–2027 season</div>

# BIOGLOW™ is about biodiversity

<div class="columns">
<div>

Nature is full of connected systems. This season, teams explore **the vibrancy of the world’s ecosystems** and ask how people, plants, animals, and technology can work together.

### Our team’s path: Founders Edition

Our current experience is built around **SPIKE Prime**, an autonomous Robot Game, an Innovation Project, and Core Values.

</div>
<div class="card">

### A helpful update for families

BIOGLOW offers **Founders Edition** and **Future Edition** experiences. Availability, format, and timing vary by region.

**Founders Edition Challenge** is the relevant path for teams using SPIKE Prime.

</div>
</div>

<p class="source">Official source: <a href="https://www.firstinspires.org/programs/fll/game-and-season">FIRST Game &amp; Season</a> · <a href="https://www.firstinspires.org/resources/library/fll/season-materials">BIOGLOW season materials</a></p>

---

<div class="kicker">Robot game snapshot</div>

# A rainforest field. Fifteen missions. One strategy.

<div class="columns-3">
<div class="card">

<span class="tag">Mission design</span>

### 15 rainforest missions

The Founders Edition Robot Game explores connections among plants, animals, and people.

</div>
<div class="card">

<span class="tag">Match play</span>

### 2½ minutes

The robot acts autonomously. Teams choose which missions to attempt and in what order.

</div>
<div class="card">

<span class="tag">Team quality</span>

### Core Values matter

Teams also demonstrate Gracious Professionalism during official Robot Game matches.

</div>
</div>

> Start simple. A repeatable mission is more valuable than a mission that only works once.

<p class="source">Use the official Robot Game Rulebook and current updates as the source of truth for scoring, equipment, and match requirements.</p>

---

<!-- _class: light -->

<div class="kicker">Official game resources</div>

# Watch, set up, then read the rulebook

| Use it for | Official resource |
| :--- | :--- |
| Season overview | [BIOGLOW Season Materials](https://education.lego.com/en-us/first-lego-league/season-materials/) |
| Field orientation & scoring | [BIOGLOW Missions Video (Founders Edition)](https://www.youtube.com/watch?v=uhZZ8O1StiQ) |
| Building the official field | [BIOGLOW Field Setup Video](https://www.youtube.com/watch?v=wDan0826cn0) |
| Rules, updates & meeting guides | [FIRST Game &amp; Season Portal](https://www.firstinspires.org/programs/fll/game-and-season) |

<div class="callout">Before the first robot build: <strong>watch the field setup video and read the current rulebook together.</strong></div>

---

<div class="kicker">The whole challenge</div>

# The four pillars of FLL

<div class="columns-3">
<div class="card">

<span class="tag">01</span>

### Core Values

Discovery, Innovation, Impact, Inclusion, Teamwork, and Fun guide how the team works.

</div>
<div class="card">

<span class="tag">02</span>

### Innovation Project

Research a biodiversity-related problem, create a solution, and share it with others.

</div>
<div class="card">

<span class="tag">03</span>

### Robot Design + Game

Engineer a dependable robot, explain the decisions behind it, and use it in the 2½-minute Robot Game.

</div>
</div>

> Success is not only a score. It is a team that learns to make thoughtful decisions together.

---

<!-- _class: light -->

<div class="kicker">Team culture</div>

# How we will work together

<div class="columns">
<div class="card">

<span class="tag">Gracious Professionalism®</span>

### Do high-quality work with kindness

We treat teammates, volunteers, and other teams with respect—especially when things are difficult.

</div>
<div class="card">

<span class="tag">Coopertition®</span>

### Compete hard. Help everyone grow.

We share learning, celebrate improvement, and remember that other teams are fellow problem-solvers.

</div>
</div>

<div class="callout"><strong>The golden rule:</strong> Students do the work. Coaches and families guide with questions, encouragement, logistics, and safety support.</div>

<!-- ---

<div class="kicker">Try it now</div>

# Three quick team challenges

<div class="columns-3">
<div class="card">

<span class="tag">3 minutes</span>

### Tallest tower

Use 10 LEGO bricks to build the tallest freestanding tower you can.

**Debrief:** What made your base stable?

</div>
<div class="card">

<span class="tag">5 minutes</span>

### Ecosystem engineer

Build a model that helps a rainforest plant or animal survive.

**Debrief:** What problem does it solve?

</div>
<div class="card">

<span class="tag">5 minutes</span>

### Direction relay

One partner builds while the other gives precise, respectful directions.

**Debrief:** Which instructions helped most?

</div>
</div> -->

---

<!-- _class: light -->

<div class="kicker">Our robotics platform</div>

# Meet SPIKE™ Prime

<div class="columns">
<div class="card">

<span class="tag">The hub</span>

### The robot’s brain

- 6-axis gyroscope for heading and turning
- 5×5 LED light matrix
- Bluetooth and rechargeable battery
- Six ports for motors and sensors

</div>
<div class="card">

<span class="tag">Motors + sensors</span>

### The robot’s body and senses

- Angular motors for driving and attachments
- Color Sensor for lines and markers
- Distance Sensor for measuring proximity
- Force Sensor for touch and control inputs

</div>
</div>

> First mini-lab: connect the Hub, display a glowing image, and make a motor move when the Force Sensor is pressed.

---

<div class="kicker">Build the right habits</div>

# Learn robotics in a repeatable loop

<div class="columns-3">
<div class="card">

<span class="tag">Build</span>

### Make one simple mechanism

Start with a stable driving base and one purpose at a time.

</div>
<div class="card">

<span class="tag">Code</span>

### Write a small program

Use Word Blocks first; move toward reusable My Blocks and Python when ready.

</div>
<div class="card">

<span class="tag">Test + improve</span>

### Collect evidence

Run the same test more than once. Record what changed and what the robot did.

</div>
</div>

<p class="source">Official skill-building path: <a href="https://education.lego.com/en-us/lessons/prime-competition-ready/">LEGO Education SPIKE Prime Competition Ready</a></p>

---

<!-- _class: light -->

<div class="kicker">Innovation Project</div>

# Turn curiosity into community impact

| Step | What students do |
| :--- | :--- |
| **Identify** | Observe a specific biodiversity or ecosystem challenge. |
| **Research** | Learn from credible sources and people who understand the problem. |
| **Design** | Create, compare, and improve possible solutions. |
| **Share** | Gather feedback, refine the idea, and tell the story clearly. |

<div class="callout">Start with listening. A conversation with an expert, local organization, or affected community member can make a project more useful and more original.</div>

---

<div class="kicker">A rhythm that builds momentum</div>

# Weekly team schedule

<div class="columns">
<div class="card">

<span class="tag">Once per week</span>

### 2.5 hours together

A steady meeting rhythm gives the team enough time to build, code, research, present, and clean up well.

</div>
<div class="card">

<span class="tag">A simple session pattern</span>

- 15 min: check-in and goals
- 45 min: robot build / code / test
- 45 min: Innovation Project work
- 25 min: share-out, documentation, and reset
- 20 min: team building or focused skill practice

</div>
</div>

---

<!-- _class: light -->

<div class="kicker">Family partnership</div>

# Adults make the team possible

<div class="columns-3">
<div class="card">

<span class="tag">Keep us ready</span>

### Session support

Coordinate water and sign-ins.

</div>
<div class="card">

<span class="tag">Open doors</span>

### Project connector

Help the team meet people who understand ecosystems, conservation, research, or technology.

</div>
<div class="card">

<span class="tag">Make events work</span>

### Practice judge & logistics

Offer feedback during rehearsals and help with travel or equipment on event days.

</div>
</div>

> The most valuable adult support removes obstacles so students can lead.

---

<div class="kicker">Keep these close</div>

# Official resource hub

<div class="columns">
<div class="card">

### FIRST LEGO League

- [BIOGLOW Game & Season](https://www.firstinspires.org/programs/fll/game-and-season)
- [BIOGLOW season materials](https://www.firstinspires.org/resources/library/fll/season-materials)
- [FIRST LEGO League YouTube channel](https://www.youtube.com/@FIRSTLEGOLeagueofficial)

</div>
<div class="card">

### LEGO Education

- [BIOGLOW Founders Edition materials](https://education.lego.com/en-us/first-lego-league/season-materials/)
- [SPIKE Prime Competition Ready](https://education.lego.com/en-us/lessons/prime-competition-ready/)
- [SPIKE Prime lesson-planning units](https://education.lego.com/en-us/teacher-resources/lego-education-spike-prime/lesson-planning/lego-education-spike-prime-lesson-planning-themed-units/)

</div>
</div>

<p class="source">Links verified August 11, 2026. Official game and event requirements can change; check the Game & Season portal before acting on them.</p>

---

<!-- _class: lead -->

<div class="kicker">Ready to begin</div>

# Let’s make a team<br>that glows.

## Questions and Members Introduction

<div class="columns">
<div class="card">

### Leave with one answer

**What is one thing you are ready to build, learn, or help with this season?**

</div>
</div>
