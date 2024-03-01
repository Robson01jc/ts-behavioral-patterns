import { HeadPhone } from '../HeadPhone';

export interface HeadPhoneState {
  click(headPhone: HeadPhone): void;
  longClick(headPhone: HeadPhone): void;
}
