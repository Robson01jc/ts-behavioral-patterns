import { Command } from '../commands/Command';
import { AlexaAI } from './AlexaAI';

export class Alexa {
  constructor(
    private integrations: Map<string, Command> = new Map<string, Command>(),
    private ai: AlexaAI = new AlexaAI(),
    private verbose: boolean = false
  ) {}

  addIntegration(key: string, command: Command, ...keywords: string[]): void {
    this.integrations.set(key, command);
    this.ai.addAssociation(key, keywords);
  }

  sendRequest(request: string): void {
    let command = this.integrations.get(request);
    if (!command) {
      const key = this.ai.getKeyFromAssociations(request);
      if (key) command = this.integrations.get(key);
    }
    if (!command) {
      console.log("Sorry, I can't perform your request!");
      return;
    }

    if (this.verbose)
      console.log('Send a generic command as you saved in my configurations');
    command.execute();
  }
}
