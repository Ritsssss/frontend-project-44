#!/usr/bin/env node
import { playGame } from '../../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  const randomNumberOne = Math.floor(Math.random() * 20 + 1);
  const randomNumberTwo = Math.floor(Math.random() * 20 + 1);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  
  let correctAnswer = 0;

  const arrayOne = [];
  const arrayTwo = [];

  // create two arrays
  for (let divisorOne = 1; divisorOne < randomNumberOne + 1; divisorOne += 1) {
    if (randomNumberOne % divisorOne === 0) {
      arrayOne.push(divisorOne);
    }
  }

  for (let divisorTwo = 1; divisorTwo < randomNumberTwo + 1; divisorTwo += 1) {
    if (randomNumberTwo % divisorTwo === 0) {
      arrayTwo.push(divisorTwo);
    }
  }

  // find greatest common element in the arrays
  for (let i = 0; i < arrayOne.length; i += 1) {
    // Loop for array2
    for (let j = 0; j < arrayTwo.length; j += 1) {
      if (arrayOne[i] === arrayTwo[j] && arrayOne[i] > correctAnswer) {
        correctAnswer = String(arrayOne[i]);
    }
    }
  }
  return { question, correctAnswer };
};

playGame(description, gameLogic);