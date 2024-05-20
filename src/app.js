/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomNumber() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let num = Math.floor(Math.random() * numbers.length);

  return numbers[num];
}

function randomSuit() {
  let suits = ["spade", "club", "heart", "diamond"];
  let suit = Math.floor(Math.random() * suits.length);

  return suits[suit];
}

function getSuitChar(suit) {
  switch (suit) {
    case "spade":
      return "♠";

    case "club":
      return "♣";

    case "heart":
      return "♥";

    case "diamond":
      return "♦";

    default:
      return "-";
  }
}

window.onload = function() {
  //write your code here
  let number = randomNumber();
  let suit = randomSuit();
  let suitChar = getSuitChar(suit);

  document.querySelector(".card").classList.add(suit);
  document.querySelector(".top").innerHTML = suitChar;
  document.querySelector(".bottom").innerHTML = suitChar;
  document.querySelector(".body").innerHTML = number;
};
