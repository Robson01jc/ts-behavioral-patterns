export class TextArea {
  constructor(private selector: string) {}

  get el(): HTMLTextAreaElement {
    return document.querySelector(this.selector) as HTMLTextAreaElement;
  }

  protected getText(): string {
    return this.el.value;
  }

  protected setText(text: string): void {
    this.el.value = text;
  }
}
