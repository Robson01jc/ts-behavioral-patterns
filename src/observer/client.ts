import { Friend } from './observers/Friend';
import { Wife } from './observers/Wife';
import { Doorman } from './subject/Doorman';

export const observerApp = {
  main(): void {
    const doorman = new Doorman();
    doorman.add(new Wife());
    doorman.add(new Friend());

    console.log('Husband is comming');
    doorman.status = true;
  },
};
