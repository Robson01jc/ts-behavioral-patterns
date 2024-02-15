import { Light } from '../lights/Light';
import { Command } from './Command';

export class TurnLightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }
}
