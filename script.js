const nameInput= document.querySelector('#playerNameInput');
const startButton= document.querySelector('#startGameBtn');
startButton.addEventListener("click", function() {
    let playerName = nameInput.value;
    const startScreen = document.querySelector(".start-screen");
    startScreen.style.display = "none";
    const gameBox = document.querySelector(".box");
    gameBox.style.display = "flex";
    const playerNameDisplay = document.getElementById("playerName");
    playerNameDisplay.textContent = playerName;
  });

let choice = ["rock", "paper", "scissors"];
let ComputerChoice;
let UserChoice;
let userScore = 0; 
let computerScore = 0;  
let roundCount = 0;  

const score = document.querySelectorAll('.score');
const playerScore = score[0];  
const computerScoreElement = score[1];  

const result = document.querySelector('.result'); 

function getComputerChoice() {
    ComputerChoice = Math.random();
    ComputerChoice = ComputerChoice * choice.length;
    ComputerChoice = Math.floor(ComputerChoice);
    ComputerChoice = choice[ComputerChoice];
    console.log(`Computer chose: ${ComputerChoice}`);  
    return ComputerChoice;
}

function getUserChoice(e) {
    UserChoice = e.currentTarget.getAttribute('data-choice');  
    console.log(`User chose: ${UserChoice}`);  
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', (e) => {
    getUserChoice(e);
    ComputerChoice = getComputerChoice();
    playRound();
});
const paper = document.querySelector('.paper');
paper.addEventListener('click', (e) => {
    getUserChoice(e);
    ComputerChoice = getComputerChoice();
    playRound();
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', (e) => {
    getUserChoice(e);
    ComputerChoice = getComputerChoice();
    playRound();
});

function playRound() {
    console.log(`User choice: ${UserChoice}, Computer choice: ${ComputerChoice}`);  

    if (UserChoice === ComputerChoice) {
        result.textContent = "DRAW";
    } else if (
        (UserChoice === "rock" && ComputerChoice === "scissors") ||
        (UserChoice === "paper" && ComputerChoice === "rock") ||
        (UserChoice === "scissors" && ComputerChoice === "paper")
    ) {
        result.textContent = "YOU WON";
        userScore++;  
    } else {
        result.textContent = "YOU LOST";
        computerScore++;  
    }

    playerScore.textContent = `SCORE: ${userScore}`;
    computerScoreElement.textContent = `SCORE: ${computerScore}`;
    roundCount++;


    if (userScore===5) {
        result.textContent = "YOU WIN THE GAME!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if (computerScore===5){
        result.textContent = "YOU LOSE THE GAME!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}
