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
import { transferStore } from "~/store";
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
      await this.$api.transfer(sendData)
    } catch(e) {
      console.error(e)
    }

    this.$message(`Transfer ${transferStore.amount} success.`, 'success');
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
  public afterSubmit() {
    this.$store.commit('AccessStore/enable', 'wallet-transfer-success')
    this.$router.push({
      path: '/wallet/transfer/success',
      query: {
        a: this.TransferStore.amount + ''
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
