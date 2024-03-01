import { HeadPhone } from '../HeadPhone';
import { HeadPhoneState } from './HeadPhoneState';
import { OffState } from './OffState';
import { PlayingState } from './PlayingState';

export class OnState implements HeadPhoneState {
  private static instance: OnState = new OnState();

  static getInstance(): OnState {
    return OnState.instance;
  }

  click(headPhone: HeadPhone): void {
    headPhone.isPlaying = true;
    headPhone.state = PlayingState.getInstance();
    console.log('> Resume Player');
  }

  longClick(headPhone: HeadPhone): void {
    headPhone.isOn = false;
    headPhone.state = OffState.getInstance();
    console.log('> Turning Off');
  }
}
