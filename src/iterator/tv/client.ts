import { TV } from './TV';

export const tvApp = {
  main(): void {
    const tv: TV = new TV();
    for (const channel of tv) {
      console.log(`Zapping at channel #${channel}`);
    }
  },
};
