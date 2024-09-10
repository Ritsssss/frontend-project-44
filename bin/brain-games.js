#!/usr/bin/env node
import greeting from '../src/cli.js';

console.log('Welcome to the Brain Games!');
// greeting();
const name = greeting();
console.log(`Hello, ${name}!`);
