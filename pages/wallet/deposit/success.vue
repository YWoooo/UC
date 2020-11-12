<template>
    <the-success-page 
        :successPageConfig="successPageConfig"/>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";
import TheSuccessPage from '@/components/layouts/the-success-page/index.vue';
import { SuccessPageConfig } from '@/interfaces/TheSuccessPage';

@Component({ components: { TheSuccessPage }})
export default class DepositSuccess extends Vue {
    public successPageConfig: SuccessPageConfig =  {
        mdiIcon: 'credit-card-check-outline',
        title: 'Deposit success',
        subtitle1: 'You\'ve deposited 6000 USD ',
        subtitle2: 'form your bank card **** **** **** 1234.',
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
