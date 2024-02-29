import { Observer } from './Observer';

export class Friend implements Observer<boolean> {
  sendGift(): void {
    console.log('Look, I bought your favorite beer!');
  }

  update(status: boolean): void {
    if (status) {
      this.sendGift();
    } else {
      console.log('Sleep...');
    }
  }
}
