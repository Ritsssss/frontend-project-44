#!/usr/bin/env node

import { playGame } from '../../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let correctAnswer;

const gameLogic = () => {
    const question = Math.floor(Math.random() * 20 + 1);
    
    if (question === 1) {
        correctAnswer = 'yes';
    }

    else {
        for (let i = 2; i < question; i += 1) {
        if (question % i === 0) {
            correctAnswer = 'no';
            break;
        }
        correctAnswer = 'yes';
    }

    }
    
    return { question, correctAnswer };
  };

  playGame(description, gameLogic);