function getComputerChoice () {
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



function playRound (player, computer) {
    console.log(computer);
    if (player.toLowerCase() === computer) {
        return `You chose ${player.toLowerCase()}. The computer chose ${computer}. It's a tie!`;
    }

    else if (player.toLowerCase() === "rock" && computer == "paper") {
        return `You chose ${player.toLowerCase()}. The computer chose ${computer}. You lose!`;
    }

    else if (player.toLowerCase() === "rock" && computer == "scissors") {
        return `You chose ${player.toLowerCase()}. The computer chose ${computer}. You win!`;
    }

    else if (player.toLowerCase() === "paper" && computer == "scissors") {
        return `You chose ${player.toLowerCase()}. The computer chose ${computer}. You lose!`;
    }

    else if (player.toLowerCase() === "paper" && computer == "rock") {
        return `You chose ${player.toLowerCase()}. The computer chose ${computer}. You win!`;
    }

    else if (player.toLowerCase() === "scissors" && computer == "rock") {
        return `You chose ${player.toLowerCase()}. The computer chose ${computer}. You lose!`;
    }

    else if (player.toLowerCase() === "scissors" && computer == "paper") {
        return `You chose ${player.toLowerCase()}. The computer chose ${computer}. You win!`;
    }

    else {
        return "something went wrong    ";
    }

}

const playerSelection = "Rock";

console.log(playRound(playerSelection, getComputerChoice()));


