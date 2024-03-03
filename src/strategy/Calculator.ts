import { OperationStrategy } from './strategies/OperationStrategy';

export class Calculator {
  constructor(private num1: number, private num2: number) {}

  getResult(operation: OperationStrategy): number {
    return operation(this.num1, this.num2);
  }
}
