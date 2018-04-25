/**
Math.random
Generate an array of possible answers
Console.log(Math.floor(Math.random() * people.length))
 */

var choices = ['rock', 'paper', 'scissors'];
var compChoice = ''

function makeCompChoice() {
    var choiceIndex = Math.floor(Math.random() * choices.length)
    compChoice = choices[choiceIndex]
}

function play(userChoice) {
    makeCompChoice()
    console.log(compChoice, userChoice)
    if (userChoice == compChoice) {
        drawResults("tie")
    }
    else if (compChoice == 'rock') {
        if (userChoice == 'paper') {
            drawResults('winner')
        }
        else {
            drawResults('loss')
        }
    }
    else if (compChoice == 'paper') {
        if (userChoice == 'scissors') {
            drawResults('winner')
        }
        else {
            drawResults('loss')
        }
    }
    else {
        if (userChoice == 'paper') {
            drawResults('loss')
        }
        else {
            drawResults('winner')
        }
    }
}


//assign the text for compChoice
//assign text for Winner
/**var count = 0;
for (var i = 0; i < ray.choices; i++){
    if (array[i]==win)
    count++;
} */

function drawResults(win) {
    document.getElementById('computer').innerText = compChoice
    document.getElementById('winner').innerText = win
}


//computerSelection: some function to pick rock, paper or scissors





//compare selections:
    //a. if tie
        //handle tie 
    //b. else if userChoice 'rock
         //1. if compChoice 'paper'
             //comp win
         //2. else 
            //user won
    //c. else if user choice "scissors"
        //1. compChoice 'rock'
            //comp win 
        //2. else user won
    //d. else user choice 'paper'
        //1. if compChoice 'scissors'
            //comp win
        //2. else user won
