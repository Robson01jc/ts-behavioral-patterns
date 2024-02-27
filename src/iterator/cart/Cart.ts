import { Product } from './Product';

export class Cart implements Iterable<Product> {
  constructor(private products: Product[]) {}

  [Symbol.iterator]() {
    return this.products[Symbol.iterator]();
  }
}
