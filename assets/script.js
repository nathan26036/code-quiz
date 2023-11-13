var startEl = document.querySelector("#start");
var startBtn = document.querySelector("#startBtn");
var timeEl = document.querySelector("#time");
var questionsEl = document.querySelector("#quiz");
var questionEl = document.querySelector("#question");
var resultEl = document.querySelector("#result");
var scoreEl = document.querySelector("#score");
var ansBtn = document.querySelectorAll("button.ansBtn");
var ansAbtn = document.querySelector("#a");
var ansBbtn = document.querySelector("#b");
var ansCbtn = document.querySelector("#c");
var ansDbtn = document.querySelector("#d");
var backBtn = document.querySelector("#backbtn");
var clearBtn = document.querySelector("#clearscores");
var hsBtn = document.querySelector("#hsBtn");
var hsEl = document.querySelector("#highScore");
var finalEl = document.querySelector("#final");
var initials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-score");
var backbtn = document.querySelector("#backbtn")
var scoreLi = document.querySelector("#score-list")
var scoreList = [];
var secondsLeft = 60;
var questionCount = 0;

var questions = [
   {
        question: "java ______?",
        answers: ["A. script", "B. page", "C. rock", "D. paper"],
        correctAnswer: "0",
   },  
    {
        question: "Commonly used data types do NOT include:",
        answers: ["A. String", "B. Alerts", "C. Boolean", "D. Numbers"],
        correctAnswer: "1",
   },
    {
        question: "Strings are enclosed in: ",
        answers: ["A. <>", "B. []", "C. ()", "D. ''"],
        correctAnswer: "3",
   },
    {
        question: "Which one is Not a coding language?",
        answers: ["A. JavaScript", "B. The Bible", "C. CSS", "D. HTML"],
        correctAnswer: "1",
   },
    {
        question: "Which one is a string",
        answers: ["A. 10", "B. true", "C. '10'", "D. 10.5"],
        correctAnswer: "2",
   }
];

//====================================================================

// Timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = "You scored: " + secondsLeft + " points!";
        }
    }, 1000);
}
//====================================================================

// Starts the quiz
function startQuiz() {
    startEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
};
//====================================================================

// Adds the questions in 
function setQuestion(count) {
    if (count < questions.length) {
        questionEl.textContent = questions[count].question;
        ansAbtn.textContent = questions[count].answers[0];
        ansBbtn.textContent = questions[count].answers[1];
        ansCbtn.textContent = questions[count].answers[2];
        ansDbtn.textContent = questions[count].answers[3];
    }
};
//====================================================================

//checks the answers and displays if correct or wrong
function checkAnswer(event) {

    //creates the text block to display right or wrong
    resultEl.style.display = "block";
    var ansP = document.createElement("p");
    resultEl.appendChild(ansP)

    //Removes the right or wrong text displays
    setTimeout(function () {
        ansP.style.display = "none";
    }, 1000);

    // Answer checker
    var score = 0; 

    if (questions[questionCount].correctAnswer === event.target.value) {
        ansP.textContent = "Correct :)";
        score++;
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        ansP.textContent = "Wrong :(";
        secondsLeft -= 10;
    }

    if (questionCount < questions.length) {
        questionCount++;
    }
    
    setQuestion(questionCount);
};
//====================================================================

function addHighScore() {

    finalEl.style.display = "none";
    hsEl.style.display = "block";

    var userInitals = initials.value.toUpperCase();
    //Puts the scores in an array to display
    scoreList = []
    scoreList.push({ initials: userInitals, score: secondsLeft});

    //Stores items to local storage
    localStorage.setItem("initials", JSON.stringify(userInitals));
    localStorage.setItem("score", JSON.stringify(secondsLeft));

    //Loops to create li elements that has the scores and adds more when more scores are added to the array
    for (let i = 0; i < scoreList.length; i++) {
        var highScoreLi = document.createElement("li");
        highScoreLi.textContent = scoreList[i].initials + " - " + scoreList[i].score;
        scoreLi.appendChild(highScoreLi);
    }

    pullhighscore();
    //Clears the submit input
    document.getElementById("initials").value = "";
}

//Pulls the scores from local storage
function pullhighscore(){
    var lastScore = JSON.parse(localStorage.getItem("score"));
    if (lastScore !== null) {
        scoreList = lastScore;
    }
    var lastInitial = JSON.parse(localStorage.getItem("initials"));
    if (lastInitial !== null) {
        scoreList = lastInitial;
    }
}
// Displays the Highscore screen 
function highScore() {

    if (hsEl.style.display === "none") {
        hsEl.style.display = "block";
        resultEl.style.display = "none";
        startEl.style.display = "none";
        questionsEl.style.display = "none";
    } else if (hsEl.style.display === "block") {
        hsEl.style.display = "none";
        startEl.style.display = "block";
    } else {
        return alert("No scores to show.");
    }

    pullhighscore();
};


//====================================================================

//Starts quiz
startBtn.addEventListener("click", startQuiz);

//Add an event listener to each answer in the answers array
ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});

//Highscore button to check high score anytime
hsBtn.addEventListener("click", highScore);

submitBtn.addEventListener("click", addHighScore)

//Gos back to the start and resets the timer
backBtn.addEventListener("click", function () {
    hsEl.style.display = "none";
    startEl.style.display = "block";
    secondsLeft = 60;
    timeEl.textContent = "Timer: " + secondsLeft;
});

//Clears the Highscore and local storage
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    scoreLi.innerHTML="";
});

