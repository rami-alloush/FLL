const students = [
  "Ayaanuddin Syed",
  "Omar Raja",
  "Sakeenah Raja",
  "Abdullah",
  "Maryam M Ali",
  "Abdulrahman Hasan",
  "Mohammed Hassan",
  "Ali Saleh",
  "Ahmed Elshazly",
  "Hasan Eltom",
  "Ahmed Eltom",
  "Anas Ossama",
  "Hozyfa Ossama",
  "Mariam Alloush",
  "Khaled Omar",
  "Younis Ahmed"
];

const questions = [
  ["Favorites", "What is your favorite color, and why?"],
  ["Favorites", "What is your favorite food or snack?"],
  ["Favorites", "What is your favorite game to play?"],
  ["Favorites", "What is your favorite book, show, or movie?"],
  ["Favorites", "What is your favorite thing to build with LEGO?"],
  ["Favorites", "What is your favorite animal?"],
  ["Favorites", "What is your favorite subject at school?"],
  ["Imagine", "If you could invent anything, what would it be?"],
  ["Imagine", "If you could have any superpower, what would you choose?"],
  ["Imagine", "If you built a robot helper, what would it do?"],
  ["Imagine", "If you could visit anywhere in the world, where would you go?"],
  ["Imagine", "If you could explore space or the ocean, which would you pick?"],
  ["Imagine", "What would your dream LEGO set include?"],
  ["Imagine", "If you could meet any inventor, who would it be?"],
  ["About You", "What is something you are really good at?"],
  ["About You", "What is one new thing you want to learn?"],
  ["About You", "What always makes you laugh?"],
  ["About You", "Are you an early bird or a night owl?"],
  ["About You", "What is something you are proud of?"],
  ["About You", "What is one word your friends would use to describe you?"],
  ["About You", "What hobby do you enjoy outside school?"],
  ["Teamwork", "What makes someone a great teammate?"],
  ["Teamwork", "Would you rather build, code, research, or present?"],
  ["Teamwork", "How do you help when your team gets stuck?"],
  ["Teamwork", "What skill would you like to bring to this team?"],
  ["Teamwork", "Do you like leading, planning, creating, or testing most?"],
  ["Teamwork", "What is one goal you have for our team?"],
  ["Quick Pick", "Sweet or salty?"],
  ["Quick Pick", "Cats or dogs?"],
  ["Quick Pick", "Summer or winter?"],
  ["Quick Pick", "Build fast or plan first?"],
  ["Quick Pick", "Wheels or walking robot?"],
  ["Quick Pick", "Music while working: yes or no?"],
  ["Quick Pick", "Would you rather be super fast or super strong?"],
  ["Quick Pick", "Would you rather fly or breathe underwater?"]
].map(([category, text]) => ({ category, text }));

const storageKey = "meet-the-builders-completed";
const views = {
  welcome: document.querySelector("#welcome-view"),
  spotlight: document.querySelector("#spotlight-view"),
  complete: document.querySelector("#complete-view")
};
let completed = loadCompleted();
let currentStudent = null;
let currentQuestions = [];

function loadCompleted() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return stored.filter(name => students.includes(name));
  } catch {
    return [];
  }
}

function saveCompleted() {
  localStorage.setItem(storageKey, JSON.stringify(completed));
}

function initials(name) {
  return name.split(/\s+/).map(word => word[0]).slice(0, 2).join("").toUpperCase();
}

function shuffle(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function showView(name) {
  Object.entries(views).forEach(([key, view]) => { view.hidden = key !== name; });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function randomQuestions() {
  const selected = [];
  const usedCategories = new Set();
  shuffle(questions).forEach(question => {
    if (selected.length < 3 && !usedCategories.has(question.category)) {
      selected.push(question);
      usedCategories.add(question.category);
    }
  });
  return selected;
}

function renderRoster() {
  const list = document.querySelector("#student-list");
  list.innerHTML = "";
  students.forEach(name => {
    const isDone = completed.includes(name);
    const isActive = name === currentStudent;
    const item = document.createElement("li");
    item.className = `student-item${isDone ? " done" : ""}${isActive ? " active" : ""}`;
    item.innerHTML = `<span class="mini-avatar">${initials(name)}</span><span>${name}</span><span class="status-check">${isDone ? "✓" : isActive ? "●" : ""}</span>`;
    list.appendChild(item);
  });
  const remaining = students.length - completed.length;
  document.querySelector("#header-count").textContent = String(completed.length);
  document.querySelector("#remaining-badge").textContent = `${remaining} LEFT`;
  document.querySelector("#progress-bar").style.width = `${completed.length / students.length * 100}%`;
}

function renderQuestions() {
  const list = document.querySelector("#question-list");
  list.innerHTML = "";
  currentQuestions.forEach((question, index) => {
    const card = document.createElement("article");
    card.className = "question-card";
    card.innerHTML = `<span class="question-number">QUESTION 0${index + 1}</span><p>${question.text}</p><span class="question-category">${question.category.toUpperCase()}</span>`;
    list.appendChild(card);
  });
}

function pickStudent() {
  const remaining = students.filter(name => !completed.includes(name));
  if (remaining.length === 0) {
    currentStudent = null;
    showComplete();
    return;
  }
  const alternatives = remaining.filter(name => name !== currentStudent);
  const available = alternatives.length > 0 ? alternatives : remaining;
  currentStudent = available[Math.floor(Math.random() * available.length)];
  currentQuestions = randomQuestions();
  document.querySelector("#student-name").textContent = currentStudent;
  document.querySelector("#student-initials").textContent = initials(currentStudent);
  document.querySelector("#turn-label").textContent = `TURN ${String(completed.length + 1).padStart(2, "0")} OF ${students.length}`;
  const redrawButton = document.querySelector("#redraw-button");
  redrawButton.disabled = remaining.length === 1;
  redrawButton.textContent = remaining.length === 1 ? "Last builder remaining" : "Put name back & redraw";
  renderQuestions();
  renderRoster();
  showView("spotlight");
}

function finishTurn() {
  if (!currentStudent) return;
  if (!completed.includes(currentStudent)) completed.push(currentStudent);
  saveCompleted();
  currentStudent = null;
  renderRoster();
  if (completed.length === students.length) showComplete();
  else pickStudent();
}

function redrawStudent() {
  pickStudent();
}

function showComplete() {
  currentStudent = null;
  renderRoster();
  const mosaic = document.querySelector("#team-mosaic");
  mosaic.innerHTML = students.map(name => `<span class="mosaic-person" title="${name}">${initials(name)}</span>`).join("");
  showView("complete");
}

function resetSession(requestConfirmation = true) {
  if (requestConfirmation && completed.length > 0 && !window.confirm("Reset the session and return all students to the draw?")) return;
  completed = [];
  currentStudent = null;
  currentQuestions = [];
  saveCompleted();
  renderRoster();
  showView("welcome");
}

document.querySelector("#pick-button").addEventListener("click", pickStudent);
document.querySelector("#complete-turn-button").addEventListener("click", finishTurn);
document.querySelector("#redraw-button").addEventListener("click", redrawStudent);
document.querySelector("#shuffle-questions-button").addEventListener("click", () => {
  currentQuestions = randomQuestions();
  renderQuestions();
});
document.querySelector("#reset-button").addEventListener("click", () => resetSession(true));
document.querySelector("#new-session-button").addEventListener("click", () => resetSession(false));
document.querySelector(".brand").addEventListener("click", event => {
  event.preventDefault();
  if (completed.length === students.length) showComplete();
  else if (currentStudent) showView("spotlight");
  else showView("welcome");
});

renderRoster();
if (completed.length === students.length) showComplete();
