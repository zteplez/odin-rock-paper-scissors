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
console.log(getComputerChoice());
