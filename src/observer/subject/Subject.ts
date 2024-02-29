import { Observer } from '../observers/Observer';

export abstract class Subject<T> {
  private observers: Observer<T>[] = [];

  add(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  notifyObservers(value: T): void {
    this.observers.forEach((observer) => observer.update(value));
  }
}
