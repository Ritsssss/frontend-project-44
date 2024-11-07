#!/usr/bin/env node
import playGame from '../src/index';
import brainGCD from '../src/games/brain-gcd';

const { description, gameLogic } = brainGCD();
playGame(description, gameLogic);
