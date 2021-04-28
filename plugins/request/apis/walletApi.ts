import { Deposit } from '@/interfaces/Deposit'
import { Withdrawal } from '@/interfaces/Withdrawal'
import { Transfer } from '@/interfaces/Transfer'

export default function walletApi(axios: any) {
  return {
    async deposit(sendData: Deposit.SendData) {
      return await axios.$post('/deposit', sendData)
    },
    async withdrawal(sendData: Withdrawal.SendData) {
      return await axios.$post('/withdrawal', sendData)
    },
    async transfer(sendData: Transfer.SendData) {
      return await axios.$post('/transfer', sendData)
    },
  }
}