const prompt = require("prompt-sync")();
let choices = ["rock", "paper", "scissors"]

function computerSelection(){
 let choice = Math.floor(Math.random() * choices.length);
 console.log("Computer picked", choices[choice])
 return choices[choice];
}

function playerSelection(){
    let userInput = prompt("Rock, Paper or Scissors?"
    ).toLowerCase();

    if(userInput == "rock"){
        console.log("You picked rock");
        return "rock";
    }else if(userInput == "paper"){
        console.log("You picked paper");
        return "paper";
    }else if(userInput == "scissors"){
        console.log("You picked scissors");
        return "scissors";
    }else
    console.log("Invalid Input");
}

function game() {
    let user = playerSelection();
    let comp = computerSelection();

    if(user === comp){
        console.log("It's a tie");
    }
    else if(user === "rock"){
        if(comp === "paper"){
            console.log("You lose!");
            return "lose";
        }else if(comp === "scissors"){
        console.log("You win!");
        return "win";
    }else{
    console.log("Its a tie Try Again!!")
    return "tie"
    }
    }else if(user === "paper"){
        if(comp === "rock"){
            console.log("You win!");
            return "win";
    }else if(comp === "scissors"){
        console.log("You lose!");
        return "lose";
    }else{
        console.log("Its a Tie Try Again!");
        return "tie";
    }
}else if(user === "scissors"){
    if(comp === "rock"){
        console.log("You lose!");
        return "lose";
    }else if(comp === "paper"){
        console.log("You win!");
        return "win";
    }else{
        console.log("Its a tie Try Again!");
        return "tie";
    }

}else{
    console.log("Enter either Rock Paper or Scissors")
}
}

function play() {
    let round = 0;
    let userScore = 0;
    let compScore = 0;

    for(let i = 1; i <= 3; i++) {
        let games = game();
        if(games === "win"){
            userScore++;
            round++;           
            console.log(
                `Round: ${round}, userScore ${userScore}:  ${userScore} compscore`
            );
        }else if(games === "lose"){
            compScore++;
            round++;
            console.log(
                `Round: ${round}, userScore ${userScore}:  ${compScore} compscore`
            );
        }else{
            round++;
            console.log(
                `Round: ${round}, userScore ${userScore}: ${compScore} compscore`
        );
    }
}
if(compScore < userScore) {
    console.log("You Win!");
}else if(compScore > userScore) {
    console.log("You Lose!");
}else {
    console.log("Its a Tie!");
}
}
play()
