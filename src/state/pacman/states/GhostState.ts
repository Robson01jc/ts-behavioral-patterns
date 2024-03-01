import { Ghost } from '../Ghost';

export interface GhostState {
  spotPacman(ghost: Ghost): void;
  losePacman(ghost: Ghost): void;
  pacmanTurnsSpecial(ghost: Ghost): void;
  pacmanTurnsNormal(ghost: Ghost): void;
  eatenByPacman(ghost: Ghost): void;
  reachTheBase(ghost: Ghost): void;
}
