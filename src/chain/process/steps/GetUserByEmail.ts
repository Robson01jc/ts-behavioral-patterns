import { UserRepository } from '../repository/UserRepository';
import { ProcessContext } from '../service/ProcessContext';
import { ProcessStep } from './ProcessStep';

export class GetUserByEmail extends ProcessStep<Map<string, any> | null> {
  constructor(...args: any[]) {
    super(...args);
  }

  execute(
    context: ProcessContext<any>
  ): ProcessContext<Map<string, any> | null> {
    const email: string = context.get('input.email');
    const user = UserRepository.getInstance().getUserByEmail(email);
    if (!user) throw Error('User not found');
    context.put('user', user);

    return this.next(context, user);
  }
}
