export namespace Transfer {
  export interface SendData {
    fromAccount: string,
    toAccount: string,
    amount: number,
    ccy: Currency
  }
  export type Currency = 'USD'
}
