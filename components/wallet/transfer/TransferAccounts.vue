<template>
  <div class="transfer-accounts">
    <the-select 
        class="account"
        :options="accountList"/>
    &rarr;
    <the-select 
        class="account"
        :options="accountList"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { transferStore } from "~/store";
import TheSelect from '@/components/global/the-select/index.vue';

@Component({ components: { TheSelect }})
export default class TransferInfo extends Vue {
  public ccy = "USD";
  public accountList = [
      { label: 'TEST123', value: 'TEST123' },
      { label: 'TEST223', value: 'TEST223' },
      { label: 'TEST323', value: 'TEST323' },
      { label: 'TEST423', value: 'TEST423' },
      { label: 'TEST523', value: 'TEST523' },
      { label: 'TEST623', value: 'TEST623' },
      { label: 'TEST723', value: 'TEST723' },
      { label: 'TEST823', value: 'TEST823' },
  ]
  
  public get fromAccount() {
    return transferStore.fromAccount;
  }
  public get toAccount() {
    return transferStore.toAccount;
  }
  public get amount() {
    return transferStore.amount;
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.transfer-accounts {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.account {
  width: 40%;
  ::v-deep .input-inner {
    display: inline-block;
    text-align: center;
  }
}
</style>
