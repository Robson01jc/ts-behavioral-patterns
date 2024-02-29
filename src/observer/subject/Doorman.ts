import { Subject } from './Subject';

export class Doorman extends Subject<boolean> {
  private _status: boolean = false;

  public get status(): boolean {
    return this._status;
  }

  public set status(newStatus: boolean) {
    if (newStatus !== this.status) {
      this._status = newStatus;
      this.notifyObservers(newStatus);
    }
  }
}
