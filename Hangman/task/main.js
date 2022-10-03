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


function goodChoice (letter) {
    if (letter === null ) {
        return false;
    }
    if (letter.length !== 1) {
        console.log('Please, input a single letter.');
        return false;
    }

    if (tried.includes(letter)) {
        console.log('You\'ve already guessed this letter.');
        return false;
    }

    if (letter.match(/[a-z]/)) {
        return true;
    } else {
        console.log('Please, enter a lowercase letter from the English alphabet.');
        return false;
    }
}


function getLetter () {
    let letter = null;
    while (!goodChoice(letter))
    {
        console.log(`\n${current.join('')}`);
        letter = input('Input a letter: ');
    }
    return letter;
}

let attempts = 8;
printWelcome();

let target = randomWord(words);
let current = '-'.repeat(target.length).split('');
let tried = []

while (attempts > 0) {
    let letter = getLetter();
    tried.push(letter);
    if (target.includes(letter)) { // good letter
        for (let l = 0; l < target.length; l++) {
            if (target.charAt(l) === letter) {
                current[l] = letter;
            }
        }
        // check if won
        if (!current.includes('-')) {
            console.log(`You guessed the word ${target}!\nYou survived!`);
            attempts = -1;
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
