<template>
    <div class="bank-account-binding">
        <Title />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// Components.
import Title from '@/components/wallet/bank-account-binding/Title.vue';
import Form from '@/components/wallet/bank-account-binding/Form.vue';
import UploadCard from '@/components/wallet/bank-account-binding/Upload-card.vue';
import Submit from '@/components/wallet/bank-account-binding/Submit.vue';

@Component({ components: { Title, Form, UploadCard, Submit } })
export default class BankAccountBinding extends Vue {

}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
@import "~/assets/styles/mixins/layout-app.scss";
.bank-account-binding {
  @include layout-app;
}
</style>
