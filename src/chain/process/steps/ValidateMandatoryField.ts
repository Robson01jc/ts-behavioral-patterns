import { ProcessContext } from '../service/ProcessContext';
import { ProcessStep } from './ProcessStep';

export class ValidateMandatoryField extends ProcessStep<boolean> {
  constructor(...args: any[]) {
    super(...args);
  }

  execute(context: ProcessContext<any>): ProcessContext<boolean> {
    const field: string = context.get(this.args![0] as string);
    if (!field) throw Error(`${this.args![0]} is empty`);

    return this.next(context, true);
  }
}
