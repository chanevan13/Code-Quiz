// Get DOM elements
const startBtn = document.getElementById("startBtn");
const highBtn = document.getElementById("highBtn");
const questionEl = document.getElementById("Question");
const answerBtnsEl = document.getElementById("answer-buttons");
const timeEl = document.getElementById("time");
const winEl = document.querySelector(".win");
const loseEl = document.querySelector(".lose");

// Array of quiz questions and their respective answers
const quizQuestions = [
    {
      question: "What tag do you use to link your JavaScript file?",
      answers: [
        { text: "<script>", correct: true },
        { text: "<div>", correct: false },
        { text: "<link>", correct: false },
        { text: "<href>", correct: false }
      ]
    },
    {
      question: "Which of the following is used to select a class element?",
      answers: [
        { text: "#", correct: false },
        { text: ".", correct: true },
        { text: ":^D", correct: false },
        { text: "$", correct: false }
      ]
    },
    {
      question: "Did you have a hard time learning JavaScript?",
      answers: [
        { text: "No,I was born a prodigy", correct: false },
        { text: "NO!!!!", correct: false },
        { text: "Yes, I still learn something new everyday", correct: true },
        { text: "Learn? I made JAVASCRIPT", correct: false }
      ]
    }   
  ];
  
  
  let shuffledQuestions, currentQuestionIndex, countdownTimer, score;
  
  // Event listeners for buttons
  startBtn.addEventListener("click", startQuiz);
  highBtn.addEventListener("click", viewHighScores);
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button
    startBtn.classList.add("hide");
  
    // Shuffle the quiz questions
    shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
  
    // Display the first quiz question
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  
    // Start the countdown timer
    startTimer();
  
    // Show the answer buttons
    answerBtnsEl.classList.remove("hide");
  }
  
  // Function to show a quiz question
  function showQuestion(question) {
    // Display the quiz question
    questionEl.innerText = question.question;
  
    // Remove any existing answer buttons
    while (answerBtnsEl.firstChild) {
      answerBtnsEl.removeChild(answerBtnsEl.firstChild);
    }
  
    // Create new answer buttons for the quiz question
    question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("Btn", "btn-warning", "rounded", "d-inline");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerBtnsEl.appendChild(button);
    });
  }
  
  // Function to start the countdown timer
  function startTimer() {
    let timeLeft = 30;
    timeEl.textContent = timeLeft;
    countdownTimer = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(countdownTimer);
        showAnswer('Time is up!', false );
      }
    }, 1000);
  }
  
  // Function to handle selecting an answer
  function selectAnswer(e) {
    // Get the selected answer button
    const selectedBtn = e.target;
  }