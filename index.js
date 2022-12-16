var readlineSync = require('readline-sync');
console.log('readline-sync demo');
var theAnswer = '10';
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var playGame = readlineSync.question('Do you want to play a game?');
if (playGame === "no") {
    console.log('oh no');
} else {
    console.log('Good, let\'s play guess a number!');
    console.log('I\'m thinking of a number between 1-100');
    // Handle the secret text (e.g. password).
    let theGuess = ''
    do {
        theGuess = readlineSync.question('What is your guess?');
        if (theGuess != theAnswer) {
            console.log('\nGuess again')
        }
    } while (theGuess != theAnswer) {
        console.log('you guessed it right')
    }
}
