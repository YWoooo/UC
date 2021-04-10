<template>
  <the-success-page 
    :successPageConfig="successPageConfig" />
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";
import TheSuccessPage from '@/components/layouts/the-success-page/index.vue';
import { SuccessPageConfig } from '@/interfaces/TheSuccessPage';

@Component({ components: { TheSuccessPage }})
export default class DepositSuccess extends Vue {
  public get UserInfo() {
    return this.$store.state.UserInfoStore.userInfo
  }
  public get successPageConfig(): SuccessPageConfig {
    return {
      mdiIcon: 'credit-card-check-outline',
      title: 'Deposit success.',
      subtitle1: `You\'ve deposited ${this.toAmount} USD `,
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
  public get toAmount() {
    return this.$route.query?.a || ''
  }

  public beforeDestroy() {
    try {
      this.$store.dispatch('UserInfoStore/init')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
