import { VerifyCode } from './VerifyCode'

export namespace Withdrawal {
  export interface SendData {
    account: string;
    fromAmount: number;
    fromCcy: Withdrawal.Currency;
    toAmount: number;
    toCcy: Withdrawal.Currency;
    rate: number;
    mode: Mode;
    verifycode: VerifyCode.EmitData
  }
  export type Currency = 'USD'
}

export enum Mode {
  Bank = 1,
  USDT = 2
}