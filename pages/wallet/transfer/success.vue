<template>
    <the-success-page 
        :successPageConfig="successPageConfig"/>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";
import TheSuccessPage from '@/components/layouts/the-success-page/index.vue';
import { SuccessPageConfig } from '@/interfaces/TheSuccessPage';

@Component({ components: { TheSuccessPage }})
export default class TransferSuccess extends Vue {
    public successPageConfig: SuccessPageConfig =  {
        mdiIcon: 'transfer',
        title: 'Transfer success',
        subtitle1: 'You\'ve withdrawaled 6000 USD ',
        subtitle2: 'form ****** to ******',
        btnPri: {
            text: 'To Wallet',
            onClick: () => this.$router.push('/wallet') 
        },
        btnSub: {
            text: 'To Home',
            onClick: () => this.$router.push('/') 
        }
    }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";

</style>
