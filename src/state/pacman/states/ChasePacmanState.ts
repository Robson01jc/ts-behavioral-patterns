import { Ghost } from '../Ghost';
import { FleePacmanState } from './FleePacmanState';
import { GhostState } from './GhostState';
import { WanderMazeState } from './WanderMazeState';

export class ChasePacmanState implements GhostState {
  private static instance: ChasePacmanState = new ChasePacmanState();

  private constructor() {}

  static getInstance(): ChasePacmanState {
    return ChasePacmanState.instance;
  }

  spotPacman(ghost: Ghost): void {
    console.log("I know, I'm already chasing him...");
  }

  losePacman(ghost: Ghost): void {
    console.log("The Pacman ran away, let's find him again");
    ghost.setState(WanderMazeState.getInstance());
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
