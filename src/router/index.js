import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 实现主要路由组件懒加载
const Msite = () => import("../pages/Msite/Msite");
const Search = () => import("../pages/Search/Search");
const Order = () => import("../pages/Order/Order");
const Profile = () => import("../pages/Profile/Profile");
const Login = () => import("../pages/Login/Login");
const Shop = () => import("../pages/Shop/Shop");

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
