#!/usr/bin/env node
import playGame from '../src/index';
import brainCalc from '../src/games/brain-calc';

const { description, gameLogic } = brainCalc();
playGame(description, gameLogic);
