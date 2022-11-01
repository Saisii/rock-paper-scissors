let computerChoice = function getComputerChoice () {
    let outcome = Math.floor(Math.random() *3);
    if (outcome === 0) {
        return "rock";
    }
    else if (outcome === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

console.log(computerChoice());



