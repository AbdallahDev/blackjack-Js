const min = 2;
const max = 11;
const range = max - min + 1;
// const randomNum1 = Math.random();
// const randomNum2 = Math.random();
var hasBlackJack = false;
var isAlive = true;
var msg = "";

// const firstCard = Math.floor(randomNum1 * range) + min;
// const secondCard = Math.floor(randomNum2 * range) + min;
// var sum = firstCard + secondCard;

const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");

function startGame() {
  const randomNum1 = Math.random();
  const randomNum2 = Math.random();
  const firstCard = Math.floor(randomNum1 * range) + min;
  const secondCard = Math.floor(randomNum2 * range) + min;
  var sum = firstCard + secondCard;

  sumEl.textContent = "Sum: " + sum;

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
