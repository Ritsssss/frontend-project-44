#!/usr/bin/env node
/* eslint-disable default-case */
import { playGame } from '../../src/index.js';

const description = 'What is the result of the expression?';

const gameLogic = () => {
  const randomNumberOne = Math.floor(Math.random() * 20 + 1);
  const randomNumberTwo = Math.floor(Math.random() * 20 + 1);
  const randomOperator = Math.floor(Math.random() * 3);

  let question;
  let correctAnswer;

  switch (randomOperator) {
    case 0:
      question = `${randomNumberOne} + ${randomNumberTwo}`;
      correctAnswer = String(randomNumberOne + randomNumberTwo);
      return { question, correctAnswer };
    case 1:
      question = `${randomNumberOne} - ${randomNumberTwo}`;
      correctAnswer = String(randomNumberOne - randomNumberTwo);
      return { question, correctAnswer };
    case 2:
      question = `${randomNumberOne} * ${randomNumberTwo}`;
      correctAnswer = String(randomNumberOne * randomNumberTwo);
      return { question, correctAnswer };
  }
};

playGame(description, gameLogic);
