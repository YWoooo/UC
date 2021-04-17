export type MsgType = 'success' | 'info' | 'warning' | 'error'

export interface Msg {
    type?: MsgType;
    duration?: number;
    content: string;
}
