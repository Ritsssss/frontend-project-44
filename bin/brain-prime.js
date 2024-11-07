#!/usr/bin/env node
import playGame from '../src/index.js';
import brainPrime from '../src/games/brain-prime.js';

const { description, gameLogic } = brainPrime();
playGame(description, gameLogic);
