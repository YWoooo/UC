<template>
  <div class="deposit">
    <div>
      <DepositInfo />
      <DepositAmount @submit="submit" />
    </div>
    <DepositSubmit @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// Components.
import DepositInfo from "@/components/wallet/deposit/DepositInfo.vue";
import DepositAmount from "@/components/wallet/deposit/DepositAmount.vue";
import DepositSubmit from "@/components/wallet/deposit/DepositSubmit.vue";
// Types.
import { Deposit, Channel } from '@/interfaces/Deposit'

@Component({ components: { DepositInfo, DepositAmount, DepositSubmit } })
export default class DepositPage extends Vue {
  public get UserInfo() {
    return this.$store.state.UserInfoStore.userInfo
  }
  public get DepositStore() {
    return this.$store.state.DepositStore
  }

  public mounted() {
    this.$store.commit('AccessStore/checkAccess')
  }
  public destroyed () {
    this.$store.commit('DepositStore/reset')
  }
  
  public async submit() {
    try {
      this.beforeSubmit()
      const sendData = this.setSendData()
      await this.$api.deposit(sendData)
      this.afterSubmit()
    } catch (e) {
      console.error(e)
    }
  }
  public beforeSubmit() {
    if (this.DepositStore.isBtnDisabled) {
      throw new Error('this.DepositStore.isBtnDisabled is false.')
    }
    this.$store.commit('DepositStore/setIsBtnLoading', true)
  }
  public setSendData(): Deposit.SendData {
    return {
      account: this.UserInfo.account,
      fromAmount: this.DepositStore.amount,
      fromCcy: 'USD',
      toAmount: this.DepositStore.amount,
      toCcy: 'USD',
      rate: 1,
      channel: Channel.Bank
    }
  }
  public afterSubmit() {
    this.$store.commit('AccessStore/enable', 'wallet-deposit-success')
    this.$router.push({
      path: '/wallet/deposit/success',
      query: {
        a: this.DepositStore.amount + ''
      }
    })
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
@import "~/assets/styles/mixins/layout-app.scss";
.deposit {
  @include layout-app;
}
</style>
