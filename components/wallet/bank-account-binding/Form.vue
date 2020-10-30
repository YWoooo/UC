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
            v-model="formData.bankName"
            :isRequired="true"
            :errMsg.sync="errMsg.bankName" />
        <the-input
            class="form-input"
            :label="'Branch Name'"
            v-model="formData.branchName"
            :isRequired="true"
            :errMsg.sync="errMsg.branchName" />
        <the-input
            class="form-input"
            :label="'Bank Location'" 
            v-model="formData.bankLocation"
            :isRequired="true"
            :errMsg.sync="errMsg.bankLocation" />
        <the-input
            class="form-input"
            :label="'Currency'" 
            v-model="formData.currency"
            :isReadOnly="true" />
        <the-input
            class="form-input"
            :label="'Account Number'" 
            v-model="formData.accountNumber"
            :isRequired="true"
            :isNumberOnly="true"
            :errMsg.sync="errMsg.accountNumber" />
        <the-input
            class="form-input"
            :label="'Swift Code'" 
            v-model="formData.swiftCode"
            :isRequired="true"
            :isNumberOnly="true"
            :errMsg.sync="errMsg.swiftCode" />
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
    public errMsg = {
        bankName: '',
        branchName: '',
        bankLocation: '',
        accountNumber: '',
        swiftCode: ''
    }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.form {
  margin-top: $normal-spacing;
}
.form-input {
  margin-top: 12px;
}
</style>
