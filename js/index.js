const submit_button = document.querySelector('.submit_button');
const rating_one = document.querySelector('.one');
const rating_two = document.querySelector('.two');
const rating_three = document.querySelector('.three');
const rating_four = document.querySelector('.four');
const rating_five = document.querySelector('.five');
// let stars_score = 3 //default

submit_button.addEventListener('click', onSubmit);

rating_one.addEventListener('click', onOne);
rating_two.addEventListener('click', onTwo);
rating_three.addEventListener('click', onThree);
rating_four.addEventListener('click', onFour);
rating_five.addEventListener('click', onFive);

function onOne(){
    stars_score = document.querySelector('.one').textContent;
}
function onTwo(){
    stars_score = document.querySelector('.two').textContent;
}
function onThree(){
    stars_score = document.querySelector('.three').textContent;
}
function onFour(){
    stars_score = document.querySelector('.four').textContent;
}
function onFive(){
    stars_score = document.querySelector('.five').textContent;
}

function onSubmit(event){
    event.preventDefault();

    const score = stars_score;

    window.localStorage.setItem('stars_score', score);

     window.location = "thanks.html";
}