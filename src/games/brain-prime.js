#!/usr/bin/env node

import { playGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let correctAnswer;
  if (num === 1) {
    correctAnswer = 'no';
  } else if (num === 2) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'yes';
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        correctAnswer = 'no';
        break;
      }
    }
  }
  return correctAnswer;
};

const gameLogic = () => {
  const question = Math.floor(Math.random() * 20 + 1);
  const correctAnswer = String(isPrime(question));
  return { question, correctAnswer };
};

playGame(description, gameLogic);
