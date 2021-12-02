'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const changeImage = document.querySelector('.dice');
const dice = document.querySelector('.dice');
// getElementById > querySelector
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

let currentScore, activePlayer, playing, scores;

const init = function () {
  // store scores of 2 players in an array
  scores = [0, 0];
  currentScore = 0;
  // current player
  activePlayer = 0;
  // playing or not
  playing = true;
  // set score default
  score0Element.textContent = 0;
  score1Element.textContent = 0;

  dice.classList.add('hidden');
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggle: if not exist -> add, if exist -> remove
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  if (playing) {
    const randomNumber = Math.trunc(Math.random() * 6 + 1);

    dice.classList.remove('hidden');
    changeImage.src = `dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      // add randomNumber ~ dice to current score
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // switch player and set score to 0
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    // which player press Hold button -> current score will be display as total score
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //check if player reach 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      // remove active player class
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      // switch
      switchPlayer();
    }
  }
});

// just call init, do not using anonymous function
// javascript call the init function, dont using () to call
newGame.addEventListener('click', init);

document.querySelector('.btn--menu').addEventListener('click', function () {
  history.back();
});
