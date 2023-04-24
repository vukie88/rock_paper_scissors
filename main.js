"use strict";

const rockPaperScissorsGame = ["rock", "paper", "scissors"];
let playerSelection, computerSelection, playing;
const playerComputer = document.querySelector(".playerComputer");
const playerHuman = document.querySelector(".playerHuman");
const scoreHuman = document.querySelector("#playerScoreText");
const scoreComputer = document.querySelector("#computerScoreText");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const gameBtns = document.querySelector(".game");
const result = document.querySelector(".result");
const playAgain = document.querySelector(".again");
let pointsComputer = 0;
let pointsHuman = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * rockPaperScissorsGame.length);
  return rockPaperScissorsGame[random];
}

function startGame() {
  pointsComputer = 0;
  pointsHuman = 0;
  result.textContent =
    "Make your choice carefully... first player to reach 5 points wins";
  result.style.color = "rgb(66, 29, 2)";
  result.style.fontSize = "18px";
  scoreHuman.textContent = 0;
  scoreComputer.textContent = 0;
  rock.removeAttribute("disabled");
  paper.removeAttribute("disabled");
  scissors.removeAttribute("disabled");
  document.querySelector(".paper").classList.add("hover");
  document.querySelector(".rock").classList.add("hover");
  document.querySelector(".scissors").classList.add("hover");
}

startGame();

function endGame() {
  if (pointsComputer === 5) {
    result.textContent = "Game over, the computer has you beat!";
    result.style.color = "red";
    result.style.fontSize = "30px";
    rock.setAttribute("disabled", true);
    paper.setAttribute("disabled", true);
    scissors.setAttribute("disabled", true);
    document.querySelector(".paper").classList.remove("hover");
    document.querySelector(".rock").classList.remove("hover");
    document.querySelector(".scissors").classList.remove("hover");
  } else if (pointsHuman === 5) {
    result.textContent = "It's a miracle, you win!";
    result.style.color = "green";
    result.style.fontSize = "30px";
    rock.setAttribute("disabled", true);
    paper.setAttribute("disabled", true);
    scissors.setAttribute("disabled", true);
    document.querySelector(".paper").classList.remove("hover");
    document.querySelector(".rock").classList.remove("hover");
    document.querySelector(".scissors").classList.remove("hover");
  }
}

rock.addEventListener("click", function (e) {
  computerSelection = getComputerChoice();
  playerSelection = "rock";
  playGame(computerSelection, playerSelection);
  endGame();
});

paper.addEventListener("click", function (e) {
  computerSelection = getComputerChoice();
  playerSelection = "paper";
  playGame(computerSelection, playerSelection);
  endGame();
});

scissors.addEventListener("click", function (e) {
  computerSelection = getComputerChoice();
  playerSelection = "scissors";
  playGame(computerSelection, playerSelection);
  endGame();
});

function playGame(computerSelection, playerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = "Draw... choose again";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result.setAttribute("style", "white-space: pre;");
    result.textContent = "Damn, you're opponent has just gained 1 point. \r\n";
    result.textContent +=
      "The computer's paper may be soft, but it covers your rock and provides a safe shelter.";
    pointsComputer = pointsComputer + 1;
    scoreComputer.textContent = pointsComputer;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result.setAttribute("style", "white-space: pre;");
    result.textContent = "Congrats, you've gained 1 point! \r\n";
    result.textContent +=
      "Your soft but sturdy paper reigns supreme over the computer's powerful rock.";
    pointsHuman = pointsHuman + 1;
    scoreHuman.textContent = pointsHuman;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result.setAttribute("style", "white-space: pre;");
    result.textContent =
      "Aw shucks... the computer's doozy of a rock absolutely crushed your scissors. \r\n";
    result.textContent += "Computer's score has increased by 1.";
    pointsComputer = pointsComputer + 1;
    scoreComputer.textContent = pointsComputer;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result.setAttribute("style", "white-space: pre;");
    result.textContent =
      "The computer's scissors really did a number on your paper... \r\n";
    result.textContent += "1 point is awarded to your opponent.";
    pointsComputer = pointsComputer + 1;
    scoreComputer.textContent = pointsComputer;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result.setAttribute("style", "white-space: pre;");
    result.textContent =
      "Oh baby! Your sharp scissors sliced that paper to perfection! \r\n";
    result.textContent += "You now have 1 extra point.";
    pointsHuman = pointsHuman + 1;
    scoreHuman.textContent = pointsHuman;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result.setAttribute("style", "white-space: pre;");
    result.textContent = "Success! You've gained 1 point. \r\n";
    result.textContent +=
      "Those pathetic scissors didn't have a chance against your beastly rock!";
    pointsHuman = pointsHuman + 1;
    scoreHuman.textContent = pointsHuman;
  }
}

playAgain.addEventListener("click", startGame);
