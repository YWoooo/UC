<template>
  <div class="transfer">
    <div>
      <TransferInfo />
      <TransferAccounts />
      <TransferAmount @submit="submit" />        
    </div>
    <TransferSubmit @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// Components.
import TransferInfo from "@/components/wallet/transfer/TransferInfo.vue";
import TransferAccounts from "@/components/wallet/transfer/TransferAccounts.vue";
import TransferAmount from "@/components/wallet/transfer/TransferAmount.vue";
import TransferSubmit from "@/components/wallet/transfer/TransferSubmit.vue";
// Types.
import { Transfer } from '@/interfaces/Transfer'

@Component({ components: { TransferInfo, TransferAccounts, TransferAmount, TransferSubmit } })
export default class TransferPage extends Vue {
  public get UserInfo() {
    return this.$store.state.UserInfoStore.userInfo
  }
  public get TransferStore() {
    return this.$store.state.TransferStore
  }

  public mounted() {
    this.$store.commit('AccessStore/checkAccess')
  }
  public destroyed () {
    this.$store.commit('TransferStore/reset')
  }

  public async submit() {
    try {
      this.beforeSubmit()
      const sendData = this.setSendData()
      const res = await this.$api.transfer(sendData)
      if (res.error) {
        this.handleCustomError(res?.error?.name);
      }
      this.afterSubmit()
    } catch(e) {
      console.error(e)
    } finally {
      this.$store.commit('TransferStore/setIsBtnLoading', false)
    }
  }
  public beforeSubmit() {
    if (this.TransferStore.isBtnDisabled) {
      throw new Error('this.TransferStore.isBtnDisabled is false.')
    }
    this.$store.commit('TransferStore/setIsBtnLoading', true)
  }
  public setSendData(): Transfer.SendData {
    return {
      fromAccount: this.TransferStore.fromAccount,
      toAccount: this.TransferStore.toAccount,
      amount: this.TransferStore.amount,
      ccy: 'USD'
    }
  }
  public handleCustomError(errorName: string) {
    let errMsg = ''
    switch(errorName) {
      case ('ToAccountNotExistError'):
        errMsg = 'Sorry, but the to Account doesn\'t exist. Please choose another account.'
        break
      default:
        break
    }
    this.$message(errMsg, 'error')
    throw new Error(errorName)
  }
  public afterSubmit() {
    this.$store.commit('AccessStore/enable', 'wallet-transfer-success')
    const { amount, fromAccount, toAccount } = this.TransferStore
    this.$router.push({
      path: '/wallet/transfer/success',
      query: {
        a: amount + '',
        f: fromAccount,
        t: toAccount,
      }
    })
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
@import "~/assets/styles/mixins/layout-app.scss";
.transfer {
  @include layout-app;
}
</style>
