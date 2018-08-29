var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// variables to track number of wins, losses, and remaining guesses
var win = 0;
var loss = 0;
var guess = 10;

// variables to hold references to the places in the html where text will be printed
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var userGuessesText = document.getElementById("userGuesses-text");

// user selects key
document.onkeyup = function(event) {

var randomLetter;

    ///if (guess === 10) {
        randomLetter = letter[Math.floor(Math.random() * letter.length)];
    console.log(randomLetter);
    ///}

    // selected key recorded
    var userGuess = event.key;

    // outcomes
    if (userGuess.toLowerCase() === randomLetter) {
    win++;

    } else {
        guess--;
    }
    
    directionsText.textContent = "";
    userGuessesText.append(userGuess);

    if (guess === 0) {
        directionsText.textContent = "Guess what letter I'm thinking of..."
        loss++;
        guess = 10;
        userGuessesText.textContent = "";
    } 
                

    //
    winsText.textContent = "Wins: " + win;
    lossesText.textContent = "Losses: " + loss;
    guessesLeft.textContent = "Guesses left: " + guess;


}