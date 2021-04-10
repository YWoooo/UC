import { Deposit } from '@/interfaces/Deposit'

export default function walletApi(axios: any) {
  return {
    async deposit(sendData: Deposit.SendData) {
      return await axios.$post('/deposit', sendData)
    },
  }
}