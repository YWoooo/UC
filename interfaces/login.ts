export namespace Login {
  export interface SendData {
    email: string
    password: string
  }
  export interface Res {
    token: string
  }
}