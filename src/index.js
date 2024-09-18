import readlineSync from 'readline-sync';
import * as even from '../bin/games/brain-even.js';
import * as calc from '../bin/games/brain-calc.js';

function playGame(gameDescription, gameLogic) {
  console.log(`Welcome to the Brain Games!`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(gameDescription);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

const selectedGame = readlineSync.question('Pick a game (1 или 2): ');

switch (selectedGame) {
  case '1':
    playGame(even.description, even.gameLogic);
    break;
  case '2':
    playGame(calc.description, calc.gameLogic);
    break;
  default:
    console.log('Wrong choice!');
}
