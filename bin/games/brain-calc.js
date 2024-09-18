#!/usr/bin/games/env node
export const description = 'What is the result of the expression?';

export const gameLogic = () => {
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
}
