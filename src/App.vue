<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="show_FooterGuide"></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    FooterGuide
  },
  computed: {
    show_FooterGuide() {
      switch (this.$route.path) {
        case "/":
          return true;
          break;
        case "/msite":
          return true;
          break;
        case "/order":
          return true;
          break;
        case "/search":
          return true;
          break;
        case "/profile":
          return true;
          break;
        default:
          return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
