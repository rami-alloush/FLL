const parts = [
  ["p1_015_2x_Wedge-belt wheel 24.png", "Wedge-belt wheel ø24", "24 mm pulley wheel"],
  ["p1_016_2x_Tyre for wedge-belt wheel.png", "Tyre for wedge-belt wheel", "Pulley wheel tyre"],
  ["p1_019_4x_Biscuit 1x3x3, black.png", "Biscuit 1x3x3, black", "Black 1 × 3 × 3 biscuit connector"],
  ["p1_030_4x_Angle element, 0 degrees [1].png", "Angle element, 0 degrees [1]", "0° angle connector"],
  ["p1_031_10x_2m fric. snap w cross hole.png", "2m fric. snap w/cross hole", "2-module friction pin with axle hole"],
  ["p1_032_2x_Beam 1m w 2 snaps.png", "Beam 1m w/2 snaps", "1-module beam with two pins"],
  ["p1_033_12x_Beam 3 m. w 4 snaps.png", "Beam 3 m. w/4 snaps", "3-module beam with four pins"],
  ["p1_034_4x_Angular beam 90 degrees w 4 snaps.png", "Angular beam 90 degrees w/4 snaps", "90° angular beam with four pins"],
  ["p1_041_2x_Flat tile 2x2, round, no. 1099.png", "Flat tile 2x2, round, no. 1099", "Round 2 × 2 printed tile"],
  ["p1_042_2x_Bionicle eye.png", "Bionicle eye", "Bionicle eye"],
  ["p1_044_2x_Cross axle, extension 2m.png", "Cross axle, extension 2m", "2-module axle extension"],
  ["p1_045_4x_Angle element 135 degrees. [4].png", "Angle element 135 degrees. [4]", "135° angle connector"],
  ["p1_046_4x_Brick round 2x2, white.png", "Brick round 2x2, white", "White round 2 × 2 brick"],
  ["p1_047_2x_Rim narrow 18x7 mm cross.png", "Rim narrow ø18x7 mm cross", "Narrow 18 × 7 mm wheel rim"],
  ["p1_048_2x_Satellite dish 6x6.png", "Satellite dish 6x6", "6 × 6 satellite dish"],
  ["p1_049_1x_Ball.png", "Ball", "Ball"],
  ["p1_052_2x_Wire clip w cross hole, azur.png", "Wire clip w/ cross hole, azur", "Azure wire clip with axle hole"],
  ["p1_053_4x_Technic 2m beam w cross hole.png", "Technic 2m beam w/cross hole", "2-module Technic beam with axle hole"],
  ["p1_058_2x_Wire clip w cross hole, blue.png", "Wire clip w/ cross hole, blue", "Blue wire clip with axle hole"],
  ["p1_059_2x_Brick 2x4 w cross hole, blue.png", "Brick 2x4 w/ cross hole, blue", "Blue 2 × 4 brick with axle holes"],
  ["p1_061_2x_Double conical wheel z20.png", "Double conical wheel z20", "20-tooth double bevel gear"],
  ["p1_062_2x_Tube, w double 4.85 hole.png", "Tube, w/ double 4.85 hole", "Tube with two pin holes"],
  ["p1_063_2x_Wire clip w cross hole, yellow.png", "Wire clip w/ cross hole, yellow", "Yellow wire clip with axle hole"],
  ["p1_064_4x_Angle element 90 degrees [6].png", "Angle element 90 degrees [6]", "90° angle connector"],
  ["p1_065_4x_Roof tile 1 x2 x 2 3.png", "Roof tile 1 x2 x 2/3", "1 × 2 curved slope"],
  ["p1_066_4x_Brick w half bow 2x3 w cut.png", "Brick w/half bow 2x3 w/cut", "2 × 3 curved brick with cutout"],
  ["p1_076_2x_Wire clip w cross hole, red.png", "Wire clip w/ cross hole, red", "Red wire clip with axle hole"],
  ["p2_119_2x_Brick 2x2, black.png", "Brick 2x2, black", "Black 2 × 2 brick"],
  ["p2_120_4x_Barrel 3x3.png", "Barrel 3x3", "3 × 3 barrel"],
  ["p2_123_2x_Upper part turntable z28.png", "Upper part turntable z28", "28-tooth turntable top"],
  ["p2_130_6x_Catch.png", "Catch", "Technic catch"],
  ["p2_131_12x_Connector peg.png", "Connector peg", "Connector pin"],
  ["p2_137_8x_Cross block 3x2.png", "Cross block 3x2", "3 × 2 perpendicular connector block"],
  ["p2_138_10x_Beam 3 m. w 4 snaps.png", "Beam 3 m. w/4 snaps", "3-module beam with four pins"],
  ["p2_139_6x_Angular beam 90 degrees w 4 snaps.png", "Angular beam 90 degrees w/4 snaps", "90° angular beam with four pins"],
  ["p2_143_4x_Double cross block.png", "Double cross block", "Double perpendicular connector"],
  ["p2_144_2x_Brick 2x2, white.png", "Brick 2x2, white", "White 2 × 2 brick"],
  ["p2_145_4x_Technic 3m beam.png", "Technic 3m beam", "3-module Technic beam"],
  ["p2_146_6x_Technic angular beam 3x5 90 degrees.png", "Technic angular beam 3x5 90 degrees", "3 × 5 Technic L-beam"],
  ["p2_150_4x_Cross axle, extension, 2m.png", "Cross axle, extension, 2m", "2-module axle extension"],
  ["p2_151_2x_Rubber band, white.png", "Rubber band, white", "White rubber band"],
  ["p2_152_1x_Ball 19.png", "Ball ø19", "19 mm ball"],
  ["p2_156_4x_Angle element, 157,5 degr. [3].png", "Angle element, 157,5 degr. [3]", "157.5° angle connector"],
  ["p2_157_2x_Brick 2x2, azur.png", "Brick 2x2, azur", "Azure 2 × 2 brick"],
  ["p2_158_6x_Technic 7m beam.png", "Technic 7m beam", "7-module Technic beam"],
  ["p2_161_16x_Connector peg w knob.png", "Connector peg w/knob", "Connector pin with knob"],
  ["p2_163_36x_Connector peg w. friction 3m.png", "Connector peg w. friction 3m", "3-module friction connector pin"],
  ["p2_164_2x_Double conical wheel z20 w hole.png", "Double conical wheel z20 w/ hole", "20-tooth double bevel gear with axle hole"],
  ["p2_168_2x_Conical wheel z20.png", "Conical wheel z20", "20-tooth bevel gear"],
  ["p2_170_16x_1 2 bush.png", "1/2 bush", "Half bush"],
  ["p2_171_14x_Cross axle 3m.png", "Cross axle 3m", "3-module axle"],
  ["p2_172_6x_Tube, w double 4.85 hole.png", "Tube, w/ double 4.85 hole", "Tube with two pin holes"],
  ["p2_173_2x_Wire clip, w cross hole.png", "Wire clip, w/ cross hole", "Wire clip with axle hole"],
  ["p2_174_12x_Angle element 90 degrees [6].png", "Angle element 90 degrees [6]", "90° angle connector"],
  ["p2_175_4x_Brick round 2x2, yellow.png", "Brick round 2x2, yellow", "Yellow round 2 × 2 brick"],
  ["p2_176_6x_Technic 3m beam.png", "Technic 3m beam", "3-module Technic beam"],
  ["p2_177_4x_T-beam 3x3 w hole.png", "T-beam 3x3 w/hole", "3 × 3 T-beam"],
  ["p2_178_8x_Technic angular beam 2x4 90 degrees.png", "Technic angular beam 2x4 90 degrees", "2 × 4 Technic L-beam"],
  ["p2_184_6x_2m friction snap w cross hole.png", "2m friction snap w/cross hole", "2-module friction pin with axle hole"],
  ["p2_185_8x_Cross axle with 2m snap w fric..png", "Cross axle with 2m snap w/ fric.", "Axle with 2-module friction pin"],
  ["p2_186_2x_Flat tile round 2x2, red.png", "Flat tile round 2x2, red", "Red round 2 × 2 tile"],
  ["p2_187_2x_Rubber band, red.png", "Rubber band, red", "Red rubber band"],
  ["p2_189_12x_Cross block 3m.png", "Cross block 3m", "3-module perpendicular connector"],
  ["p2_190_4x_Technic cross block fork 2x2.png", "Technic cross block fork 2x2", "2 × 2 fork connector block"],
  ["p2_191_2x_Brick 2x4 w cross hole, red.png", "Brick 2x4 w/ cross hole, red", "Red 2 × 4 brick with axle holes"]
].map(([file, official, friendly]) => ({ file, official, friendly }));

const screens = {
  start: document.querySelector("#start-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen")
};
const letters = ["A", "B", "C", "D"];
let round = [];
let questionIndex = 0;
let score = 0;
let misses = [];
let answered = false;

const shuffle = values => {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
};

const showScreen = name => {
  Object.entries(screens).forEach(([key, screen]) => { screen.hidden = key !== name; });
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const startRound = () => {
  round = shuffle(parts).filter((part, index, list) => list.findIndex(item => item.friendly === part.friendly) === index).slice(0, 10);
  questionIndex = 0;
  score = 0;
  misses = [];
  document.querySelector("#score-value").textContent = "0";
  showScreen("quiz");
  renderQuestion();
};

const makeChoices = correct => {
  const uniqueDistractors = shuffle(parts).filter(part => part.friendly !== correct.friendly && !round.some(roundPart => roundPart !== correct && roundPart.friendly === part.friendly));
  const selected = [];
  uniqueDistractors.forEach(part => {
    if (selected.length < 3 && !selected.some(item => item.friendly === part.friendly)) selected.push(part);
  });
  return shuffle([correct, ...selected]);
};

const renderQuestion = () => {
  answered = false;
  const part = round[questionIndex];
  const questionNumber = questionIndex + 1;
  document.querySelector("#question-kicker").textContent = `PART ${String(questionNumber).padStart(2, "0")} · IDENTIFY`;
  document.querySelector("#progress-bar").style.width = `${questionNumber * 10}%`;
  const image = document.querySelector("#part-image");
  image.src = `../clean_elements/${encodeURIComponent(part.file)}`;
  image.alt = `Question ${questionNumber}: LEGO part to identify`;
  const answerList = document.querySelector("#answer-list");
  answerList.innerHTML = "";
  makeChoices(part).forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.innerHTML = `<span class="answer-letter">${letters[index]}</span><span>${choice.friendly}</span>`;
    button.addEventListener("click", () => selectAnswer(choice, button));
    answerList.appendChild(button);
  });
  const feedback = document.querySelector("#feedback");
  feedback.hidden = true;
  feedback.className = "feedback";
  document.querySelector("#next-button").innerHTML = questionNumber === 10 ? "See my results <span aria-hidden=\"true\">→</span>" : "Next part <span aria-hidden=\"true\">→</span>";
};

const selectAnswer = (choice, selectedButton) => {
  if (answered) return;
  answered = true;
  const correct = round[questionIndex];
  const isCorrect = choice.friendly === correct.friendly;
  const buttons = [...document.querySelectorAll(".answer-button")];
  buttons.forEach(button => {
    button.disabled = true;
    if (button.lastElementChild.textContent === correct.friendly) button.classList.add("correct");
  });
  if (isCorrect) {
    score += 1;
    document.querySelector("#score-value").textContent = String(score);
  } else {
    selectedButton.classList.add("wrong");
    misses.push(correct);
  }
  const feedback = document.querySelector("#feedback");
  feedback.hidden = false;
  feedback.classList.toggle("wrong-feedback", !isCorrect);
  document.querySelector("#feedback-icon").textContent = isCorrect ? "✓" : "×";
  document.querySelector("#feedback-title").textContent = isCorrect ? "Correct — nice work!" : `Not quite — it’s ${correct.friendly}.`;
  document.querySelector("#feedback-copy").textContent = `Source name: “${correct.official}”`;
};

const showResults = () => {
  showScreen("result");
  document.querySelector("#final-score").textContent = String(score);
  const heading = score === 10 ? "Master builder!" : score >= 8 ? "Excellent build!" : score >= 6 ? "Solid build!" : "Keep building!";
  const message = score === 10 ? "Perfect score. You know every part in this round." : score >= 8 ? "Great part knowledge. A quick review and you’ll be unstoppable." : score >= 6 ? "Good foundation. Review the missed parts, then try another round." : "Every expert started with one brick. Review these parts and try again.";
  document.querySelector("#result-heading").textContent = heading;
  document.querySelector("#result-message").textContent = message;
  const list = document.querySelector("#review-list");
  list.innerHTML = "";
  if (misses.length === 0) {
    document.querySelector("#review-title").textContent = "Nothing missed";
    document.querySelector("#review-count").textContent = "PERFECT";
    list.innerHTML = '<div class="perfect-review">Every connection was correct.</div>';
    return;
  }
  document.querySelector("#review-title").textContent = "Parts to revisit";
  document.querySelector("#review-count").textContent = `${misses.length} TO REVIEW`;
  misses.forEach(part => {
    const item = document.createElement("article");
    item.className = "review-item";
    item.innerHTML = `<div class="review-image"><img src="../clean_elements/${encodeURIComponent(part.file)}" alt=""></div><div><strong>${part.friendly}</strong><span>Source: ${part.official}</span></div>`;
    list.appendChild(item);
  });
};

document.querySelector("#start-button").addEventListener("click", startRound);
document.querySelector("#restart-button").addEventListener("click", startRound);
document.querySelector("#next-button").addEventListener("click", () => {
  if (!answered) return;
  if (questionIndex === round.length - 1) showResults();
  else {
    questionIndex += 1;
    renderQuestion();
  }
});
document.querySelector(".brand").addEventListener("click", event => {
  event.preventDefault();
  showScreen("start");
});
