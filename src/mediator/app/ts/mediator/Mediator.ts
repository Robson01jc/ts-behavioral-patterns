import { AddButton } from '../components/AddButton';
import { Label } from '../components/Label';
import { State } from '../components/State';

export class Mediator {
  private button?: AddButton;
  private label?: Label;
  private state?: State;

  buttonClicked(): void {
    this.state?.addCount();
    this.label?.refresh();
  }

  stop(): void {
    if (this.button) this.button.enabled = false;
  }

  reset(): void {
    if (this.state) this.state.counter = 0;
    if (this.button) this.button.enabled = true;
    this.label?.refresh();
  }

  getCounterValue(): number {
    return this.state?.counter ?? 0;
  }

  setButton(button: AddButton): void {
    this.button = button;
  }

  setLabel(label: Label): void {
    this.label = label;
  }

  setState(state: State): void {
    this.state = state;
  }
}
