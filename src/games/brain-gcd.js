#!/usr/bin/env node
import { playGame } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  const arrayOne = [];
  const arrayTwo = [];

  let correctAnswer = 0;

  // create two arrays
  for (let divisorOne = 1; divisorOne < num1 + 1; divisorOne += 1) {
    if (num1 % divisorOne === 0) {
      arrayOne.push(divisorOne);
    }
  }

  for (let divisorTwo = 1; divisorTwo < num2 + 1; divisorTwo += 1) {
    if (num2 % divisorTwo === 0) {
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
  return correctAnswer;
};

const gameLogic = () => {
  const randomNumberOne = Math.floor(Math.random() * 20 + 1);
  const randomNumberTwo = Math.floor(Math.random() * 20 + 1);
  const question = `${randomNumberOne} ${randomNumberTwo}`;

  const correctAnswer = String(findGCD(randomNumberOne, randomNumberTwo));
  return { question, correctAnswer };
};

playGame(description, gameLogic);
