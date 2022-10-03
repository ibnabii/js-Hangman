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

let attempts = 8;
printWelcome();

let target = randomWord(words);
let current = '-'.repeat(target.length).split('');

while (attempts > 0) {
    console.log(`\n${current.join('')}`);
    let letter = input('Input a letter: ');
    if (target.includes(letter)) { // good letter
        if (current.includes(letter)) { // letter already guessed
            console.log('No improvements.');
            attempts--;
        } else { // new letter
            for (let l = 0; l < target.length; l++) {
                if (target.charAt(l) === letter) {
                    current[l] = letter;
                }
            }
            // check if won
            if (!current.includes('-')) {
                console.log('You guessed the word!\nYou survived!');
                attempts = -1;
            }
        }
    } else {
        console.log("That letter doesn't appear in the word.")
        attempts--;
    }
}
if (attempts === 0) {
    console.log('\nYou lost!')
}
//console.log('Thanks for playing!');
