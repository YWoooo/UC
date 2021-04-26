<template>
  <the-success-page 
    :successPageConfig="successPageConfig" />
</template>

<script lang='ts'>
import { Component } from "nuxt-property-decorator";
import PaySuccess from '../PaySuccess'

@Component
export default class DepositSuccess extends PaySuccess {
  public get successPageConfig() {
    return {
      mdiIcon: 'credit-card-check-outline',
      title: 'Deposit success.',
      subtitle1: `You\'ve deposited ${this.toAmountText} USD `,
      subtitle2: `to your account ${this.UserInfo.account}`,
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
