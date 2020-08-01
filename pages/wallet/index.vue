<template>
  <div class>
    This is a wallet
    <WalletCard />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import WalletCard from "@/components/wallet/WalletCard.vue";
@Component({
  components: { WalletCard },
})
export default class WalletOverview extends Vue {}
</script>
<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
</style>
