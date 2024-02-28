export class HTMLElement<T> {
  constructor(private selector: string) {}

  public get el(): T {
    return document.querySelector(this.selector) as T;
  }
}
