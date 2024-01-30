import { ProcessContext } from '../service/ProcessContext';
import { ProcessStep } from './ProcessStep';

export class CheckPassword extends ProcessStep<boolean> {
  constructor(...args: any[]) {
    super(...args);
  }

  execute(context: ProcessContext<any>): ProcessContext<boolean> {
    const passwdInput: string = context.get('input.password');
    const passwdDb: string = context.get('user.password');
    if (passwdDb !== passwdInput) throw Error("Password don't match");

    return this.next(context, true);
  }
}
