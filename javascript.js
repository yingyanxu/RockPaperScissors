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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("You guys tied it up!");
        } else if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "rock")) {
            console.log(`You win -- ${humanChoice} beats ${computerChoice}!`);
            humanScore ++;
        } else {
            console.log(`You lose -- ${humanChoice} loses to ${computerChoice}.`);
            computerScore ++;
        }
    } 
    
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore){
        console.log("Hooray! Overall you win!");
    } else if (humanScore < computerScore){
        console.log("Sorry! Overall you lose. You can win next time.");
    } else {
        console.log("Wow! Overall you guys tie up.")
    }
}


playGame()

