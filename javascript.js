function getComputerChoice(){
    let a  = Math.random() * 3;
    if (a < 1) {
        return "rock";
    } else if (a < 2) {
        return "paper";
    } else {
        return "scissors";
    }
};

function getHumanChoice(){
    return prompt("Choose between rock, paper, and scissors: ");
};

let humanScore = 0;
let computerScore = 0;

const contain = document.querySelector("#container");
const results = document.querySelector(".results");
results.textContent = `you VS. computer = ${humanScore} : ${computerScore}`;

const messages = document.createElement("p");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        messages.textContent = "You guys tied it up!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "rock")) {
        messages.textContent = `Computer plays ${computerChoice}. You win -- ${humanChoice} beats ${computerChoice}!`
        humanScore ++;
    } else {
        messages.textContent = `Computer plays ${computerChoice}. You lose -- ${humanChoice} loses to ${computerChoice}.`;
        computerScore ++;
    }
    results.textContent = `you VS. computer = ${humanScore} : ${computerScore}`;
    contain.appendChild(messages);
} 


const last = document.createElement("p");

while (humanScore < 5 && computerScore < 5){

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);

        });
    })
}

if (humanScore === 5){
    last.textContent = "Game over! You win!";
} else {
    last.textContent = "Game over! Computer wins."
}

contain.appendChild(last);


