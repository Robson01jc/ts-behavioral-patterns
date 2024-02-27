import { Cart } from './Cart';
import { Product } from './Product';

export const cartApp = {
  main(): void {
    const cart: Cart = new Cart([
      new Product('TV', 1000),
      new Product('Shoe', 59.99),
      new Product('Pencil', 0.5),
    ]);

    for (const product of cart) {
      console.log(`${product.desc} = ${product.value}`);
    }

    const stream = [...cart];
    const sum = stream.reduce((acc, prod) => acc + prod.value, 0.0);
    console.log(sum);
  },
};
