import { Light } from './Light';

export class XiaomiLight implements Light {
  turnOn(): void {
    console.log('The XiaomiLight is On');
  }

  turnOff(): void {
    console.log('The XiaomiLight is Off');
  }
}
