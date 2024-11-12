import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(someNumber) {
  return someNumber % 2 === 0;
}

const gameLogic = () => {
  const question = Math.floor(Math.random() * 20 + 1);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  playGame(description, gameLogic);
};
