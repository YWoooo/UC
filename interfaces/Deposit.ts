export namespace Deposit {
  export interface SendData {
    account: string;
    fromAmount: number;
    fromCcy: Deposit.Currency;
    toAmount: number;
    toCcy: Deposit.Currency;
    rate: number;
    channel: Channel;
  }
  export type Currency = 'USD'
}

export enum Channel {
  Bank = 1,
  USDT = 2
}
