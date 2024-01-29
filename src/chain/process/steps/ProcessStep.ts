import { ProcessContext } from '../service/ProcessContext';

export abstract class ProcessStep {
  protected nextStep?: ProcessStep;
  protected args?: any[];

  constructor(...args: any[]) {
    this.args = args;
  }

  abstract execute(context: ProcessContext): ProcessContext;

  setNextStep(next: ProcessStep): void {
    this.nextStep = next;
  }

  next(context: ProcessContext, actualResult: any): ProcessContext {
    context.setProcessResult(actualResult);

    return this.nextStep ? this.nextStep.execute(context) : context;
  }
}
