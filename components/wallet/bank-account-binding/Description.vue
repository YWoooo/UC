<template>
    <div class="subtitle">
        Due to regulations, we do not accept deposit and withdrawal from the third party account.
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class BankAccountBindingDescription extends Vue {}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.subtitle {
  font-size: $font-size-small;
}
</style>
