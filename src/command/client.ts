import { Alexa } from './alexa/Alexa';
import { TurnLightOffCommand } from './commands/TurnLightOffCommand';
import { TurnLightOnCommand } from './commands/TurnLightOnCommand';
import { Light } from './lights/Light';
import { PhillipsHueLight } from './lights/PhillipsHueLight';
import { XiaomiLight } from './lights/XiaomiLight';

function configureAlexa(alexa: Alexa): void {
  const livingRoom: Light = new PhillipsHueLight();
  const kitchen: Light = new XiaomiLight();

  alexa.addIntegration(
    'Turn on the Living room light',
    new TurnLightOnCommand(livingRoom),
    'on',
    'Living room',
    'light'
  );
  alexa.addIntegration(
    'Turn off the Living room light',
    new TurnLightOffCommand(livingRoom),
    'off',
    'Living room',
    'light'
  );
  alexa.addIntegration(
    'Turn on the Kitchen light',
    new TurnLightOnCommand(kitchen),
    'on',
    'Kitchen',
    'light'
  );
  alexa.addIntegration(
    'Turn off the Kitchen light',
    new TurnLightOffCommand(kitchen),
    'off',
    'Kitchen',
    'light'
  );
}

export const commandApp = {
  main(): void {
    const alexa: Alexa = new Alexa();
    configureAlexa(alexa);

    alexa.sendRequest('Turn on the Living room light');
    alexa.sendRequest('Turn off the Kitchen light');

    alexa.sendRequest('Please, could you Turn off the Living room light?');
  },
};
