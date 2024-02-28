import { Mediator } from '../mediator/Mediator';
import { HTMLElement } from './HTMLElement';

export class Label extends HTMLElement<HTMLSpanElement> {
  constructor(private mediator: Mediator) {
    super('span.label');

    this.el.innerHTML = 'Times Clicked: 0';
  }

  refresh(): void {
    this.el.innerHTML = `Times Clicked: ${this.mediator.getCounterValue()}`;
  }
}
