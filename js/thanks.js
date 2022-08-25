const rate_again = document.getElementById('rateAgain');

rate_again.addEventListener('click', onRateAgain);

const score = localStorage.getItem('stars_score');

document.getElementById("score").textContent = score;

function onRateAgain(){
    window.location = "index.html";
}