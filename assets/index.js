const startBtn = document.getElementById("startBtn");
const scoreSection = document.getElementById("score");
const quizSection = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const choicesElements = document.getElementById("choices");
const counterElement = document.getElementById("counter");
const scoreDataForm = document.getElementById("scoreData");
const initialsInput = document.getElementById("initials");

let questions = [
    {
        question : "What is the result of the following expression: 5 + '5'?",
        choiceA : "55",
        choiceB : "10",
        choiceC : "5 + '5'",
        choiceD : "15",
        correct : "A"
    },{
        question : "Which of the following is a valid way to comment in JavaScript?",
        choiceA : "# This is a comment",
        choiceB : "<!-- This is a comment -->",
        choiceC : "/* This is a comment */",
        choiceD : "// This is a comment",
        correct : "D"
    },{
        question : "What is the JavaScript operator for equality comparison?",
        choiceA : "==",
        choiceB : "===",
        choiceC : "=>",
        choiceD : "!=",
        correct : "B"
    },{
        question : "Which method is used to remove the last item from an array in JavaScript?",
        choiceA : "pop()",
        choiceB : "push()",
        choiceC : "remove()",
        choiceD : "shift()",
        correct : "A"
    },{
        question : "What is the purpose of the `return` statement in a JavaScript function?",
        choiceA : "To declare a variable",
        choiceB : "To add a comment",
        choiceC : "To exit the function and specify a return value",
        choiceD : "To create a loop",
        correct : "C"
    },{
        question : "In JavaScript, what is the purpose of the `for` loop?",
        choiceA : "To define a function",
        choiceB : "To iterate over a block of code a specific number of times",
        choiceC : "To display a message",
        choiceD : "To format text",
        correct : "B"
    },{
        question : "What does the acronym 'DOM' stand for in web development?",
        choiceA : "Document Object Model",
        choiceB : "Dynamic Object Model",
        choiceC : "Digital Order Module",
        choiceD : "Data Object Management",
        correct : "A"
    },{
        question : "Which built-in JavaScript method is used to round a number to the nearest integer?",
        choiceA : "ceil()",
        choiceB : "floor()",
        choiceC : "round()",
        choiceD : "truncate()",
        correct : "C"
    }
];


let currentQuestion = 0;
let score = 0;
let timer;
let timeLimit = 60; // in seconds

// Event listeners
startBtn.addEventListener("click", startQuiz);
choicesElements.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    checkAnswer(event.target.dataset.index);
  }
});

// Start the quiz
function startQuiz() {
  startBtn.style.display = "none";
  scoreSection.style.display = "none";
  quizSection.style.display = "block";
  showNextQuestion();
  startTimer();
}

// Show the next question
function showNextQuestion() {
    if (currentQuestion < questions.length) {
        const questionData = questions[currentQuestion];
        questionElement.textContent = questionData.question;
        choicesElements.innerHTML = "";

        // Collect all choices (choiceA, choiceB, choiceC, choiceD) and display them
        for (let i = "A".charCodeAt(0); i <= "D".charCodeAt(0); i++) {
            const choiceKey = "choice" + String.fromCharCode(i);
            const choice = questionData[choiceKey];

            const choiceButton = document.createElement("button");
            choiceButton.textContent = choice;
            choiceButton.dataset.index = String.fromCharCode(i);
            choicesElements.appendChild(choiceButton);
        }
    } else {
        endQuiz();
    }
}

// Check the selected answer
function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestion].correct;
  if (selectedIndex == correctIndex) {
    score++;
  } else {
    timeLimit -= 10; // Subtract 10 seconds for wrong answers
  }
  currentQuestion++;
  showNextQuestion();
}

// Start the timer
function startTimer() {
  counterElement.textContent = timeLimit;
  timer = setInterval(() => {
    timeLimit--;
    counterElement.textContent = timeLimit;
    if (timeLimit <= 0) {
      endQuiz();
    }
  }, 1000);
}

// End the quiz
function endQuiz() {
  clearInterval(timer);
  quizSection.style.display = "none";
  scoreSection.style.display = "block";
  document.getElementById("timeText").textContent = timeLimit;
  //document.getElementById("scoreText").textContent = score;
}

// Function to display and auto-sort high scores
function displayAndSortHighScores() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    // Sort highScores by score in descending order
    highScores.sort((a, b) => b.score - a.score);
  
    scoresTableBody.innerHTML = ""; // Clear the previous table body
  
    for (let i = 0; i < highScores.length; i++) {
      const row = document.createElement("tr");
      const positionCell = document.createElement("td");
      positionCell.textContent = i + 1; // 1-based position
      const initialsCell = document.createElement("td");
      initialsCell.textContent = highScores[i].initials;
      const scoreCell = document.createElement("td");
      scoreCell.textContent = highScores[i].score; // Display only the score value
      row.appendChild(positionCell);
      row.appendChild(initialsCell);
      row.appendChild(scoreCell);
      scoresTableBody.appendChild(row);
    }
  }
  
// Handle form submission to save high score
scoreDataForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const initials = initialsInput.value.trim(); // Trim any leading/trailing whitespace
    if (initials !== "") {
        saveHighScore(initials, score);
        displayAndSortHighScores(); // Update the table after adding a new score
    } else {
        alert("Please enter your initials."); // Display an error message
    }
});
  
function saveHighScore(initials, score) {
    if (typeof score === 'number' && initials.trim() !== "") {
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        const newScore = {
            initials: initials,
            score: score,
        };
        highScores.push(newScore);
        highScores.sort((a, b) => b.score - a.score);
        localStorage.setItem("highScores", JSON.stringify(highScores));
        displayAndSortHighScores();
    }
}
  
  // Initialize the quiz (hide score section at the beginning)
  scoreSection.style.display = "none";