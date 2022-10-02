import Game, {
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame,
} from './game.js';

const game = new Game();
export default game.start();
