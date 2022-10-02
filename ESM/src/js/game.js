import Character from './domain.js';

const defaultGame = class Game {
  start() {
    console.log('game started');
  }
};
export default defaultGame;

export class GameSavingData {}

export function readGameSaving() {}

export function writeGameSaving() {}
