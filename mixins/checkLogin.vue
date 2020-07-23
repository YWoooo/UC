<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import cookie from "cookiejs";

@Component
export default class CheckLogin extends Vue {
  public checkLogin() {
    if (process.client) {
      const isLogin = cookie().sessionId;
      isLogin ? console.log("isLogin") : console.log("isNotLogin");
    }

    // this.$router.push("/login");
  }
}
</script>
