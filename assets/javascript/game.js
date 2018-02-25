// Array and RNG to set correct letter
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var wins = 0;
var losses = 0;
var guessNum = 9;
var guessed = [];


// updates guess remainder
var updateGuessNum = function(){
    document.getElementById("guesses").innerHTML = guessNum;
}
// displays letters that have been guessed
var addLetter = function(){
    guessed.toString();
    document.getElementById("userchoice").innerHTML = guessed;
}
// selects a new rng letter
var newCompGuess = function(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
// starts the next round
var nextRound = function(){
    guessNum = 9;
    guessed = [];
    updateGuessNum();
    addLetter();
    newCompGuess();
}

// is there a better way to do this?
window.onload = updateGuessNum();

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    // condition that only runs program if you click a thru z, otherwise alerts user to choose a letter
    if (computerChoices.indexOf(userGuess) > -1) {
        guessNum --;
        updateGuessNum();
        guessed.push(userGuess);
        addLetter();
        console.log("The correct answer this round is: " + computerGuess);    

        if (guessNum > 0){
            if (userGuess === computerGuess){
            wins ++;
            document.getElementById("win").innerHTML = wins;
            nextRound();
            }
        }
        else {    
        losses++
        document.getElementById("loss").innerHTML = losses;
        nextRound();
        }
    }
    else {
        alert("You must select a letter from the alphabet!")
    }
    
}
    


