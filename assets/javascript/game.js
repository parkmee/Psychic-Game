var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// variables to track number of wins, losses, and remaining guesses
var win = 0;
var loss = 0;
var guess = 9;

// variables to hold references to the places in the html where text will be printed
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var userGuessesText = document.getElementById("userGuesses-text");

// user selects key
document.onkeyup = function(event) {

    var randomLetter = letter[Math.floor(Math.random() * letter.length)];
    console.log(randomLetter);

    // enter code here to have the random letter only selected once per game

    // selected key recorded
    var userGuess = event.key;
    
    // check to see if guess is a letter
      
    // user guess equals random letter, add one to win score
    if (userGuess.toLowerCase() === randomLetter) {
        // increase win count
        win++;
        // reset guesses count
        guesses = 9;
        // clear list of guesses
        userGuessesText.textContent = "";

    // decrement guess count for each mismatch
    } else {
        guess--;
    }
    
    // log user guesses
    if (guess === 8) {
    userGuessesText.textContent = "Your guesses: " + userGuess;
    } else {
        userGuessesText.append(", " + userGuess);
    }

    // reset if guess count equals 0
    if (guess === 0) {

        // increase loss count
        loss++;

        // reset guess count to 9
        guess = 9;

        // clear list of guesses
        userGuessesText.textContent = "";
    } 
    

    // print number of wins, losses, and guesses
    directionsText.textContent = "Guess what letter I'm thinking of...";
    winsText.textContent = "Wins: " + win;
    lossesText.textContent = "Losses: " + loss;
    guessesLeft.textContent = "Guesses left: " + guess;

}