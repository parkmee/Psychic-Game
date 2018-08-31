var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables to track number of wins, losses, and remaining guesses
var win = 0;
var loss = 0;
var guess = 9;
var randomLetter;

// variables to hold references to the places in the html where text will be printed
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var userGuessesText = document.getElementById("userGuesses-text");
var gifResponse = document.getElementById("gif-response");

function getLetter() {
    randomLetter = letter[Math.floor(Math.random() * letter.length)];
    console.log(randomLetter);
}

// user selects key
document.onkeyup = function (event) {

    if (guess === 9) {
        getLetter();
    }

    // selected key recorded
    var userGuess = event.key;
    gifResponse.textContent = "";
    console.log(guess);
    console.log("Guess: " + userGuess);

    // check to see if guess is a letter
    if (userGuess.toLowerCase() >= "a" && userGuess.toLowerCase() <= "z") {

        // user guess equals random letter, add one to win score
        if (userGuess.toLowerCase() === randomLetter) {
            // increase win count
            win++;
            // reset guesses count
            guess = 9;
            // clear list of guesses
            userGuessesText.textContent = "";
            gifResponse.innerHTML = '<iframe src="https://giphy.com/embed/l41YmQjOz9qg2Ecow" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/partylegends-party-legends-l41YmQjOz9qg2Ecow">via GIPHY</a></p>';
        }

        // decrement guess count for each mismatch
        else {
            guess--;
            userGuessesText.append(", " + userGuess);
        }

        // log user guesses
        if (guess === 8) {
            userGuessesText.textContent = "Your guesses: " + userGuess;
        }

        // reset if guess count equals 0
        if (guess === 0) {

            // increase loss count
            loss++;
            // reset guess count to 9
            guess = 9;
            // clear list of guesses
            userGuessesText.textContent = "";
            // game over
            gifResponse.innerHTML = '<iframe src="https://giphy.com/embed/SIPIe590rx6iA" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/foxadhd-love-game-over-video-games-SIPIe590rx6iA">via GIPHY</a></p>';
        }

        // print number of wins, losses, and guesses
        directionsText.textContent = "Guess what letter I'm thinking of...";
        winsText.textContent = "Wins: " + win;
        lossesText.textContent = "Losses: " + loss;
        guessesLeft.textContent = "Guesses left: " + guess;

    } else {
        gifResponse.innerHTML = '<span class="alert alert-danger">Enter a <em>letter</em>!</span> <br><iframe src="https://giphy.com/embed/l49JJQf9w3RPCWDyU" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animation-reaction-dancing-l49JJQf9w3RPCWDyU">via GIPHY</a></p>';
    }
    
}
