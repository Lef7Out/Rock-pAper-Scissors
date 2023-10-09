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