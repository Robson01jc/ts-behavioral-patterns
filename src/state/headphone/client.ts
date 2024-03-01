import { HeadPhone } from './HeadPhone';

export const headPhoneApp = {
  main(): void {
    const phone = new HeadPhone();
    phone.onClick();
    phone.onLongClick();
    phone.onClick();
    phone.onClick();
    phone.onClick();
    phone.onLongClick();
    phone.onClick();
  },
};
