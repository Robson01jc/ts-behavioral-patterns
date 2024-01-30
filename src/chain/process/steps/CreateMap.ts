import { ProcessContext } from '../service/ProcessContext';
import { ProcessStep } from './ProcessStep';

export class CreateMap extends ProcessStep<boolean> {
  constructor(...args: any[]) {
    super(...args);
  }

  execute(context: ProcessContext<any>): ProcessContext<boolean> {
    context.encapsulate(this.args![0] as string);
    return this.next(context, true);
  }
}
