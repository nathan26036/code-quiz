var startEl = document.querySelector("#start");
var startBtn = document.querySelector("#startBtn");

var timeEl = document.querySelector("#time");
var secondsLeft = 60;
var questionCount = 0;
var questionsEl = document.querySelector("#quiz");
var questionEl = document.querySelector("#question")
var resultEl = document.querySelector("#result")
var scoreList = [];
var scoreEl = document.querySelector("#score")

// single answer buttons
var ans1Btn = document.querySelector("#a");
var ans2Btn = document.querySelector("#b");
var ans3Btn = document.querySelector("#c");
var ans4Btn = document.querySelector("#d");

// buttons in the high score area 
var backBtn = document.querySelector("#backbtn");
var clearBtn = document.querySelector("#clearscores");

var finalEl = document.querySelector("#final");

var questions = [
   {
        question: "WHo is fnaf",
        answers: ["A. fred", "B. fox", "C. cat", "D. gold buni"],
        correctAnswers: "3",
   },  
    {
        question: "",
        answers: [],
        correctAnswers: "",
   },
    {
        question: "",
        answers: [],
        correctAnswers: "",
   },
    {
        question: "",
        answers: [],
        correctAnswers: "",
   },
    {
        question: "",
        answers: [],
        correctAnswers: "",
   }
];

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft + "s";

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}

function startQuiz() {
    startEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();

};

function setQuestion() {

}

startBtn.addEventListener("click", startQuiz);

