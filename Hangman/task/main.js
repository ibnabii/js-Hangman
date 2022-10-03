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

function play () {
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
                wins++;
                return 1;
            }
        } else {
            console.log("That letter doesn't appear in the word.")
            attempts--;
        }
    }
    console.log('\nYou lost!')
    loses++;
    return 0;
}


printWelcome();
let wins = 0;
let loses = 0;
let attempts = 8;
let target = randomWord(words);
let current = '-'.repeat(target.length).split('');
let tried = [];

let cmd = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:')
while (cmd !== 'exit') {
    if (cmd === 'play') {
        attempts = 8;
        target = randomWord(words);
        current = '-'.repeat(target.length).split('');
        tried = [];
        play();
    }
    if (cmd === 'results') {
        console.log(`You won: ${wins} times.\nYou lost: ${loses} times.`);
    }
    cmd = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:')
}


