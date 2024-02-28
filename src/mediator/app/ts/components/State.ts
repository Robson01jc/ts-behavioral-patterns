import { Mediator } from '../mediator/Mediator';

export class State {
  private _counter: number = 0;

  constructor(private mediator: Mediator) {}

  addCount(): void {
    this._counter++;
    if (this._counter == 10) this.mediator.stop();
  }

  public get counter(): number {
    return this._counter;
  }

  public set counter(counter: number) {
    this._counter = counter;
  }
}
