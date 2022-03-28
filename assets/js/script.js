const activeQuestion = document.querySelector("#active-question");
const activeChoice = Array.from(document.querySelectorAll("#active-choice"));
const activeTimer = document.querySelector("#active-timer");
const activeScore = document.querySelector("#active-score");

var currentQuestion = {};
var answerAccept = false;
var startingScore = 0;
var availQuestions = [];

var questionListArr = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<scripting>",
        choice2: "<js>",
        choice3: "<script>",
        choice4: "<javascript>",
        correct: 3,
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choice1: '<script src="xxx.js">',
        choice2: '<script href="xxx.js">',
        choice3: '<script name="xxx.js">',
        choice4: '<script type="xxx.js">',
        correct: 1,
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        choice1: 'alertBox("Hello World");',
        choice2: 'alert("Hello World");',
        choice3: 'msg("Hello World");',
        choice4: 'msgBox("Hello World");',
        correct: 2,
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        choice1: "if i === 5 then",
        choice2: "if i = 5",
        choice3: "if i = 5 then",
        choice4: "if (i === 5)",
        correct: 4,
    },
    {
        question: "How does a FOR loop start?",
        choice1: "for (i = 0; i < 5; i++)",
        choice2: "for i = 1 to 5",
        choice3: "for (i = 0); i < 5)",
        choice4: "for (i < 5; i++)",
        correct: 1,
    }
];

const correctQuestionScore = 20;
const questionMaxNum = 5;

function startQuiz() {
    questionNum = 0;
    score = 0;
    availQuestion = [...questionListArr];
    console.log(availQuestion);
    nextQuestion();
};

function nextQuestion() {
    if(availQuestion.length === 0 || questionNum > questionMaxNum) {
        return window.location.assign("/end.html");
    }

    questionNum++;
    const iQuestions = Math.floor(Math.random() * availQuestion.length);
    currentQuestion = availQuestion[iQuestions];
    activeQuestion.innerText = currentQuestion.question;

    activeChoice.forEach(activeChoice => {
        const num = activeChoice.dataset["number"];
        activeChoice.innerText = currentQuestion["choice" + num];
    });
    availQuestion.splice(iQuestions, 1);

    answerAccept = true;
};

activeChoice.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!answerAccept)
        return;

        answerAccept = false;
        const choiceSelect = e.target;
        const answerSelect = choiceSelect.dataset["number"];
        nextQuestion();
    });
});

startQuiz();