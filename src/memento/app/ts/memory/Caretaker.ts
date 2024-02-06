import { Memento } from './Memento';

export class Caretaker {
  private mementos: Memento[] = [];

  getHistoryList(): Readonly<Memento[]> {
    return [...this.mementos];
  }

  add(memento: Memento): void {
    this.mementos.push(memento);
  }

  get(index: number): Memento {
    return this.mementos[index];
  }
}
