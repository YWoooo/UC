<template>
  <div class="transfer-info">
    <div class="amount" v-if="amount<=0">-</div>
    <div class="amount" v-else>$ {{amount.toLocaleString()}}</div>
    <div :class="['subtitle', { visible: toAccount }]">
      {{ fromAccount }} &rarr; {{ toAccount }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class TransferInfo extends Vue {
  public get TransferStore() {
    return this.$store.state.TransferStore
  }

  public get fromAccount() {
    return this.TransferStore.fromAccount;
  }
  public get toAccount() {
    return this.TransferStore.toAccount;
  }
  public get amount() {
    return this.TransferStore.amount;
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.transfer-info {
  margin-top: 30%;
  text-align: center;
}
.amount {
  font-size: 48px;
}
.subtitle {
  font-size: 12px;
  margin-top: 20px;
  opacity: 0;
}
.visible {
  opacity: 1;
}
</style>
