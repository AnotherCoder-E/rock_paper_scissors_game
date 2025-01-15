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
const finalMsg = document.createElement('h1');
const restartBtn = document.createElement('button');

header3.innerText = 'Welcome in';
header1.innerText = '\'Rock, Paper, Scissors\' \ngame';
introduction.innerText = 'In this game, you fight against computer. Game lasts 5 rounds. \n Good luck!';
rockBtn.setAttribute('value', 'rock');
rockBtn.innerText = 'Rock';
paperBtn.setAttribute('value', 'paper');
paperBtn.innerText = 'Paper';
scissorsBtn.setAttribute('value', 'scissors');
scissorsBtn.innerText = 'Scissors';
resultsDiv.innerText = 'Press button to start the game';
finalMsg.innerText = `Game Over
Press 'Restart' to play again.`;
restartBtn.innerText = 'Restart';

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
resultsDiv.style.border = 'solid 2px white';
resultsDiv.style.width = '500px';
resultsDiv.style.margin = '50px auto';

introduction.style.fontSize = '20px';

// BUTTON STYLES
buttons.forEach( function(button) {
    button.style.fontSize = '32px';
});

restartBtn.style.fontSize = '32px';


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

function gameOver() {
    buttons.forEach( (button) => {
        button.remove();
    

        body.appendChild(finalMsg);
        body.appendChild(restartBtn);
    });
}

const playRound = (humanChoice, computerChoice) => {

    resultsDiv.innerText = `Round ${roundCounter} 
    User chooses: ${humanChoice} 
    Computer chooses: ${computerChoice}`;


    if ( humanChoice === computerChoice) {
        resultsDiv.innerText += `\nDraw! Player and computer choose the same sign.
        Scores table: \nUser: ${humanScore} \nComputer: ${computerScore}`
    } else if ( humanChoice === 'rock' && computerChoice == 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) { 
        resultsDiv.innerText += `\nUser won! User chose ${humanChoice} and computer chose ${computerChoice}.`;
        humanScore++;
        resultsDiv.innerText += `\nScores table: \nUser: ${humanScore} \nComputer: ${computerScore}`;
    } else {
        resultsDiv.innerText += `\nComputer won! User chose ${humanChoice} and computer chose ${computerChoice}`;
        computerScore++;
        resultsDiv.innerText += `\nScores table: \nUser: ${humanScore} \nComputer: ${computerScore}`;
    }

    if ( humanScore === 5 || computerScore === 5 ) {

        if ( humanScore === computerScore ) {
            resultsDiv.innerText = `Draw!
            Game last ${roundCounter} rounds. 
            Scores table: \nUser: ${humanScore} \nComputer: ${computerScore}`;
        } else if (humanScore > computerScore) {
            resultsDiv.innerText = `User won the game!
            Game last ${roundCounter} rounds. 
            Scores table: \nUser: ${humanScore} \nComputer: ${computerScore}`;
        } else {
            resultsDiv.innerText = `Computer won the game!
            Game last ${roundCounter} rounds. 
            Scores table: \nUser: ${humanScore} \nComputer: ${computerScore}`;
        }
        return gameOver();
    
}

    roundCounter++;
}

function restart() {
    humanScore = 0;
    computerScore = 0;
    roundCounter = 1;

    resultsDiv.innerText = 'Press button to start the game';
    finalMsg.remove();
    restartBtn.remove();

    body.insertBefore( rockBtn, resultsDiv);
    body.insertBefore( paperBtn, resultsDiv);
    body.insertBefore( scissorsBtn, resultsDiv);
    
}

rockBtn.addEventListener('click', () => playRound( rockBtn.value, getComputerChoice() ) );
paperBtn.addEventListener('click',  () => playRound( paperBtn.value, getComputerChoice() ) );
scissorsBtn.addEventListener('click', () => playRound( scissorsBtn.value, getComputerChoice() ) );
restartBtn.addEventListener('click', restart );
