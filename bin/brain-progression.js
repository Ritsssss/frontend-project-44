#!/usr/bin/env node
import playGame from '../src/index.js';
import brainProgression from '../src/games/brain-progression.js';

const { description, gameLogic } = brainProgression();
playGame(description, gameLogic);
