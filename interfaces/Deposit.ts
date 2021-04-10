export namespace Deposit {
  export interface SendData {
    account: string,
    fromAmount: 1500,
    fromCcy: 'USD',
    toAmount: 1500,
    toCcy: 'USD',
    rate: 1,
    channel: 1
  }
}