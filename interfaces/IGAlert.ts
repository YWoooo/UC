export type TheAlertType = 'success' | 'info' | 'warning' | 'error'

export default interface IGAlert {
    type: TheAlertType
    msg: string
}
