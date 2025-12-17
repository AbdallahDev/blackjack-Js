var gameStarted = false;
var hasBlackJack = false;
var isAlive = true;
var msg = "";
const cards = [];
var sum = 0;

const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
cardsEl.textContent = "Cards: ";

function startGame() {
  if (!gameStarted) {
    for (let i = 0; i < 2; i++) {
      drawCard();
    }
    renderGame();
    gameStarted = true;
  }
}

function renderGame() {
  cardsSum();

  if (sum < 21) msg = "Do you want to draw a new card?";
  else if (sum === 21) {
    msg = "You've got a blackjack!";
    hasBlackJack = true;
  } else {
    msg = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = msg;
}

function cardsSum() {
  sum = cards.reduce((accumulator, current) => accumulator + current, 0);
  sumEl.textContent = "Sum: " + sum;
}

function drawCard() {
  const min = 2;
  const max = 11;
  const range = max - min + 1;
  const randomNum = Math.random();
  const newCard = Math.floor(randomNum * range) + min;
  cards.push(newCard);

  cardsEl.append(newCard + " ");
  renderGame();
}
