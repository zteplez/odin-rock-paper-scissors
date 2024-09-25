let humanScore, computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
            break;
        default:
            console.log("test");
            break;
    }
}
function getHumanChoice(){
    let userInput = prompt("0-Rock, 1-Paper, 2-Scissors");
    return userInput;
}



