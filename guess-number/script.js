'use strict';

function randomANumber() {
  return Math.trunc(Math.random() * 20 + 1);
}
let randomNumber = randomANumber();
let score = 20; // state variable
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  if (!guessValue) {
    displayMessage('Invalid number');
  } else if (guessValue === randomNumber) {
    displayMessage('Correct number');
    document.querySelector('.number').textContent = randomNumber;
    randomNumber = 0;
    document.querySelector('body').style.backgroundColor = '#60b347'; // change background color when user won
    document.querySelector('.number').style.width = '30rem'; // always a string / double number when user won
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessValue !== randomNumber) {
    if (score > 1) {
      displayMessage(guessValue > randomNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game over');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = randomANumber();
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Starting guessing');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

document.querySelector('.menu').addEventListener('click', function () {
  history.back();
});
