import { Light } from './Light';

export class PhillipsHueLight implements Light {
  turnOn(): void {
    console.log('The PhillipsHueLight is On');
  }

  turnOff(): void {
    console.log('The PhillipsHueLight is Off');
  }
}
