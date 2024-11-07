#!/usr/bin/env node
import playGame from '../src/index.js';
import brainGCD from '../src/games/brain-gcd.js';

const { description, gameLogic } = brainGCD();
playGame(description, gameLogic);
