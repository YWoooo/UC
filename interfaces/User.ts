import { KycStatus } from './KycStatus'
import { BankCardStatus } from './BankCardStatus'

export namespace User {
  export interface Info {
    // Basic infos.
    email: string;
    password: string;
    account: string;

    // About kyc.
    name: string;
    phone: string;
    phoneAreaCode: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    kycStatus: KycStatus;
    bankCardStatus: BankCardStatus;
    isVerified: boolean;

    // About wallet.
    balance: 0;
  }
}
