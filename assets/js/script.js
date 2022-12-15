// Grab elements from css
// BUTTONS
const startBtn = document.querySelector(".start-btn button");
const exitBtn = document.querySelector(".exit-btn button");
const contBtn = document.querySelector(".cont-btn button");
const scoreBtn = document.querySelector(".score-btn button");
const nameInput = document.getElementById("name");
const timer = document.getElementById("timer");

const nextBtn1 = document.querySelector(".next-btn-first button");
const nextBtn2 = document.querySelector(".next-btn-second button");
const nextBtn3 = document.querySelector(".next-btn-third button");
const nextBtn4 = document.querySelector(".next-btn-fourth button");
const nextBtn5 = document.querySelector(".next-btn-fifth button");

// SECTIONS
const rules = document.querySelector(".rules");
const que1 = document.querySelector(".que1");
const que2 = document.querySelector(".que2");
const que3 = document.querySelector(".que3");
const que4 = document.querySelector(".que4");
const que5 = document.querySelector(".que5");
const end = document.querySelector(".end");
const scoreText = document.getElementById("scoreText");
const hiScore = document.querySelector(".hiscore");
const scoreBoard = document.getElementById("hiscore-main");


// QUIZ QUERIES
const q1q1 = document.getElementById("q1q1");
const q1q2 = document.getElementById("q1q2");
const q1q3 = document.getElementById("q1q3");
const q1q4 = document.getElementById("q1q4");

const q2q1 = document.getElementById("q2q1");
const q2q2 = document.getElementById("q2q2");
const q2q3 = document.getElementById("q2q3");
const q2q4 = document.getElementById("q2q4");

const q3q1 = document.getElementById("q3q1");
const q3q2 = document.getElementById("q3q2");
const q3q3 = document.getElementById("q3q3");
const q3q4 = document.getElementById("q3q4");

const q4q1 = document.getElementById("q4q1");
const q4q2 = document.getElementById("q4q2");
const q4q3 = document.getElementById("q4q3");
const q4q4 = document.getElementById("q4q4");

const q5q1 = document.getElementById("q5q1");
const q5q2 = document.getElementById("q5q2");
const q5q3 = document.getElementById("q5q3");
const q5q4 = document.getElementById("q5q4");


// Display Rules when Start Quiz is clicked

startBtn.addEventListener("click", () => {
    console.log("start button clicked");
    startBtn.style.display = "none";
    rules.style.display = "block";
});

// Show start page if Exit Quiz is clicked

exitBtn.addEventListener("click", () => {
    console.log("exit button clicked");
    startBtn.style.display = "block";
    rules.style.display = "none";
});

// Show first question if Continue is clicked

contBtn.addEventListener("click", () => {
    console.log("cont button clicked");
    rules.style.display = "none";
    que1.style.display = "block";

    startTimer();
});

// Timer Function

let time = 120;

function startTimer() {
    timer.textContent = time + " seconds remaining";

    setInterval(function () {
        if (time > 0) {
            time--;
            timer.textContent = time + " seconds remaining";
        }
    }
        , 1000)

    if (time === 0) {
        let time = 0;
        timer.textContent = time + " seconds remaining";
        timeOut();
    }
}

function decTimer() {
    if (time > 10) {
        time -= 10;
        timer.textContent = time + " seconds remaining";
    } else {
        let time = 0;
        timer.textContent = time + " seconds remaining";
        timeOut();
    }
}

function timeOut() {
    que1.style.display = "none";
    que2.style.display = "none";
    que3.style.display = "none";
    que4.style.display = "none";
    que5.style.display = "none";
    finQuiz();
}

// Quiz Functionality

let score = 0;

// Question Box 1 Functionality

q1q1.addEventListener("click", () => {
    q1q1.style.backgroundColor = "#F4998D";
    q1q2.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn1.addEventListener("click", () => {
        console.log("next button1 clicked");
        que1.style.display = "none";
        que2.style.display = "block";
    })
});

q1q2.addEventListener("click", () => {
    score++;
    q1q2.style.backgroundColor = "#26C485";

    nextBtn1.addEventListener("click", () => {
        console.log("next button1 clicked");
        que1.style.display = "none";
        que2.style.display = "block";
    })
    console.log(score);
});


q1q3.addEventListener("click", () => {
    q1q3.style.backgroundColor = "#F4998D";
    q1q2.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn1.addEventListener("click", () => {
        console.log("next button1 clicked");
        que1.style.display = "none";
        que2.style.display = "block";
    })
});

q1q4.addEventListener("click", () => {
    q1q4.style.backgroundColor = "#F4998D";
    q1q2.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn1.addEventListener("click", () => {
        console.log("next button1 clicked");
        que1.style.display = "none";
        que2.style.display = "block";
    })
});

// Question Box 2 Functionality

q2q1.addEventListener("click", () => {
    q2q1.style.backgroundColor = "#F4998D";
    q2q3.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn2.addEventListener("click", () => {
        console.log("next button2 clicked");
        que2.style.display = "none";
        que3.style.display = "block";
    })
});

q2q2.addEventListener("click", () => {
    q2q2.style.backgroundColor = "#F4998D";
    q2q3.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn2.addEventListener("click", () => {
        console.log("next button2 clicked");
        que2.style.display = "none";
        que3.style.display = "block";
    })
    console.log(score);
});


q2q3.addEventListener("click", () => {
    score++;
    q2q3.style.backgroundColor = "#26C485";

    nextBtn2.addEventListener("click", () => {
        console.log("next button2 clicked");
        que2.style.display = "none";
        que3.style.display = "block";
    })
    console.log(score);
});

q2q4.addEventListener("click", () => {
    q2q4.style.backgroundColor = "#F4998D";
    q2q3.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn2.addEventListener("click", () => {
        console.log("next button2 clicked");
        que2.style.display = "none";
        que3.style.display = "block";
    })
});


// Question Box 3 Functionality

q3q1.addEventListener("click", () => {
    score++;
    q3q1.style.backgroundColor = "#26C485";

    nextBtn3.addEventListener("click", () => {
        console.log("next button3 clicked");
        que3.style.display = "none";
        que4.style.display = "block";
    })
    console.log(score);
});

q3q2.addEventListener("click", () => {
    q3q2.style.backgroundColor = "#F4998D";
    q3q1.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn3.addEventListener("click", () => {
        console.log("next button3 clicked");
        que3.style.display = "none";
        que4.style.display = "block";
    })
});

q3q3.addEventListener("click", () => {
    q3q3.style.backgroundColor = "#F4998D";
    q3q1.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn3.addEventListener("click", () => {
        console.log("next button3 clicked");
        que3.style.display = "none";
        que4.style.display = "block";
    })
});

q3q4.addEventListener("click", () => {
    q3q4.style.backgroundColor = "#F4998D";
    q3q1.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn3.addEventListener("click", () => {
        console.log("next button3 clicked");
        que3.style.display = "none";
        que4.style.display = "block";
    })
});

// Question Box 4 Functionality

q4q1.addEventListener("click", () => {
    q4q1.style.backgroundColor = "#F4998D";
    q4q4.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn4.addEventListener("click", () => {
        console.log("next button4 clicked");
        que4.style.display = "none";
        que5.style.display = "block";
    })
});

q4q2.addEventListener("click", () => {
    q4q2.style.backgroundColor = "#F4998D";
    q4q4.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn4.addEventListener("click", () => {
        console.log("next button4 clicked");
        que4.style.display = "none";
        que5.style.display = "block";
    })
});

q4q3.addEventListener("click", () => {
    q4q3.style.backgroundColor = "#F4998D";
    q4q4.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn4.addEventListener("click", () => {
        console.log("next button4 clicked");
        que4.style.display = "none";
        que5.style.display = "block";
    })
});

q4q4.addEventListener("click", () => {
    score++;
    q4q4.style.backgroundColor = "#26C485";

    nextBtn4.addEventListener("click", () => {
        console.log("next button4 clicked");
        que4.style.display = "none";
        que5.style.display = "block";
    })
    console.log(score);
});

// Question Box 5 Functionality

q5q1.addEventListener("click", () => {
    q5q1.style.backgroundColor = "#F4998D";
    q5q2.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn5.addEventListener("click", finQuiz);
});

q5q2.addEventListener("click", () => {
    score++;
    q5q2.style.backgroundColor = "#26C485";

    nextBtn5.addEventListener("click", finQuiz);
    console.log(score);
});

q5q3.addEventListener("click", () => {
    q5q3.style.backgroundColor = "#F4998D";
    q5q2.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn5.addEventListener("click", finQuiz);
});

q5q4.addEventListener("click", () => {
    q5q4.style.backgroundColor = "#F4998D";
    q5q2.style.backgroundColor = "#26C485";
    decTimer();

    nextBtn5.addEventListener("click", finQuiz);
});

// End Screen

function finQuiz() {
    console.log("next button5 clicked");
    que5.style.display = "none";
    end.style.display = "block";
    scoreText.textContent = "You answered " + score + " out of 5 questions correctly."
};

scoreBtn.addEventListener("click", storeScores);

let names = [];
let scores = [];

function storeScores() {

    end.style.display = "none";
    hiScore.style.display = "block";

    let nameInpVal = nameInput.value;
    names.push(nameInpVal);
    scores.push(score);

    localStorage.setItem("names", JSON.stringify(names));
    localStorage.setItem("scores", JSON.stringify(scores));

    renderScores();
};


function renderScores() {
    for (i = 0; i < scores.length; i++) {

        let p = document.createElement("p");
        p.textContent = names[i] + " : " + scores[i];
        scoreBoard.appendChild(p);
    }
};

function init() {
    let storedNames = JSON.parse(localStorage.getItem("names"));
    let storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedNames !== null) {
        names = storedNames;
    }

    if (storedScores !== null) {
        scores = storedScores;
    }
}

init();