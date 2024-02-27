export class Product {
  constructor(private _desc: string, private _value: number) {}

  get desc() {
    return this._desc;
  }

  get value() {
    return this._value;
  }
}
