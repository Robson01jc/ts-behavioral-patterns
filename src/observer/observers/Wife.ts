import { Observer } from './Observer';

export class Wife implements Observer<boolean> {
  partyTime(): void {
    console.log('Let´s Party! :D');
  }

  update(status: boolean): void {
    if (status) {
      this.partyTime();
    } else {
      console.log('Hold!');
    }
  }
}
