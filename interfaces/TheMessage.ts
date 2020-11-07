export type MsgType = 'success' | 'info' | 'warning' | 'error'

export interface MessageOptions {
    msgType: MsgType
    msg: string
}
