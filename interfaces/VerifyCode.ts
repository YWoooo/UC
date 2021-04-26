export namespace VerifyCode {
  export interface Params {
    receiver: string;
    receiverType: ReceiverType;
  }
  export interface EmitData { // TODO: better naming?
    receiver: string;
    receiverType: ReceiverType;
    verifycode: string;
  }
  export type ReceiverType = 'email' | 'phone'
}