function playGame()
{
    let round = 0;
    while(round <= 5){
    function getComputerChoice(){
    let random = Math.floor(Math.random()*4);
    if (random === 1){
        return "rock";
    }else if(random === 2){
        return "paper";
    }else 
    return "scissors";
}
//const answer = getComputerChoice();
//roxconsole.log(answer);

//human function
function getHumanChoice(){
    const input = prompt("Rock, paper, scissors").toLowerCase() ;
    return input;
}

//set up for playRound function
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    
    
    if(humanChoice === "rock" && computerChoice === "scissors"||humanChoice === "paper" && computerChoice === "rock" ||humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Human wins");
        humanScore =+ 1;
    }else if(computerChoice === "paper" && humanChoice === "rock"||computerChoice === "scissors" && humanChoice === "paper"||computerChoice === "rock" && humanChoice === "scissors"){
        console.log("Computer wins");
        computerScore =+ 1;
    }else if(computerChoice === "scissors" && humanChoice === "scissors"||computerChoice === "paper" && humanChoice === "paper"||computerChoice === "rock" && humanChoice === "rock"){
        console.log("Draw");
        //computerScore =+ 1;
    }
}
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
playRound(humanSelection,computerSelection);
let guess=playRound();
round ++;
}
computerScore=+1;
humanScore=+1;
if (computerScore > humanScore){
    return "Computer Wins!";
    console.log("computer");
}else if(humanScore < computerScore){
    return "Humans wins!";
    console.log("Human wins!!");
}
}
playGame();