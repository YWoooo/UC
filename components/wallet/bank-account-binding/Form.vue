<template>
    <div class="form">
        <the-input
            class="form-input"
            :label="'Account Name'"
            v-model="formData.accountName"
            :isReadOnly="true" />
        <the-input
            class="form-input"
            :label="'Bank Name'"
            v-model="formData.bankName" />
        <the-input
            class="form-input"
            :label="'Branch Name'"
            v-model="formData.branchName" />
        <the-input
            class="form-input"
            :label="'Bank Location'" 
            v-model="formData.bankLocation" />
        <the-input
            class="form-input"
            :label="'Currency'" 
            v-model="formData.currency"
            :isReadOnly="true" />
        <the-input
            class="form-input"
            :label="'Account Number'" 
            v-model="formData.accountNumber"
            :isNumberOnly="true" />
        <the-input
            class="form-input"
            :label="'Swift Code'" 
            v-model="formData.swiftCode"
            :isNumberOnly="true" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";

@Component({ components: { TheInput }})
export default class BankAccountBindingForm extends Vue {
    public formData = {
        accountName: 'Yu-Wei Chang',
        bankName: '',
        branchName: '',
        bankLocation: '',
        currency: 'USD',
        accountNumber: '',
        swiftCode: ''
    }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.form {
  margin-top: $normal-spacing;
  padding: 0 $normal-spacing;
}
.form-input {
  margin-top: 12px;
}
</style>
