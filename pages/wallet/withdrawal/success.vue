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
        mdiIcon: 'cash-check',
        title: 'Withdrawal success',
        subtitle1: 'You\'ve withdrawaled ',
        subtitle2: '6000 USD form your wallet.',
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
