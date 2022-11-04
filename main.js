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
        console.log(`${player} is not a choice. You lose :(`);
        return null;
    }

}

// function game() {
//     let win = 0;
//     let lose = 0;
//     let tie = 0;
//     // for (let i = 0; i < 5; i++) {
//         let result =playRound(playerSelection, getComputerChoice());
//         if (result === "win") {
//             win++;
//         } 
//         else if (result === "lose") {
//             lose++;
//         } 
//         else {
//             tie++;
//         }
    // }


    //Event listener for each selection

    let playerSelection; //which selection the player chooses after each click

    function chooseRock() {
        playerSelection = "rock";
        console.log("I chose rock");
    }

    function choosePaper() {
        playerSelection = "paper";
        console.log("I chose paper");
    }

    function chooseScissors() {
        playerSelection = "scissors";
        console.log("I chose scissors");
    }


    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    
    rockBtn.addEventListener('click', chooseRock);
    paperBtn.addEventListener('click', choosePaper);
    scissorsBtn.addEventListener('click', chooseScissors);

    // console.log(`You won ${win} times, lost ${lose} times and tied ${tie} times`);
    // if (win > lose) {
    //     return "You win!!!!!";
    // }

    // else if (lose > win) {
    //     return "You lost :(";
    // }

    // else if (win === lose) {
    //     return "you tied. Everyone wins!!!";
    // }
    
// }

// const playerSelection = prompt("Rock, Paper, or Scissors?");


// console.log(game());


