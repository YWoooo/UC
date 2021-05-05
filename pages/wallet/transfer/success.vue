<template>
  <the-success-page 
    :successPageConfig="successPageConfig" />
</template>

<script lang='ts'>
import { Component } from "nuxt-property-decorator";
import PaySuccess from '../PaySuccess'

@Component
export default class TransferSuccess extends PaySuccess {
  public get successPageConfig() {
    return {
      mdiIcon: 'transfer',
      title: 'Transfer success.',
      subtitle1: `You\'ve transfer ${this.toAmountText} USD `,
      subtitle2: `from ${this.fromAccount} to ${this.toAccount}`,
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
  public get fromAccount() {
    return this.$route.query.f || ''
  }
  public get toAccount() {
    return this.$route.query.t || ''
  }
}
</script>
