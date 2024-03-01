import { Ghost } from '../Ghost';
import { ChasePacmanState } from './ChasePacmanState';
import { FleePacmanState } from './FleePacmanState';
import { GhostState } from './GhostState';

export class WanderMazeState implements GhostState {
  private static instance: WanderMazeState = new WanderMazeState();

  private constructor() {}

  static getInstance(): WanderMazeState {
    return WanderMazeState.instance;
  }

  spotPacman(ghost: Ghost): void {
    console.log("I've just spot the pacman, let's chase him!");
    ghost.setState(ChasePacmanState.getInstance());
  }

  losePacman(ghost: Ghost): void {
    console.log("How to lose what I haven't found?");
  }

  pacmanTurnsSpecial(ghost: Ghost): void {
    console.log('Oh no! We have a Super PacMan now, better hide!');
    ghost.setState(FleePacmanState.getInstance());
  }

  pacmanTurnsNormal(ghost: Ghost): void {
    console.log('But he was normal already...');
  }

  eatenByPacman(ghost: Ghost): void {
    console.log(
      "Are you joking? It's impossible to be eaten by a normal PacMan..."
    );
  }

  reachTheBase(ghost: Ghost): void {
    console.log("I wasn't going to the base...");
  }
}
