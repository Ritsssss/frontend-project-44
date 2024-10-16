#!/usr/bin/env node

import { playGame } from '../../src/index.js';

const description = 'What number is missing in the progression?';

const createProgression = (firstItem, step, length) => {
  const questionArray = [];
  let l = firstItem;

  for (let i = 0; i < length; i += 1) {
    questionArray.push(l);
    l += step;
  }
  return questionArray;
};

const gameLogic = () => {
  let a = Math.floor(Math.random() * 20 + 1);
  const d = Math.floor(Math.random() * 10 + 1);
  const progressionLength = 10;

  const questionArray = createProgression(a, d, progressionLength);

  const missingNumber = Math.floor(Math.random() * progressionLength);

  const correctAnswer = String(questionArray[missingNumber]);

  questionArray[missingNumber] = '..';

  const question = questionArray.join(' ');

  return { question, correctAnswer };
};

playGame(description, gameLogic);
