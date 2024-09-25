#!/usr/bin/env node
import { playGame } from '../../src/index.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export function evenOrNot(someNumber) {
  if (someNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export const gameLogic = () => {
  const question = Math.floor(Math.random() * 20 + 1);
  const correctAnswer = evenOrNot(question);
  return { question, correctAnswer };
};

playGame(description, gameLogic);