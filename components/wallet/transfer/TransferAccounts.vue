<template>
  <div class="transfer-accounts">
    <the-select 
      class="account"
      v-model="fromAccount"
      :options="fromAccountList"
      :msg="fromAccountMsg"
      @change="onFromAccountChange" />
    &rarr;
    <the-select
      class="account"
      v-model="toAccount"
      :options="toAccountList"
      :msg="toAccountMsg"
      @change="onToAccountChange" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { transferStore } from "~/store";
import TheSelect from '@/components/global/the-select/index.vue';

@Component({ components: { TheSelect }})
export default class TransferInfo extends Vue {
  public ccy = "USD";
  public fromAccountMsg = ''
  public toAccountMsg = ''
  public accountList = [
    { label: 'TEST123 (USD)', value: 'TEST123', balance: 123 },
    { label: 'TEST223 (USD)', value: 'TEST223', balance: 1234 },
    { label: 'TEST323 (USD)', value: 'TEST323', balance: 12345 },
    { label: 'TEST423 (USD)', value: 'TEST423', balance: 123456 },
    { label: 'TEST523 (USD)', value: 'TEST523', balance: 123 },
    { label: 'TEST623 (USD)', value: 'TEST623', balance: 12 },
    { label: 'TEST723 (USD)', value: 'TEST723', balance: 12 },
    { label: 'TEST823 (USD)', value: 'TEST823', balance: 123 },
  ]
  
  public get fromAccount() {
    return transferStore.fromAccount;
  }
  public set fromAccount(account: string) {
    transferStore.setFromAccount(account)
  }

  public get toAccount() {
    return transferStore.toAccount;
  }
  public set toAccount(account: string) {
    transferStore.setToAccount(account)
  }

  public get fromAccountList() {
    return this.accountList.filter((e) => e.value !== this.toAccount)
  }
  public get toAccountList() {
    return this.accountList.filter((e) => e.value !== this.fromAccount)
  }

  public onFromAccountChange(account: string) {
    const fromAccount = this.accountList.find((e) => e.value === account)
    this.fromAccountMsg = `Balance: ${fromAccount?.balance.toLocaleString()}`
  }
  public onToAccountChange(account: string) {
    const toAccount = this.accountList.find((e) => e.value === account)
    this.toAccountMsg = `Balance: ${toAccount?.balance.toLocaleString()}`
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.transfer-accounts {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
.account {
  width: 45%;
}
</style>
