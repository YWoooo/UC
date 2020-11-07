<template>
    <div class="bank-account-binding">
        <Description />
        <Form />
        <UploadCard />
        <Submit />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// Components.
import Description from '@/components/wallet/bank-account-binding/Description.vue';
import Form from '@/components/wallet/bank-account-binding/Form.vue';
import UploadCard from '@/components/wallet/bank-account-binding/Upload-card.vue';
import Submit from '@/components/wallet/bank-account-binding/Submit.vue';

@Component({ components: { Description, Form, UploadCard, Submit } })
export default class BankAccountBinding extends Vue {}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
@import "~/assets/styles/mixins/layout-app.scss";
.bank-account-binding {
  @include layout-app;
}
</style>
