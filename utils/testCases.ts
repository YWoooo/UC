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
export const testCases: { [key: string]: testCaseInterface[] } = {
    email: [
        isEmptyTest,
        {
            rule: isEmail,
            showMsgWhen: false,
            msg: 'Wrong format.'
        }],
    password: [isEmptyTest,]
}