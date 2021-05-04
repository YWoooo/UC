<template>
  <div class="wrapper">
    <TheInput
      label="From Account"
      v-model="fromAccount"
      :isReadOnly="true"
    /> 
    <TheInput
      label="To Account"
      v-model="toAccount"
      :maxLength="lengthOfAccount"
      :errMsg="toAccountErrMsg"
      @input="onToAccountInput"
    />       
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";

@Component({ components: { TheInput }})
export default class TransferInfo extends Vue {
  public fromAccount = ''
  public toAccount = ''
  public toAccountErrMsg = ''
  public lengthOfAccount = 7

  public created() {
    this.fromAccount = this.$store.state.UserInfoStore.userInfo.account
    this.$store.commit('TransferStore/setFromAccount', this.fromAccount)
    // TODO: why the Transferstore.toAccount will be undefined while we don't commit here in the beginning?
    this.$store.commit('TransferStore/setToAccount', this.toAccount)
  }

  public onToAccountInput() {
    this.testToAccount()
    this.$store.commit('TransferStore/setToAccount', this.toAccount)
  }

  public testToAccount() {
    const reg = /^[A-Z][0-9]{6}$/
    const isToAccountValid = reg.test(this.toAccount)
    
    this.toAccountErrMsg = ''
    if (!this.toAccount) {
      return this.toAccountErrMsg = 'Required'
    }
    this.toAccountErrMsg = isToAccountValid
      ? '' 
      : 'Start with A-Z, and follow by 6 numbers.'
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  margin-top: 40px;
}
</style>
