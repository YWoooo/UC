import { Component, Vue } from "nuxt-property-decorator";
import TheSuccessPage from '@/components/layouts/the-success-page/index.vue';
import formatter from '@/utils/formatter'
import { Route, NavigationGuardNext } from 'vue-router'

@Component({ components: { TheSuccessPage } })
export default class PaySuccess extends Vue {
  public get UserInfo() {
    return this.$store.state.UserInfoStore.userInfo
  }
  public get toAmountText() {
    const toAmount = this.$route.query?.a
    return toAmount ? formatter.number(+toAmount) : ''
  }

  public mounted() {
    this.$store.commit('AccessStore/checkAccess')
  }
  public beforeRouteLeave(to: Route, from: Route, next: NavigationGuardNext) {
    this.$store.commit('AccessStore/disable', this.$route.name)
    this.inituserInfo()
    next()
  }

  public inituserInfo() {
    try {
      this.$store.dispatch('UserInfoStore/init')
    } catch (e) {
      console.error(e)
    }
  }
}