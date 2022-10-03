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

const attempts = 8;
printWelcome();

let target = randomWord(words);
let current = '-'.repeat(target.length).split('');

for (let i = 1; i <= attempts; i++) {
    console.log(`\n${current.join('')}`);
    let letter = input('Input a letter: ');
    if (target.includes(letter)) {
        for (let l = 0; l < target.length; l++) {
            if (target.charAt(l) === letter) {
                current[l] = letter;
            }
        }
    } else {
        console.log("That letter doesn't appear in the word.")
    }
}
console.log('Thanks for playing!');

/*
let word = input(`Guess the word ${current.join('')}:`);
if (word === target) {
    console.log('You survived!');
} else {
    console.log('You lost!');
}*/

