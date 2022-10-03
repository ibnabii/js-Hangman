// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
const Console = require("console");

const words = ["python", "java", "swift", "javascript"];

function printWelcome () {
    console.log("H A N G M A N");
}

function randomWord (array) {
    return array[Math.floor(Math.random() * array.length)];
}

printWelcome();
let target = randomWord(words);
let word = input('Guess the word: ')
if (word === target) {
    console.log('You survived!')
} else {
    console.log('You lost!')
}

