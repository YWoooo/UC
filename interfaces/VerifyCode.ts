export namespace VerifyCode {
  export interface Params {
    receiver: string;
    receiverType: ReceiverType;
  }
  export type ReceiverType = 'email' | 'phone'
}