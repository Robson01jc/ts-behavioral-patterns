import { Ghost } from '../Ghost';
import { GhostState } from './GhostState';
import { ReturnToBaseState } from './ReturnToBaseState';
import { WanderMazeState } from './WanderMazeState';

export class FleePacmanState implements GhostState {
  private static instance: FleePacmanState = new FleePacmanState();

  private constructor() {}

  static getInstance(): FleePacmanState {
    return FleePacmanState.instance;
  }

  spotPacman(ghost: Ghost): void {
    console.log("I don't wanna see him, turn back...");
  }

  losePacman(ghost: Ghost): void {
    console.log('Actually, he loses ME...');
  }

  pacmanTurnsSpecial(ghost: Ghost): void {
    console.log("I know! I'm already running...");
  }

  pacmanTurnsNormal(ghost: Ghost): void {
    console.log("That was close, I'll find him again!");
    ghost.setState(WanderMazeState.getInstance());
  }

  eatenByPacman(ghost: Ghost): void {
    console.log("Oh no! I'll be back!");
    ghost.setState(ReturnToBaseState.getInstance());
  }

  reachTheBase(ghost: Ghost): void {
    console.log("I wasn't going to the base... yet!");
  }
}
