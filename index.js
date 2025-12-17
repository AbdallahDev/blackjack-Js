const min = 2;
const max = 11;
const range = max - min + 1;
var hasBlackJack = false;
var isAlive = true;
var msg = "";
const randomNum1 = Math.random();
const randomNum2 = Math.random();
const firstCard = Math.floor(randomNum1 * range) + min;
const secondCard = Math.floor(randomNum2 * range) + min;
const cards = [firstCard, secondCard];
var sum = 0;

const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");

function cardsSum() {
  sum = cards.reduce((accumulator, current) => accumulator + current, 0);
  sumEl.textContent = "Sum: " + sum;
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsSum();
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;

  if (sum < 21) msg = "Do you want to draw a new card?";
  else if (sum === 21) {
    msg = "You've got a blackjack!";
    hasBlackJack = true;
  } else {
    msg = "You're out of the game!";
    isAlive = false;
  }
  console.log(sum, msg);
  messageEl.textContent = msg;
}

function drawCard() {
  const randomNum = Math.random();
  const newCard = Math.floor(randomNum * range) + min;
  console.log(randomNum, Math.floor(randomNum * range), newCard);

  sum += newCard;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent =
    "Cards: " + firstCard + " " + secondCard + " " + newCard;

  renderGame();
}
