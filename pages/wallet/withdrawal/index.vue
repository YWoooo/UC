<template>
  <div class="withdrawal">
    <div>
      <WithdrawalInfo />
      <WithdrawalAmount @submit="askAuth" />
    </div>
    <WithdrawalSubmit @submit="askAuth" />
    <TheAuth @submitAuth="onSubmitAuth"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// Components.
import TheAuth from "@/components/global/the-auth/index.vue";
import WithdrawalInfo from "@/components/wallet/withdrawal/WithdrawalInfo.vue";
import WithdrawalAmount from "@/components/wallet/withdrawal/WithdrawalAmount.vue";
import WithdrawalSubmit from "@/components/wallet/withdrawal/WithdrawalSubmit.vue";
// Types.
import { Global } from '@/interfaces/Global'
import { Withdrawal, Mode } from '@/interfaces/Withdrawal'
import { VerifyCode } from '@/interfaces/VerifyCode'

@Component({
  components: { TheAuth, WithdrawalInfo, WithdrawalAmount, WithdrawalSubmit },
})
export default class WithdrawalPage extends Vue {
  public get UserInfo() {
    return this.$store.state.UserInfoStore.userInfo
  }
  public get WithdrawalStore() {
    return this.$store.state.WithdrawalStore
  }

  public mounted() {
    this.$store.commit('AccessStore/checkAccess')
  }
  public destroyed () {
    this.$store.commit('WithdrawalStore/reset')
  }

  public askAuth() {
    this.$store.commit('TheAuthStore/askAuth')
  }
  public async onSubmitAuth(verifycode: VerifyCode.EmitData) {
    try {
      this.beforeWithdrawal()
      const sendData = {
        verifycode,
        ...this.setWithdrawalData()
      }
      const res = await this.$api.withdrawal(sendData)
      this.afterWithdrawal(res)
    } catch (e) {
      console.error(e)
    }
  }
  public beforeWithdrawal() {
    if (this.WithdrawalStore.isBtnDisabled) {
      throw new Error('this.WithdrawalStore.isBtnDisabled is false.')
    }
    this.$store.commit('WithdrawalStore/setIsBtnLoading', true)
  }
  public setWithdrawalData() {
    return {
      account: this.UserInfo.account,
      fromAmount: this.WithdrawalStore.amount,
      fromCcy: 'USD',
      toAmount: this.WithdrawalStore.amount,
      toCcy: 'USD',
      rate: 1,
      mode: Mode.Bank
    }
  }
  public afterWithdrawal(res: Global.Res | null) {
    const customErrorName = res?.error?.name
    customErrorName
      ? this.onCustomError(customErrorName)
      : this.onSuccess()
  }
  public onCustomError(errorName: string) {
    let errMsg = ''
    switch(errorName) {
      case ('NotOfficeHourError'):
        errMsg = 'Sorry, but please apply from 9:00 am to 6:00 pm.'
        break
      default:
        break
    }
    this.$message(errMsg, 'error')
  }
  public onSuccess() {
    this.$store.commit('AccessStore/enable', 'wallet-withdrawal-success')
    this.$router.push({
      path: '/wallet/withdrawal/success',
      query: {
        a: this.WithdrawalStore.amount + ''
      }
    })
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
@import "~/assets/styles/mixins/layout-app.scss";
.withdrawal {
  @include layout-app;
}
</style>
