#!/usr/bin/env node
import playGame from '../src/index.js';
import brainEven from '../src/games/brain-even.js';

const { description, gameLogic } = brainEven();
playGame(description, gameLogic);
