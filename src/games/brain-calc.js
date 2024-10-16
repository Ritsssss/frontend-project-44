#!/usr/bin/env node
/* eslint-disable default-case */
import { playGame } from '../index.js';

const description = 'What is the result of the expression?';

const calculateAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

const gameLogic = () => {
  const randomNumberOne = Math.floor(Math.random() * 20 + 1);
  const randomNumberTwo = Math.floor(Math.random() * 20 + 1);
  const randomOperator = Math.floor(Math.random() * 3);

  let operator;

  switch (randomOperator) {
    case 0:
      operator = '+';
    case 1:
      operator = '-';
    case 2:
      operator = '*';
  }

  const question = `${randomNumberOne} ${operator} ${randomNumberTwo}`;
  const correctAnswer = String(calculateAnswer(randomNumberOne, randomNumberTwo, operator));
  return { question, correctAnswer };
};

playGame(description, gameLogic);
