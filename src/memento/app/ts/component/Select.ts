export class Select {
  constructor(private selector: string) {}

  get el(): HTMLSelectElement {
    return document.querySelector(this.selector) as HTMLSelectElement;
  }

  addItem(value: string) {
    this.el.insertAdjacentHTML(
      'beforeend',
      `<option value="${value}">${value}</option>`
    );
  }

  setSelectedItem(value: string) {
    this.el.value = value;
  }

  addEventListener(type: string, func: () => void) {
    this.el.addEventListener(type, func);
  }

  getSelectedIndex() {
    const options = Array.from(this.el.querySelectorAll('option'));

    return options.findIndex((option) => option.value === this.el.value);
  }

  getItemCount() {
    return this.el.querySelectorAll('option').length;
  }

  setSelectedIndex(index: number) {
    const options = Array.from(this.el.querySelectorAll('option'));
    this.el.value = options[index].value;
  }
}
