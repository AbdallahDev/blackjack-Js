var hasBlackJack = false;
var isAlive = true;
var stillPlaying = false;
var msg = "";
var cards = [];
var sum = 0;

const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
cardsEl.textContent = "Cards: ";

function startGame() {
  if (!stillPlaying) {
    stillPlaying = true;
    resetPlayerVars();
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    for (let i = 0; i < 2; i++) {
      drawCard();
    }
  }
}

function renderGame() {
  var sum = cardsSum();

  if (sum < 21) msg = "Do you want to draw a new card?";
  else if (sum === 21) {
    msg = "You've got a blackjack!";
    hasBlackJack = true;
    resetPlayerVars();
    resetGameVars();
  } else {
    msg = "You're out of the game!";
    isAlive = false;
    resetPlayerVars();
    resetGameVars();
  }
  messageEl.textContent = msg;
}

function cardsSum() {
  sum = cards.reduce((accumulator, current) => accumulator + current, 0);
  sumEl.textContent = "Sum: " + sum;
  return sum;
}

function drawCard() {
  if (stillPlaying) {
    const newCard = newCardF();
    cards.push(newCard);

    cardsEl.append(newCard + " ");
    renderGame();
  }
}

function newCardF() {
  const min = 2;
  const max = 13;
  const range = max - min + 1;
  const randomNum = Math.random();
  const randomCard = Math.floor(randomNum * range) + min;
  return randomCard;
}

function resetPlayerVars() {
  cards = [];
  sum = 0;
}

function resetGameVars() {
  stillPlaying = false;
}
