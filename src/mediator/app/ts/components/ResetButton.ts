import { Mediator } from '../mediator/Mediator';
import { HTMLElement } from './HTMLElement';

export class ResetButton extends HTMLElement<HTMLButtonElement> {
  constructor(private mediator: Mediator) {
    super('button.reset');

    this.el.addEventListener('click', () => {
      this.mediator.reset();
    });
  }
}
