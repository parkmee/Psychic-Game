var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// variables to track number of wins, losses, and remaining guesses
var wins = 0;
var losses = 0;
var guesses = 10;

// variables to hold references to the places in the html where text will be printed
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var userGuessesText = document.getElementById("userGuesses-text");

// run when user presses key
document.onkeyup = function(event) {

    // determines which key was pressed
    var userGuess = event.key;


}
