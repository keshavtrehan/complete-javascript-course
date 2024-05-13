'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]; // the scores of two players will be at 0 and 1, and thus we have been defining all constants/functions as 0 and 1 to keep things consistent.
let currentScore = 0; // cannot be defined inside a function because it will reset it everytime click event is triggered
let activePlayer = 0;

const switchPlayerFunction = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player0El.classList.toggle('player--active');
};

//rolling a dice
btnRoll.addEventListener('click', function () {
  //generating a random number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //displaying the dice

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    //  Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch players
    switchPlayerFunction();
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('.player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('.player--active');
  } else {
    switchPlayerFunction();
  }
});
