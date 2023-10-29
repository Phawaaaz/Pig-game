'use strict';

// Collecting the Element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('player--0');
const player1El = document.querySelector('player--1');
const playGame = document.querySelector('.btn--roll');
const holdGame = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
// initialing the element
let currentScore, activePlayer, scores;
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  //Declaring variable
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
};

init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
playGame.addEventListener('click', function () {
  //Create the value for dice
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  // Make the dice picture show and count the value
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

holdGame.addEventListener('click', function () {
  console.log('hello');

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    diceEl.classList.add('hidden');

    document.querySelector(`.player--${activePlayer}`).classList.add('winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // Switch to the next player
    switchPlayer();
  }
});

newGame.addEventListener('click', init);
