<template>
  <the-success-page 
    :successPageConfig="successPageConfig" />
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";
import TheSuccessPage from '@/components/layouts/the-success-page/index.vue';
import formatter from '@/utils/formatter'
// Types.
import { SuccessPageConfig } from '@/interfaces/TheSuccessPage';
import { Route, NavigationGuardNext } from 'vue-router'


@Component({ components: { TheSuccessPage }})
export default class DepositSuccess extends Vue {
  public get UserInfo() {
    return this.$store.state.UserInfoStore.userInfo
  }
  public get successPageConfig(): SuccessPageConfig {
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
  public get toAmountText() {
    const toAmount = this.$route.query?.a
    return toAmount ? formatter.number(+toAmount) : ''
  }

  public mounted() {
    this.$store.commit('AccessStore/checkAccess')
  }
  public beforeRouteLeave(to: Route, from: Route, next: NavigationGuardNext) {
    this.$store.commit('AccessStore/disable', 'wallet-deposit-success')
    this.inituserInfo()
    next()
  }

  public inituserInfo() {
    try {
      this.$store.dispatch('UserInfoStore/init')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
