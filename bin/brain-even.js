#!/usr/bin/env node
import playGame from '../src/index';
import brainEven from '../src/games/brain-even';

const { description, gameLogic } = brainEven();
playGame(description, gameLogic);
