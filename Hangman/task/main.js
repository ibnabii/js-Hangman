// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
const Console = require("console");

function printWelcome () {
    console.log("H A N G M A N")
}

printWelcome();
let word = input('Guess the word: ')
if (word == 'python') {
    console.log('You survived!')
} else {
    console.log('You lost!')
}

