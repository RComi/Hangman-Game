// Title of Game
//    How to start the Game
//    Score set to 0 wins 0 losses
//    Number of chances left
//    Produce a list of letters to choose from
//    Set up random words for selection
//    Set blank spaces placed for the random word selected
//    Click on the letter to select
//    If the correct letter is chosen place in the proper space and eliminate from the letter choices
//    Else place the letters selected not in the word in a separate area
//    If correct letter is chose then do not add a hangman piece
//    Else add a piece to the hangman
//    If word is completed show You Won! and play a sound 
//    Else If all pieces of the hangman then show you lose (play sound
//    Keep score for wins
//    Keep score for losses
//    Reset game to play again!

var wordList = ["Gollum", "Aragorn", "Boromir", "Pippin", "Celeborn", "Frodo", "Legolas", "Gandalf", "Bilbo", "Gimli", "Sam", "Saruman", "Elrond", "Endor", "Romen", "Harad", "Shire", "Greenfields", "Hobbiton", "Rivendell", "Gondolin", "Tirion", "Tharbad", "Edoras", "Dale", "Moria", "sword", "axes", "bows", "spear", "arrows", "knives", "crossbow", "hammer", "club", "staff"];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var secretWord = []; //word replaced with the placeholder (_)
var lettersGuessed = [];
var guesses = 7;
var wins = 0;
var losses = 0;
var word = "";

//When the page finishes loading
window.onload = function () {
    setGame();
}

//page listens for a key that is pressed
document.addEventListener('keydown', function (event) {
    var letter = String.fromCharCode(event.keyCode);
    getLettersGuessed(letter);

    if (doesWordContainLetter(word, letter) == true) {
        correctGuess(word, letter);
    } else {
        wrongGuess(letter);
    }
    
    setTimeout(function () {
        if (guesses == 0) {
            var div = document.getElementById('losses');
            div.innerHTML = losses++;
            alert('YOU LOSE! Resetting Game');
            setGame();
        }

        if (hasWon() == true) {
            var div = document.getElementById('wins');
            div.innerHTML = wins++;
            alert('YOU WIN! Resetting Game!');
            setGame();
        }
    }, 0)


});

//Sets up the game and reset html and counters and gets a new secret word
function setGame() {
    guesses = 7;
    lettersGuessed = [];
    secretWord = [];

    var divGuess = document.getElementById('guesses');
    divGuess.innerHTML = guesses;

    var divWin = document.getElementById('wins');
    divWin.innerHTML = wins;

    var divLoss = document.getElementById('losses');
    divLoss.innerHTML = losses;

    var div = document.getElementById('letters-guessed');
    div.innerHTML = "<i> None </i>";

    word = wordList[Math.floor(Math.random() * wordList.length)];
    word = word.toUpperCase();

    addPlaceholderInSecretWord(word);
}

//checks to see if the letter is in the secret word
//if it is return true if not then return false
function doesWordContainLetter(word, letter) {
    if (isLetterInAlphabet(letter) == true) {
        if (word.indexOf(letter) > -1) {
            return true;
        }
    }
    return false;
}

//Overwrite word with underscore and shows array separated by spaces
function addPlaceholderInSecretWord(word) {
    for (var i = 0; i < word.length; i++) {
        secretWord.push("_");
    }
    var div = document.getElementById('secret-word');
    div.innerHTML = secretWord.join(" ");
}

//if a wrong letter is guessed, deduct the number of guesses by 1
//and update the html to reflect new number of guesses
function wrongGuess(letter) {
    if (isLetterInAlphabet(letter) == true) {
        guesses--;
        var div = document.getElementById('guesses');
        div.innerHTML = guesses;
    }
}

//check if letter is contained in word by checking the position (i)
//in the string of letters in a word
//if the letter is in the work then replace the same index (i)
//with the actual letter instead of the _ (placeholder)
function correctGuess(word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            secretWord[i] = letter;
        }
    }
    var div = document.getElementById('secret-word');
    div.innerHTML = secretWord.join(" ");
}

//checks if letter is in alphabet then adds the valid letter
//to letters guessed array and updates html and separates letters
//by comma space
function getLettersGuessed(letter) {
    if (isLetterInAlphabet(letter) == true) {
        lettersGuessed.push(letter);
        var div = document.getElementById('letters-guessed');
        div.innerHTML = lettersGuessed.join(", ");
    }
}

//check if letter is in the alphabet array and returns true if is
//else returns false if its not in the array
function isLetterInAlphabet(letter) {
    if (alphabet.indexOf(letter) > -1) {
        return true;
    }
    return false;
}

//check if word still has placeholder character
//if it doesnt then return true and player has won
//else returns false they have not won
function hasWon() {
    if (secretWord.indexOf("_") == -1) {
        return true;
    }
    return false;
}





//pull 
