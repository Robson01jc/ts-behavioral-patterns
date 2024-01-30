import { ProcessContext } from '../service/ProcessContext';
import { ProcessStep } from './ProcessStep';

export class GetUserToken extends ProcessStep<string> {
  constructor(...args: any[]) {
    super(...args);
  }

  execute(context: ProcessContext<any>): ProcessContext<string> {
    const emailDb: string = context.get('user.email');
    context.put('token', emailDb.toUpperCase());

    return this.next(context, emailDb.toUpperCase());
  }
}
