<template>
  <the-success-page 
    :successPageConfig="successPageConfig" />
</template>

<script lang='ts'>
import { Component } from "nuxt-property-decorator";
import PaySuccess from '../PaySuccess'

@Component
export default class WithdrawalSuccess extends PaySuccess {
  public get successPageConfig() {
    return {
      mdiIcon: 'cash-check',
      title: 'Withdrawal success',
      subtitle1: 'You\'ve withdrawaled ',
      subtitle2: `${this.toAmountText} USD form your wallet.`,
      btnPri: {
        text: 'To Wallet',
        onClick: () => this.$router.push('/wallet') 
      },
      btnSub: {
        text: 'To Home',
        onClick: () => this.$router.push('/') 
      }  
    }
  }
}
</script>
