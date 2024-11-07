#!/usr/bin/env node
import playGame from '../src/index';
import brainProgression from '../src/games/brain-progression';

const { description, gameLogic } = brainProgression();
playGame(description, gameLogic);
