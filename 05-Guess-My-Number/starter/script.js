'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);

  if (!guessValue) {
    document.querySelector('.message').textContent = 'NO NUMBER!!!!';
  } else if (guessValue === secretNumber) {
    document.querySelector('.message').textContent = "THAT's CORRECT!";
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessValue > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game!!!';
    }
  } else if (guessValue < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game!!!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
