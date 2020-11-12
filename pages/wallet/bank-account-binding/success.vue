<template>
    <the-success-page 
        :successPageConfig="successPageConfig"/>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";
import TheSuccessPage from '@/components/layouts/the-success-page/index.vue';
import { SuccessPageConfig } from '@/interfaces/TheSuccessPage';

@Component({ components: { TheSuccessPage }})
export default class WithdrawalSuccess extends Vue {
    public successPageConfig: SuccessPageConfig =  {
        mdiIcon: 'card-account-details-star-outline',
        title: 'Binding Submitted',
        subtitle1: 'We \'ve received your' ,
        subtitle2: 'application of bank account binding.',
        btnPri: {
            text: 'To Wallet',
            url: '/wallet'
        },
        btnSub: {
            text: 'To Home',
            url: '/'
        }
    }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";

</style>
