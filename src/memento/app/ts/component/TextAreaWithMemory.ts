import { Memento } from '../memory/Memento';
import { TextArea } from './TextArea';

class TextAreaMemento implements Memento {
  constructor(private text: string) {}

  getState(): string {
    return this.text;
  }
}

export class TextAreaWithMemory extends TextArea {
  save(): Memento {
    return new TextAreaMemento(this.getText());
  }

  restore(memento: Memento): void {
    this.setText(memento.getState());
  }
}
