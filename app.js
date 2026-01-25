// ================================
// VIEW ELEMENTS
// ================================
const homeView = document.getElementById("homeView");
const sessionView = document.getElementById("sessionView");

const topicTitle = document.getElementById("topicTitle");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

// ================================
// TOPIC BUTTONS
// ================================
const topicButtons = document.querySelectorAll(".topic-list button");

// ================================
// VIEW CONTROL (ONLY PLACE THAT TOUCHES .hidden)
// ================================
function showHome() {
  homeView.hidden = false;
  sessionView.hidden = true;
}

function showSession(topic, displayTitle) {
  topicTitle.textContent = displayTitle || topic;
  homeView.hidden = true;
  sessionView.hidden = false;

  startSession(topic);
}

// ================================
// SESSION / CARD LOGIC
// ================================
let currentCards = [];
let currentIndex = 0;

// Fisher-Yates shuffle to randomize answer order
function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startSession(topic) {
  // NOTE: This assumes data.js exposes something like `CARD_DATA`
  // Adjust mapping as needed to match your data structure

  if (topic === "all") {
    currentCards = Object.values(CARD_DATA).flat();
  } else {
    currentCards = CARD_DATA[topic] || [];
  }

  currentIndex = 0;
  renderCard();
}

function renderCard() {
  if (!currentCards.length) return;

  const card = currentCards[currentIndex];

  // Hide feedback from previous card
  document.getElementById("feedback").hidden = true;

  document.getElementById("questionText").textContent = card.question;

  const answersContainer = document.querySelector(".answers");
  answersContainer.innerHTML = "";

  const shuffledAnswers = shuffleArray(card.answers);

  shuffledAnswers.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = answer.text;

    btn.addEventListener("click", () => handleAnswer(answer.correct, card.explanation));
    answersContainer.appendChild(btn);
  });

  updateProgress();
}

function handleAnswer(correct, explanation) {
  const feedback = document.getElementById("feedback");
  const feedbackText = document.getElementById("feedbackText");

  feedback.hidden = false;
  const result = correct ? "Correct!" : "Not quite.";
  feedbackText.textContent = `${result} ${explanation || "No explanation available."}`;
}

function updateProgress() {
  const progressText = document.getElementById("progressText");
  const progressFill = document.getElementById("progressFill");

  progressText.textContent = `${currentIndex + 1} / ${currentCards.length}`;
  progressFill.style.width = `${((currentIndex + 1) / currentCards.length) * 100}%`;
}

function nextCard() {
  if (currentIndex < currentCards.length - 1) {
    currentIndex++;
    renderCard();
  }
}

// ================================
// HELPERS
// ================================
function topicToKey(title) {
  return title
    .toLowerCase()
    .replace(/ /g, "-");
}

// ================================
// EVENT LISTENERS
// ================================
topicButtons.forEach(button => {
  button.addEventListener("click", () => {
    const topic = button.getAttribute("data-topic") || button.textContent;
    showSession(topic, button.textContent);
  });
});

backButton.addEventListener("click", () => {
  showHome();
});

nextButton.addEventListener("click", () => {
  nextCard();
});

// ================================
// INITIAL STATE
// ================================
showHome();