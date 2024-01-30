import { CheckPassword } from '../steps/CheckPassword';
import { CreateMap } from '../steps/CreateMap';
import { GetUserByEmail } from '../steps/GetUserByEmail';
import { GetUserToken } from '../steps/GetUserToken';
import { GetUsers } from '../steps/GetUsers';
import { ProcessStep } from '../steps/ProcessStep';
import { SaveUser } from '../steps/SaveUser';
import { ValidateMandatoryField } from '../steps/ValidateMandatoryField';
import { ValidateToken } from '../steps/ValidateToken';

export class ServicesCatalog {
  public static saveUserProcess: ProcessStep<string> =
    ServicesCatalog.buildChain(
      new CreateMap('input'),
      new ValidateMandatoryField('input.name'),
      new ValidateMandatoryField('input.email'),
      new ValidateMandatoryField('input.password'),
      new SaveUser()
    );

  public static loginProcess: ProcessStep<string> = ServicesCatalog.buildChain(
    new CreateMap('input'),
    new ValidateMandatoryField('input.email'),
    new ValidateMandatoryField('input.password'),
    new GetUserByEmail(),
    new CheckPassword(),
    new GetUserToken()
  );

  public static getUsersProcess: ProcessStep<Map<string, any>[]> =
    ServicesCatalog.buildChain(new ValidateToken(), new GetUsers());

  private static buildChain(...steps: ProcessStep<any>[]): ProcessStep<any> {
    steps.forEach((step, index, arr): void => {
      step.setNextStep(arr[index + 1]);
    });

    return steps[0];
  }
}
