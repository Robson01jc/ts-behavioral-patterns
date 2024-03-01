import { HeadPhone } from '../HeadPhone';
import { HeadPhoneState } from './HeadPhoneState';
import { OffState } from './OffState';
import { OnState } from './OnState';

export class PlayingState implements HeadPhoneState {
  private static instance: PlayingState = new PlayingState();

  static getInstance(): PlayingState {
    return PlayingState.instance;
  }

  private constructor() {}

  click(headPhone: HeadPhone): void {
    headPhone.isPlaying = false;
    headPhone.state = OnState.getInstance();
    console.log('> Stop Player');
  }

  longClick(headPhone: HeadPhone): void {
    headPhone.isPlaying = false;
    headPhone.isOn = false;
    headPhone.state = OffState.getInstance();
    console.log('> Turning Off');
  }
}
