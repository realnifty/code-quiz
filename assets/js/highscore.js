const highScoresList = document.querySelector("#scores")
const highScores = JSON.parse(localStorage.getItem("lastScore")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="score">${score.name} - ${score.score}</li>`;
  })
  .join("");