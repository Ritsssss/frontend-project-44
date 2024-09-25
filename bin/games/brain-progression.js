#!/usr/bin/env node

import { playGame } from '../../src/index.js';

const description = 'What number is missing in the progression?';

const gameLogic = () => {
    let a = Math.floor(Math.random() * 20 + 1);
    const d = Math.floor(Math.random() * 10 + 1);
    
    let questionArray = [];
    let l = 1;

    for (let i = 0; i < 10; i += 1) {
        questionArray.push(a);
        a = a + (1 * d);
        l += 1;
    }
    
    const missingNumber = Math.floor(Math.random() * 10 + 1);

    const correctAnswer = String(questionArray[missingNumber]);
    questionArray[missingNumber] = '..';

    const question = questionArray.join(' ');
    return { question, correctAnswer };
  };

  playGame(description, gameLogic);