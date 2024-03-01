import readline from 'readline';
import { GameEventListener } from './GameEventListener';

class Reader {
  private _reader: readline.Interface;

  constructor() {
    this._reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  nextLine(question: string = ''): Promise<string> {
    return new Promise((resolve) => {
      this._reader.question(question, (answer: string) => resolve(answer));
    });
  }
}

export class Game {
  private exit: boolean = false;
  private listeners: GameEventListener[] = [];

  addListener(listener: GameEventListener): void {
    this.listeners.push(listener);
  }

  async startLoop(): Promise<void> {
    const reader = new Reader();
    console.log("Hi! I'm a good ghost. Help me to catch that bad PacMan...");
    while (!this.exit) {
      console.log(
        'Choose what will happen next...\n1: Spot the PacMan\n' +
          '2: Lose the PacMan\n3: PacMan turns special\n4: PacMan is regular again\n' +
          '5: Eaten by PacMan\n6: Reach the base\n0: Exit'
      );
      const option = await reader.nextLine();
      console.log('\n\n');
      this.listeners.forEach((listener) => listener(option));
      console.log('\n\n');
    }
    console.log("Ok! Let's play again later?");
  }

  stopLoop(): void {
    this.exit = true;
  }
}
