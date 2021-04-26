import { Deposit } from '@/interfaces/Deposit'
import { Withdrawal } from '@/interfaces/Withdrawal'

export default function walletApi(axios: any) {
  return {
    async deposit(sendData: Deposit.SendData) {
      return await axios.$post('/deposit', sendData)
    },
    async withdrawal(sendData: Withdrawal.SendData) {
      return await axios.$post('/withdrawal', sendData)
    },
  }
}