import { UserRepository } from '../repository/UserRepository';
import { ProcessContext } from '../service/ProcessContext';
import { ProcessStep } from './ProcessStep';

export class SaveUser extends ProcessStep<string> {
  constructor(...args: any[]) {
    super(...args);
  }

  execute(context: ProcessContext<any>): ProcessContext<string> {
    const userInput: Map<string, any> = context.get('input');
    UserRepository.getInstance().saveUser(userInput);

    return this.next(context, `User '${userInput.get('name')}' saved!`);
  }
}
