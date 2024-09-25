let humanScore = 0, computerScore = 0;

function playRound() {
    let hChoice = getHumanChoice().toLowerCase();
    let cChoice = getComputerChoice();

    console.log("They are choices " + hChoice + "  " + cChoice)

    if (cChoice == hChoice) { console.log("draw!"); return }

    if (cChoice == "rock") {
        if (hChoice == "paper") {
            console.log("you won!");
            humanScore++;
        }
        else {
            console.log("you lose!");
            computerScore++;
        }
    }
    else if (cChoice == "paper") {
        if (hChoice == "rock") {
            console.log("you lose!");
            computerScore++;
        }
        else {
            console.log("you won!")
            humanScore++;
        }
    }
    else if (cChoice == "scissors") {
        if (hChoice == "paper") {
            console.log("you lose!");
            computerScore++;
        }
        else {
            console.log("you won!");
            humanScore++;
        }
    }
    console.log("Human -> " + humanScore + " Computer -> " + computerScore);
}
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
        case 2:
            return "scissors";
            break;
        default:
            console.log("test");
            break;
    }
}
function getHumanChoice() {
    let userInput = prompt("0-Rock, 1-Paper, 2-Scissors");
    return userInput;
}
function playGame(){
    humanScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++){
        playRound();
    }
    if(humanScore > computerScore) {console.log("Winner -> Human");}
    else if(humanScore < computerScore) {console.log("Winner -> Computer");}
    else console.log("Draw!");
}



playGame();

