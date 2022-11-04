let computerChoice;
let win = 0;
let lose = 0;
let tie = 0;

function getComputerChoice () {
    let outcome = Math.floor(Math.random() *3);
    if (outcome === 0) {
        computerChoice = "rock";
        console.log("computer choice is rock")
    }
    else if (outcome === 1) {
        computerChoice = "paper";
        console.log("computer choice is paper");
    }
    else {
        computerChoice = "scissors";
        console.log("computer choice is scissors");
    }
}

getComputerChoice(); //sets up computer for it's first choice



function playRound (player, computer) {
    console.log("Computer chose " + computer);
    console.log("You chose " + player);
    if (player === computer) {
        console.log(`You chose ${player}. The computer chose ${computer}. It's a tie!`);
        getComputerChoice();
        tie += 1;
    }

    else if (player === "rock" && computer == "paper") {
        console.log(`You chose ${player}. The computer chose ${computer}. You lose!`);
        getComputerChoice();
        lose += 1;
    }

    else if (player === "rock" && computer == "scissors") {
        console.log(`You chose ${player}. The computer chose ${computer}. You win!`);
        getComputerChoice();
        win += 1;
    }

    else if (player === "paper" && computer == "scissors") {
        console.log(`You chose ${player}. The computer chose ${computer}. You lose!`);
        getComputerChoice();
        lose += 1;
    }

    else if (player === "paper" && computer == "rock") {
        console.log(`You chose ${player}. The computer chose ${computer}. You win!`);
        getComputerChoice();
        win += 1;
    }

    else if (player === "scissors" && computer == "rock") {
        console.log(`You chose ${player}. The computer chose ${computer}. You lose!`);
        getComputerChoice();
        lose += 1;
    }

    else if (player === "scissors" && computer == "paper") {
        console.log(`You chose ${player}. The computer chose ${computer}. You win!`);
        getComputerChoice();
        win += 1;
    }

    else {
        console.log(`${player} is not a choice. You lose :(`);
        getComputerChoice();
    }

    console.log(`win: ${win}    lose: ${lose}   tie: ${tie}`);

}

// function game() {
//     let win = 0;
//     let lose = 0;
//     let tie = 0;
//     // for (let i = 0; i < 5; i++) {
//         let result =playRound(playerSelection, computerChoice);
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

//which selection the player chooses after each click

// function chooseRock() {
    
//     console.log("I chose rock");
//     return "rock";
// }

// function choosePaper() {
    
//     console.log("I chose paper");
//     return "paper";
// }

// function chooseScissors() {
    
//     console.log("I chose scissors");
//     return "scissors";
// }


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    playRound("rock", computerChoice);
})
paperBtn.addEventListener('click', () => {
    playRound("rock", computerChoice);
})
scissorsBtn.addEventListener('click', () => {
    playRound("rock", computerChoice);
})

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

// const return prompt("Rock, Paper, or Scissors?");


// console.log(game());


