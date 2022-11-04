let computerChoice;
let win = 0;
let lose = 0;
let tie = 0;

const wlsContainer = document.querySelector('#wls');
const wlsContent = document.createElement('div');


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

    wlsContent.textContent = (`win: ${win}    lose: ${lose}   tie: ${tie}`);
    wlsContainer.appendChild(wlsContent);

    if (win >= 5 || lose >= 5) {

        const finalScore = document.createElement('div');

        
        finalScore.textContent = (`The final score is ${win} to ${lose}`);
        wlsContainer.appendChild(finalScore);

        if (win > lose) {
            const result = document.createElement('div');

            result.textContent = ('You win!')
            wlsContainer.appendChild(result);

            win = 0;
            lose = 0;
            tie = 0;
        }

        else if (lose > win) {
            const result = document.createElement('div');

            result.textContent = ('You lose!')

            wlsContainer.appendChild(result);

            win = 0;
            lose = 0;
            tie = 0;
        }
    }

}



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



