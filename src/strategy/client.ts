import { Calculator } from './Calculator';

export const strategyApp = {
  main(): void {
    const calc = new Calculator(10, 2);
    console.log(calc.getResult((num1, num2) => num1 + num2));
    console.log(calc.getResult((num1, num2) => num1 - num2));
    console.log(calc.getResult((num1, num2) => num1 * num2));
    console.log(calc.getResult((num1, num2) => num1 / num2));
    console.log(calc.getResult((num1, num2) => Math.pow(num1, num2)));
  },
};
