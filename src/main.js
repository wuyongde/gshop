// 主入口js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import MintUI from "mint-ui"; //引入并使用mint-ui库
import "mint-ui/lib/style.css";
Vue.use(MintUI);

import VueLazyload from "vue-lazyload"; //引入并使用图片懒加载插件
import loadingPic from "./assets/images/loading.gif";
Vue.use(VueLazyload, {
  loading: loadingPic
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
