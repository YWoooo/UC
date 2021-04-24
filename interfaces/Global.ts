export namespace Global {
  export interface Res {
    message: string
    data?: any
    error?: Error
  }
  export interface Error {
    name: string;
    status: number;
    message?: string
    isPublic?: boolean
  }
}

