export default function brainCalc() {
  const description = 'What is the result of the expression?';

  const calculateAnswer = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return null;
    }
  };

  const gameLogic = () => {
    const randomNumberOne = Math.floor(Math.random() * 20 + 1);
    const randomNumberTwo = Math.floor(Math.random() * 20 + 1);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${randomNumberOne} ${operator} ${randomNumberTwo}`;
    const correctAnswer = String(calculateAnswer(randomNumberOne, randomNumberTwo, operator));
    return { question, correctAnswer };
  };
  return { description, gameLogic };
}
