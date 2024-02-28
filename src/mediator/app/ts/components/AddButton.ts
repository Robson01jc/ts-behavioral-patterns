import { Mediator } from '../mediator/Mediator';
import { HTMLElement } from './HTMLElement';

export class AddButton extends HTMLElement<HTMLButtonElement> {
  constructor(private mediator: Mediator) {
    super('button.add');

    this.el.addEventListener('click', () => {
      this.mediator.buttonClicked();
    });
  }

  set enabled(enabled: boolean) {
    this.el.disabled = !enabled;
  }
}
