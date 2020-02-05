document.getElementById("playButton").appendChild(createStartButton());
let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    let choice;
    if (choiceNum == 0) {
        choice = "rock"
    }
    if (choiceNum == 1) {
        choice = "paper";
    }
    if (choiceNum == 2) {
        choice = "scissors";
    }
    document.getElementById("computerChoice").textContent = "They chose " + choice + ".";
    return choice;
}

function createButton(text, name) {
    let button = document.createElement("button");
    button.id = name;
    button.textContent = text;
    addClick(button)
    return button;
}

function addClick(button) {
    button.addEventListener("click", (e) => {
        document.getElementById("playerChoice").textContent = "You chose " + button.id + ".";
        document.getElementById("computerChoice").textContent = "";
        document.getElementById("result").textContent = "";
        setTimeout(function() {playRound(button.id)}, 1000);
    })
}

function createStartButton() {
    let button = document.createElement("button");
    button.id = "start";
    button.textContent = "Start Game";
    button.addEventListener("click", (e) => {
        document.getElementById("playButton").removeChild(document.getElementById("start"));
        document.getElementById("buttons").appendChild(createButton("Rock", "rock"));
        document.getElementById("buttons").appendChild(createButton("Paper", "paper"));
        document.getElementById("buttons").appendChild(createButton("Scissors", "scissors"));       
    })
    return button;
}

function playRound(playerSelection) {
    let computerSelection = computerChoice();
    let result;
    if(playerSelection.toLowerCase() == "rock") {
        if(computerSelection == "rock") {
            result = "draw";
        }
        else if(computerSelection == "paper") {
            result = "lose";
        }
        else {
            result = "win";
        }
    }
    if(playerSelection.toLowerCase() == "paper") {
        if(computerSelection == "rock") {
            result = "win";
        }
        else if(computerSelection == "paper") {
            result = "draw";
        }
        else {
            result = "lose";
        }
    }
    if(playerSelection.toLowerCase() == "scissors") {
        if(computerSelection == "rock") {
            result = "lose";
        }
        else if(computerSelection == "paper") {
            result = "win";
        }
        else {
            result = "draw";
        }
    }
    if(result === "win") {
        setTimeout(function() {
            document.getElementById("result").textContent = "You win!";
        }, 1000)
    } else if(result === "lose") {
        setTimeout(function() {
            document.getElementById("result").textContent = "You lose!";
        }, 1000)
    } else (
        setTimeout(function() {
            document.getElementById("result").textContent = "It's a draw!";
        }, 1000) 
    )
    setTimeout(game, 1000);
}

function game() {
    let result = document.getElementById("result").textContent;
    if(result === "You win!") {
        console.log("Round Won!");
        playerScore++;
    }
    if(result === "You lose!") {
        console.log("Round Lost!");
        computerScore++;
    }
    if(result === "It's a draw!") {
        console.log("Round Drawn!");
    }

    document.getElementById("yourScore").textContent = playerScore;
    document.getElementById("theirScore").textContent = computerScore;

    if(playerScore >= 5) {
        alert("You Win!");
        restart();
    }
    else if(computerScore >= 5) {
        alert("You Lose!");
        restart();
    }
}

function restart() {
    document.getElementById("playerChoice").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("computerChoice").textContent = "";
    document.getElementById("buttons").removeChild(document.getElementById("rock"));
    document.getElementById("buttons").removeChild(document.getElementById("paper"));
    document.getElementById("buttons").removeChild(document.getElementById("scissors"));
    document.getElementById("playButton").appendChild(createStartButton());
    playerScore = 0;
    computerScore = 0;
    document.getElementById("yourScore").textContent = playerScore;
    document.getElementById("theirScore").textContent = computerScore;
}