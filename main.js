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
        console.log(`You chose ${player.toLowerCase()}. The computer chose ${computer}. It's a tie!`);
        return "tie";
    }

    else if (player.toLowerCase() === "rock" && computer == "paper") {
        console.log(`You chose ${player.toLowerCase()}. The computer chose ${computer}. You lose!`);
        return "lose";
    }

    else if (player.toLowerCase() === "rock" && computer == "scissors") {
        console.log(`You chose ${player.toLowerCase()}. The computer chose ${computer}. You win!`);
        return "win";
    }

    else if (player.toLowerCase() === "paper" && computer == "scissors") {
        console.log(`You chose ${player.toLowerCase()}. The computer chose ${computer}. You lose!`);
        return "lose";
    }

    else if (player.toLowerCase() === "paper" && computer == "rock") {
        console.log(`You chose ${player.toLowerCase()}. The computer chose ${computer}. You win!`);
        return "win";
    }

    else if (player.toLowerCase() === "scissors" && computer == "rock") {
        console.log(`You chose ${player.toLowerCase()}. The computer chose ${computer}. You lose!`);
        return "lose";
    }

    else if (player.toLowerCase() === "scissors" && computer == "paper") {
        console.log(`You chose ${player.toLowerCase()}. The computer chose ${computer}. You win!`);
        return "win";
    }

    else {
        console.log("something went wrong    ");
    }

}

function game() {
    let win = 0;
    let lose = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let result =playRound(playerSelection, getComputerChoice());
        if (result === "win") {
            win++;
        } 
        else if (result === "lose") {
            lose++;
        } 
        else {
            tie++;
        }
    }

    return `You won ${win} times, lost ${lose} times and tied ${tie} times`;
    
}

const playerSelection = "Rock";


console.log(game());


