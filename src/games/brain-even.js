#!/usr/bin/env node
import { playGame } from '../index.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export function isEven(someNumber) {
  return someNumber % 2 === 0;
}

export const gameLogic = () => {
  const question = Math.floor(Math.random() * 20 + 1);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

playGame(description, gameLogic);
