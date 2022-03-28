const userName = document.querySelector("#user-submit");
const saveScore = document.querySelector("#save-score");
const lastScore = localStorage.getItem("lastScore");
const finalScore = document.querySelector("#final-score");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const highscoreMaxNum = 5;

finalScore.innerText = "your final score was " + lastScore

userName.addEventListener("keyup", () => {
    saveScore.disabled = !userName.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: lastScore,
        name: userName.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/index.html")
};
