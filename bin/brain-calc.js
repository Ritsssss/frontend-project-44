import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

function greeting() {
  const name = readlineSync.question('May I have your name? ');
  return `${name}`;
}

const name = greeting();
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');
let counter = 0;

for (let i = 0; i < 3; i += 1) {
  const randomNumberOne = Math.floor(Math.random() * 20 + 1);
  const randomNumberTwo = Math.floor(Math.random() * 20 + 1);
  const randomOperator = Math.floor(Math.random() * 3);
  
  if (randomOperator === 0) {
    console.log(`Question: ${randomNumberOne} + ${randomNumberTwo}`);
  }
  else if (randomOperator === 1) {
    console.log(`Question: ${randomNumberOne} - ${randomNumberTwo}`);
  }
  else {
    console.log(`Question: ${randomNumberOne} * ${randomNumberTwo}`);
  };
  
  const userAnswer = readlineSync.question('Your answer: ');
  if (randomOperator === 0 && userAnswer === randomNumberOne + randomNumberTwo) {
    counter += 1;
    console.log('Correct!');
  } 
  else if (randomOperator === 1 && userAnswer === randomNumberOne - randomNumberTwo) {
    counter += 1;
    console.log('Correct!');
  } 
  else if (randomOperator === 2 && userAnswer === randomNumberOne * randomNumberTwo) {
    counter += 1;
    console.log('Correct!');
  } 
  else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was SOMETHING.`);
    break;
  }
}
if (counter === 3) {
  console.log(`Congratulations, ${name}!`);
}