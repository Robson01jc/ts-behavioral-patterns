import { HeadPhoneState } from './states/HeadPhoneState';
import { OffState } from './states/OffState';

export class HeadPhone {
  constructor(
    private _isOn: boolean = false,
    private _isPlaying: boolean = false,
    private _state: HeadPhoneState = OffState.getInstance()
  ) {}

  onLongClick(): void {
    console.log('Long Click Pressed...');
    this.state.longClick(this);
  }

  onClick(): void {
    console.log('Click Pressed...');
    this.state.click(this);
  }

  get isOn(): boolean {
    return this._isOn;
  }

  set isOn(isOn: boolean) {
    this._isOn = isOn;
  }

  get isPlaying(): boolean {
    return this._isPlaying;
  }

  set isPlaying(isPlaying: boolean) {
    this._isPlaying = isPlaying;
  }

  get state(): HeadPhoneState {
    return this._state;
  }

  set state(state: HeadPhoneState) {
    console.log(
      `Changing from ${this._state.constructor.name} to ${state.constructor.name}`
    );
    this._state = state;
  }
}
