import { UserRepository } from '../repository/UserRepository';
import { ProcessContext } from '../service/ProcessContext';
import { ProcessStep } from './ProcessStep';

export class ValidateToken extends ProcessStep<boolean> {
  constructor(...args: any[]) {
    super(...args);
  }

  execute(context: ProcessContext<any>): ProcessContext<boolean> {
    const token: string = context.get('token');
    const email: string = token.toLowerCase();
    const user = UserRepository.getInstance().getUserByEmail(email);
    if (!user) throw Error('Invalid token!');

    return this.next(context, true);
  }
}
