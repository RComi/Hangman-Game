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


var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordList = ["Gollum", "Aragorn", "Boromir", "Pippin", "Celeborn", "Frodo", "Legolas", "Gandalf", "Bilbo", "Gimli", "Sam", "Saruman", "Elrond", "Endor", "Romen", "Harad", "Shire", "Greenfields", "Hobbiton", "Rivendell", "Gondolin", "Tirion", "Tharbad", "Edoras", "Dale", "Moria", "sword", "axes", "bows", "spear", "arrows", "knives", "crossbow", "hammer", "club", "staff"];

// Pick a random word
    var word = wordList[Math.floor(Math.random() * wordList.length)];

    var wordListLength = word.length;
        for (i = 0; i < wordListLength; i++) {
            word = [word.slice(0, i*2+1), ' ', word.slice(i*2+1)].join('');
}
    console.log(word);
    


document.addEventListener('keydown', function(event) {


    var wins = 0;
    var losses = 0;
    var counter = 7;
    var wrongLetter = [];
    var blankSpaces = [];

    
    //Begining screen start of game
    var keyPress = String.fromCharCode(event.keyCode);



});








//pull 
