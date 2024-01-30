import { UserRepository } from '../repository/UserRepository';
import { ProcessContext } from '../service/ProcessContext';
import { ProcessStep } from './ProcessStep';

export class GetUsers extends ProcessStep<Map<string, any>[]> {
  constructor(...args: any[]) {
    super(...args);
  }

  execute(context: ProcessContext<any>): ProcessContext<Map<string, any>[]> {
    const users: Map<string, any>[] = UserRepository.getInstance().getUsers();
    context.put('users', users);

    return this.next(context, users);
  }
}
