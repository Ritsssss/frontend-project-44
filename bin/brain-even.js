#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
const name = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counter = 0;

// check if a number is even
function evenOrNot(someNumber) {
  if ((someNumber % 2) === 0) {
    return 'yes';
  }
  return 'no';
}

// compare results from step 3 and step 4
for (let i = 0; i < 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * 20 + 1);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === evenOrNot(randomNumber)) {
    counter += 1;
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${evenOrNot(randomNumber)}'.`);
    break;
  }
}
if (counter === 3) {
  console.log(`Congratulations, ${name}!`);
}
