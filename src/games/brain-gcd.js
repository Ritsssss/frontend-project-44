import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

const gameLogic = () => {
  const randomNumberOne = Math.floor(Math.random() * 20 + 1);
  const randomNumberTwo = Math.floor(Math.random() * 20 + 1);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = String(NOD(randomNumberOne, randomNumberTwo));
  return { question, correctAnswer };
};

export default () => {
  playGame(description, gameLogic);
};
