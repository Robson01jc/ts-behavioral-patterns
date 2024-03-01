import { Ghost } from './Ghost';
import { Game } from './game/Game';

export const pacmanApp = {
  async main(): Promise<void> {
    const ghost = new Ghost();

    const game = new Game();
    game.addListener((option): void => {
      switch (option) {
        case '1':
          ghost.spotPacman();
          break;
        case '2':
          ghost.losePacman();
          break;
        case '3':
          ghost.pacmanTurnsSpecial();
          break;
        case '4':
          ghost.pacmanTurnsNormal();
          break;
        case '5':
          ghost.eatenByPacman();
          break;
        case '6':
          ghost.reachTheBase();
          break;
        case '0':
          game.stopLoop();
          break;
        default:
          console.log('Invalid Option');
          break;
      }
    });

    await game.startLoop();
  },
};
