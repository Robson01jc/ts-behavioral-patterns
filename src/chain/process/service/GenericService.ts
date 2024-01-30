import { ProcessStep } from '../steps/ProcessStep';
import { ProcessContext } from './ProcessContext';

export class GenericService {
  static run<R>(
    startProcess: ProcessStep<R>,
    initialContext: ProcessContext<null>
  ): R {
    const result = startProcess.execute(initialContext);
    return result.getProcessResult()!;
  }
}
