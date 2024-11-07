#!/usr/bin/env node
import playGame from '../src/index.js';
import brainCalc from '../src/games/brain-calc.js';

const { description, gameLogic } = brainCalc();
playGame(description, gameLogic);
