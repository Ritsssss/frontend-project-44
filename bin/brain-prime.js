#!/usr/bin/env node
import playGame from '../src/index';
import brainPrime from '../src/games/brain-prime';

const { description, gameLogic } = brainPrime();
playGame(description, gameLogic);
