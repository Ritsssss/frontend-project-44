#!/usr/bin/env node

import { playGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let correctAnswer;

const isPrime = (num) => {
  if (num === 1) {
    correctAnswer = 'yes';
  } else {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        correctAnswer = 'no';
        break;
      }
      correctAnswer = 'yes';
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
