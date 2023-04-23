// rock paper scissors game against a computer // computer will need randomized
const rockPaperScissorsGame = ["rock", "paper", "scissors"];
let playerSelection, computerSelection, playing;
// const computerSelection = getComputerChoice();
const playerComputer = document.querySelector(".playerComputer");
const playerHuman = document.querySelector(".playerHuman");
// const currentHumanScore = document.querySelector("#current1");
// const currentComputerScore = document.querySelector("#ComputerCurrentScore");
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
// const init = function () {
//   score = [0, 0];
//   currentScore = 0;
//   playing = true;

//   scoreHuman.textContent = 0;
//   scoreComputer.textContent = 0;
//   currentHumanScore.textContent = 0;
//   currentComputerScore.textContent = 0;
// };
// init();

function getComputerChoice() {
  const random = Math.floor(Math.random() * rockPaperScissorsGame.length);
  return rockPaperScissorsGame[random];
}

function startGame() {
  pointsComputer = 0;
  pointsHuman = 0;
  result.textContent = "";
  scoreHuman.textContent = 0;
  scoreComputer.textContent = 0;
  rock.removeAttribute("disabled");
  paper.removeAttribute("disabled");
  scissors.removeAttribute("disabled");
}

startGame();

function endGame() {
  if (pointsComputer === 5) {
    result.textContent = "Game over, you lose";
    rock.setAttribute("disabled", true);
    paper.setAttribute("disabled", true);
    scissors.setAttribute("disabled", true);
  } else if (pointsHuman === 5) {
    result.textContent = "It's a miracle, you win!";
    rock.setAttribute("disabled", true);
    paper.setAttribute("disabled", true);
    scissors.setAttribute("disabled", true);
  }
}

rock.addEventListener("click", function (e) {
  computerSelection = getComputerChoice();
  playerSelection = "rock";
  playGame(computerSelection, playerSelection);
  //   if (pointsComputer === 5 || pointsHuman === 5) {
  endGame();

  //   playerSelection);
  //   getComputerChoice());
});

paper.addEventListener("click", function (e) {
  computerSelection = getComputerChoice();
  playerSelection = "paper";
  playGame(computerSelection, playerSelection);
  //   if (pointsComputer === 5 || pointsHuman === 5) {
  endGame();
});

scissors.addEventListener("click", function (e) {
  computerSelection = getComputerChoice();
  playerSelection = "scissors";
  playGame(computerSelection, playerSelection);
  //   if (pointsComputer === 5 || pointsHuman === 5) {
  endGame();
});

function playGame(computerSelection, playerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = "draw";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result.textContent = "You lose! Paper beats rock";
    pointsComputer = pointsComputer + 1;
    scoreComputer.textContent = pointsComputer;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result.textContent = "You win! Paper beats rock";
    pointsHuman = pointsHuman + 1;
    scoreHuman.textContent = pointsHuman;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result.textContent = "You lose! Rockbeats scissors";
    pointsComputer = pointsComputer + 1;
    scoreComputer.textContent = pointsComputer;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result.textContent = "You lose! Scissors beats paper";
    pointsComputer = pointsComputer + 1;
    scoreComputer.textContent = pointsComputer;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result.textContent = "You win! Scissors beats paper";
    pointsHuman = pointsHuman + 1;
    scoreHuman.textContent = pointsHuman;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result.textContent = "You win! Rock beats scissors";
    pointsHuman = pointsHuman + 1;
    scoreHuman.textContent = pointsHuman;
  }
}

playAgain.addEventListener("click", startGame);
// playGame(computerSelection, playerSelection);

// function game() {}
// playRound((computerSelection, playerSelection));
// console.log(playRound(computerSelection, playerSelection));
