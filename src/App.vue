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
    return {
      show_FooterGuide: true
    };
  },
  components: {
    FooterGuide
  },
  watch: {
    '$route.path'(newValue) {
      switch (newValue) {
        case "/":
          this.show_FooterGuide = true;
          break;
        case "/msite":
          this.show_FooterGuide = true;
          break;
        case "/order":
          this.show_FooterGuide = true;
          break;
        case "/search":
          this.show_FooterGuide = true;
          break;
        case "/profile":
          this.show_FooterGuide = true;
          break;
        default:
          this.show_FooterGuide = false;
      }
    }
  },
  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
</style>
