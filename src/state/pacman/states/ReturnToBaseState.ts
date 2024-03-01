import { Ghost } from '../Ghost';
import { GhostState } from './GhostState';
import { WanderMazeState } from './WanderMazeState';

export class ReturnToBaseState implements GhostState {
  private static instance: ReturnToBaseState = new ReturnToBaseState();

  private constructor() {}

  static getInstance(): ReturnToBaseState {
    return ReturnToBaseState.instance;
  }

  spotPacman(ghost: Ghost): void {
    console.log("I'll haunt him, now that I'm a ghost of a ghost...");
  }

  losePacman(ghost: Ghost): void {
    console.log('I was hopping this before...');
  }

  pacmanTurnsSpecial(ghost: Ghost): void {
    console.log('I saw!');
  }

  pacmanTurnsNormal(ghost: Ghost): void {
    console.log('Too late!');
  }

  eatenByPacman(ghost: Ghost): void {
    console.log('Again? No!');
  }

  reachTheBase(ghost: Ghost): void {
    console.log("It's clear now! I want my Revenge!");
    ghost.setState(WanderMazeState.getInstance());
  }
}
