import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';

export interface testCaseInterface {
    rule: ((str: string) => boolean),
    showMsgWhen: boolean,
    msg: string
}
const isEmptyTest: testCaseInterface = {
    rule: isEmpty,
    showMsgWhen: true,
    msg: 'Required.'
}
const isPassword = (password: string) => {
    // at least one lowercase, one uppercase, one number, 6-15
    const rule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*^.{6,15}$)/
    return rule.test(password)
}
export const testCases: { [key: string]: testCaseInterface[] } = {
    email: [
        isEmptyTest,
        {
            rule: isEmail,
            showMsgWhen: false,
            msg: 'Wrong format.'
        }],
    password: [
        isEmptyTest,
        {
            rule: isPassword,
            showMsgWhen: false,
            msg: '6-15 digit, with uppercase, lowercase, and number.'
        }]
}
