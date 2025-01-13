// TEST
console.log('Welcome in \'Rock, Paper, Scissors\' game. \nIn this game, you fight against computer. \nGame lasts 5 rounds. Good luck!');
// TEST END

let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;

function getComputerChoice() {
    const randomNumber = Math.floor( Math.random() * 3 + 1 );

    if (randomNumber === 1) {
        return 'rock';
    } else if ( randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


const getHumanChoice = function() {
    const humanChoice = prompt('Let\'s play \'rock, paper, scissors\'! \nChoose your sign:').toLowerCase();

    if ( humanChoice === null || humanChoice === '') {
        alert('You didn\'t pass a value. Try again!');
    } else if ( humanChoice === 'rock' ) {
        alert(`You choose ${humanChoice}`);
    } else if ( humanChoice === 'paper') {
        alert(`You choose ${humanChoice}`);
    } else if ( humanChoice === 'scissors') {
        alert(`You choose ${humanChoice}`);
    } else {
        alert('You didn\'t choose a right sign. Try again!');
    }

    return humanChoice;
}

// getHumanChoice()

const playRound = (humanChoice, computerChoice) => {

    console.log(`Round ${roundCounter}`);
    console.log(`User chooses: ${humanChoice}`);
    console.log(`Computer chooses: ${computerChoice}`);

    if ( humanChoice === null || humanChoice === '') {
        console.log('Invalid input');
        return;
    }

    if ( humanChoice === computerChoice) {
        console.log('Draw! Player and computer choose the same sign.');
        console.log(`Scores table: \nUser - ${humanScore} \nComputer - ${computerScore}`);
    } else if ( humanChoice === 'rock' && computerChoice == 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) { 
        console.log(`User won! User chose ${humanChoice} and computer chose ${computerChoice}.`);
        humanScore++;
        console.log(`Scores table: \nUser - ${humanScore} \nComputer - ${computerScore}`);
    } else {
        console.log(`Computer won! User chose ${humanChoice} and computer chose ${computerChoice}`);
        computerScore++;
        console.log(`Scores table: \nUser - ${humanScore} \nComputer - ${computerScore}`);
    }

    roundCounter++;
}

// playRound(getHumanChoice(), getComputerChoice());

function playGame() {

        playRound(getHumanChoice(), getComputerChoice() );
        playRound(getHumanChoice(), getComputerChoice() );
        playRound(getHumanChoice(), getComputerChoice() );
        playRound(getHumanChoice(), getComputerChoice() );
        playRound(getHumanChoice(), getComputerChoice() );

        if ( humanScore === computerScore ) {
            console.log(`Draw!`)
            console.log(`Scores table: \nUser - ${humanScore} \nComputer - ${computerScore}`);
        } else if (humanScore > computerScore) {
            console.log(`User won the game!`);
            console.log(`Scores table: \nUser - ${humanScore} \nComputer - ${computerScore}`);
        } else {
            console.log(`Comuter won the game!`);
            console.log(`Scores table: \nUser - ${humanScore} \nComputer - ${computerScore}`);
        }
}


playGame();

