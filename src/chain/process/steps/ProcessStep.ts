import { ProcessContext } from '../service/ProcessContext';

export abstract class ProcessStep<R> {
  protected nextStep?: ProcessStep<any>;
  protected args?: any[];

  constructor(...args: any[]) {
    this.args = args;
  }

  abstract execute(context: ProcessContext<any>): ProcessContext<R>;

  setNextStep(next: ProcessStep<any>): void {
    this.nextStep = next;
  }

  next(context: ProcessContext<any>, actualResult: R): ProcessContext<R> {
    context.setProcessResult(actualResult);

    return this.nextStep ? this.nextStep.execute(context) : context;
  }
}
