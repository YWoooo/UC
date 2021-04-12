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
import { depositStore } from "~/store";
// Components.
import DepositInfo from "@/components/wallet/deposit/DepositInfo.vue";
import DepositAmount from "@/components/wallet/deposit/DepositAmount.vue";
import DepositSubmit from "@/components/wallet/deposit/DepositSubmit.vue";
// Types.
import { Deposit } from '@/interfaces/Deposit'

@Component({ components: { DepositInfo, DepositAmount, DepositSubmit } })
export default class DepositPage extends Vue {
  public get UserInfo() {
    return this.$store.state.UserInfoStore.userInfo
  }
  public get DepositStore() {
    return this.$store.state.DepositStore
  }

  public destroyed () {
    this.$store.commit('DepositStore/reset')
  }
  
  public async submit() {
    if (this.DepositStore.isBtnDisabled) {
      return;
    }
    try {
      this.$store.commit('DepositStore/setIsBtnLoading', true)
      const sendData = this.setSendData()
      await this.$api.deposit(sendData)
      this.$router.push({
        path: '/wallet/deposit/success',
        query: {
          a: sendData.toAmount + ''
        }
      })
    } catch (e) {
      console.error(e)
    }
  }
  public setSendData(): Deposit.SendData {
    return {
      account: this.UserInfo.account, // TODO: accounat return UserNotFoundError instead of MissingParamsError?
      fromAmount: this.DepositStore.amount,
      fromCcy: 'USD',
      toAmount: this.DepositStore.amount,
      toCcy: 'USD',
      rate: 1,
      channel: 1
    }
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
