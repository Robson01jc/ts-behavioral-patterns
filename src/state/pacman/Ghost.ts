import { GhostState } from './states/GhostState';
import { WanderMazeState } from './states/WanderMazeState';

export class Ghost {
  constructor(private _state: GhostState = WanderMazeState.getInstance()) {}

  public get state(): GhostState {
    return this._state;
  }

  set state(state: GhostState) {
    this._state = state;
  }

  setState(state: GhostState): void {
    console.log(
      `Changing from ${this.state.constructor.name} to ${state.constructor.name}`
    );
    this.state = state;
  }

  spotPacman(): void {
    this.state.spotPacman(this);
  }

  losePacman(): void {
    this.state.losePacman(this);
  }

  pacmanTurnsSpecial(): void {
    this.state.pacmanTurnsSpecial(this);
  }

  pacmanTurnsNormal(): void {
    this.state.pacmanTurnsNormal(this);
  }

  eatenByPacman(): void {
    this.state.eatenByPacman(this);
  }

  reachTheBase(): void {
    this.state.reachTheBase(this);
  }
}
