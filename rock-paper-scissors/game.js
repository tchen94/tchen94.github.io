const options = document.querySelectorAll('.options');
let playerScore = 0;
let cpuScore = 0;

options.forEach((option) => {
    option.addEventListener('click', function() {
        const playerChoice = this.textContent;
        const computerOptions = ["Rock", "Paper", "Scissor"];
        const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

        playRound(playerChoice, computerChoice);
        displayResult();
        if (gameWin()) {
            cpuScore = 0;
            playerScore = 0;
            displayResult();
        }
    });
});

function playRound(playerSelection, computerSelection) {
    //Tie Check
    if (playerSelection == computerSelection) {
        document.getElementById('result').textContent = "You Tied!";
        return;
    }
    //Player selects "Rock"
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            document.getElementById('result').textContent = "You Win! Rock beats Scissors";
            playerScore++;
        } else {
            document.getElementById('result').textContent = "You Lose! Rock beats Scissors";
            cpuScore++;
        }
    }
    //Player selects "Paper"
    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            document.getElementById('result').textContent = "You Win! Paper beats Rock";
            playerScore++;
        } else {         
            document.getElementById('result').textContent = "You Lose! Paper beats Rock";
            cpuScore++;
        }
    }
    //Player selects "Scissors"
    if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {     
            document.getElementById('result').textContent = "You Win! Scissors beats Paper";
            playerScore++;
        } else {  
            document.getElementById('result').textContent = "You Lose! Scissors beats Paper";
            cpuScore++;
        }
    }
}

function displayResult() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('cpu-score').textContent = cpuScore;
}

function gameWin() {
    if (cpuScore === 5 || playerScore == 5) {
        const winner = playerScore === 5 ? "Player Wins! Make your selection to start a new game" : 
        "CPU Wins! Make your selection to try again";
        document.getElementById('result').innerHTML = winner;
        return true;
    }
    return false;
}
