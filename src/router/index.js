import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Msite from "../pages/Msite/Msite";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Shop from "../pages/Shop/Shop";
import ShopFoods from "../pages/Shop/ShopFoods/ShopFoods";
import ShopRates from "../pages/Shop/ShopRates/ShopRates";
import ShopInfos from "../pages/Shop/ShopInfos/ShopInfos";

export default new VueRouter({
  routes: [
    { path: "/msite", component: Msite },
    { path: "/search", component: Search },
    { path: "/order", component: Order },
    { path: "/profile", component: Profile },
    { path: "/", redirect: "/msite" },
    { path: "/Login", component: Login },
    {
      path: "/Shop",
      component: Shop,
      children: [
        { path: "ShopFoods", component: ShopFoods },
        { path: "ShopRates", component: ShopRates },
        { path: "ShopInfos", component: ShopInfos },
        { path: "", redirect: "ShopFoods" }
      ]
    }
  ]
});
