import { AddButton } from './components/AddButton';
import { Label } from './components/Label';
import { ResetButton } from './components/ResetButton';
import { State } from './components/State';
import { Mediator } from './mediator/Mediator';

function main(): void {
  const mediator = new Mediator();
  const button = new AddButton(mediator);
  const reset = new ResetButton(mediator);
  const label = new Label(mediator);
  const state = new State(mediator);
  mediator.setButton(button);
  mediator.setLabel(label);
  mediator.setState(state);
}

document.addEventListener('DOMContentLoaded', main);
