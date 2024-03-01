import { HeadPhone } from '../HeadPhone';
import { HeadPhoneState } from './HeadPhoneState';
import { OnState } from './OnState';

export class OffState implements HeadPhoneState {
  private static instance: OffState = new OffState();

  static getInstance(): OffState {
    return OffState.instance;
  }

  private constructor() {}

  click(headPhone: HeadPhone): void {
    //Nothing to do!
  }

  longClick(headPhone: HeadPhone): void {
    headPhone.isOn = true;
    headPhone.state = OnState.getInstance();
    console.log('> Turning On');
  }
}
