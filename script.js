// TEST
console.log('Welcome in \'Rock, Paper, Scissors\' game. \nIn this game, you fight against computer. \nGame lasts 5 rounds. Good luck!');
// TEST END

// CREATING DOM WITH JAVASCRIPT
const body = document.querySelector('body');
const header3 = document.createElement('h3');
const header1 = document.createElement('h1');
const introduction = document.createElement('p');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const resultsDiv = document.createElement('div');

header3.innerText = 'Welcome in';
header1.innerText = '\'Rock, Paper, Scissors\' \ngame';
introduction.innerText = 'In this game, you fight against computer. Game lasts 5 rounds. \n Good luck!';
rockBtn.setAttribute('value', 'rock');
rockBtn.innerText = 'Rock';
paperBtn.setAttribute('value', 'paper');
paperBtn.innerText = 'Paper';
scissorsBtn.setAttribute('value', 'scissors');
scissorsBtn.innerText = 'Scissors';
resultsDiv.innerText = 'T   E   S   T';

body.appendChild(header3);
body.appendChild(header1);
body.appendChild(introduction);
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);
body.appendChild(resultsDiv);

const buttons = document.querySelectorAll('button');

// DOM STYLES
body.style.cssText = 'color: white; text-align: center;';
resultsDiv.style.fontSize = '32px';

// BUTTON STYLES
buttons.forEach( function(button) {
    button.style.fontSize = '32px';
});

// PROGRAM LOGIC
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

const playRound = (humanChoice, computerChoice) => {

    console.log(`Round ${roundCounter}`);
    console.log(`User chooses: ${humanChoice}`);
    console.log(`Computer chooses: ${computerChoice}`);

    // if ( humanChoice === null || humanChoice === '') {
    //     console.log('Invalid input');
    //     return;
    // }

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

// rockBtn.addEventListener('click', () => console.log('rock') );


rockBtn.addEventListener('click', () => playRound( rockBtn.value, getComputerChoice() ) );
paperBtn.addEventListener('click',  () => playRound( paperBtn.value, getComputerChoice() ) );
scissorsBtn.addEventListener('click', () => playRound( scissorsBtn.value, getComputerChoice() ) );

// BUTTON EVENT LISTENERS
// buttons.forEach( function(button) {
//     button.addEventListener('click', playRound( button.value, getComputerChoice() ) );
// });

// Original User Input Function
// const getHumanChoice = function() {
//     const humanChoice = prompt('Let\'s play \'rock, paper, scissors\'! \nChoose your sign:').toLowerCase();

//     if ( humanChoice === null || humanChoice === '') {
//         alert('You didn\'t pass a value. Try again!');
//     } else if ( humanChoice === 'rock' ) {
//         alert(`You choose ${humanChoice}`);
//     } else if ( humanChoice === 'paper') {
//         alert(`You choose ${humanChoice}`);
//     } else if ( humanChoice === 'scissors') {
//         alert(`You choose ${humanChoice}`);
//     } else {
//         alert('You didn\'t choose a right sign. Try again!');
//     }

//     return humanChoice;
// }

// getHumanChoice()


// playRound(getHumanChoice(), getComputerChoice());

// function playGame() {

//         // Disabled for now
//         // playRound(getHumanChoice(), getComputerChoice() );
//         // playRound(getHumanChoice(), getComputerChoice() );
//         // playRound(getHumanChoice(), getComputerChoice() );
//         // playRound(getHumanChoice(), getComputerChoice() );
//         // playRound(getHumanChoice(), getComputerChoice() );

//         if ( humanScore === computerScore ) {
//             console.log(`Draw!`)
//             console.log(`Scores table: \nUser - ${humanScore} \nComputer - ${computerScore}`);
//         } else if (humanScore > computerScore) {
//             console.log(`User won the game!`);
//             console.log(`Scores table: \nUser - ${humanScore} \nComputer - ${computerScore}`);
//         } else {
//             console.log(`Comuter won the game!`);
//             console.log(`Scores table: \nUser - ${humanScore} \nComputer - ${computerScore}`);
//         }
// }

// playGame();

