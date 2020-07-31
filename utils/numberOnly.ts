/**
 * Even with v-model.number, user still can enter some string like 'e' or '+'.
 * So we can use this function to remove all other value but 0-9.
 */
export function numberOnly(text: string): string {
    const reg = /(\D|^0*0$)/g
    return text.replace(reg, '')
}