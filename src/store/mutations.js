import Vue from 'vue'

import {
  GET_ADDRESS,
  GET_FOODS_CATALOGS,
  GET_NEARBY_SHOPS,
  SET_USER_INFO,
  GET_SHOP_INFO,
  GET_SHOP_GOODS,
  GET_SHOP_RATINGS,
  UPDATE_SELECT_COUNT,
  CLEAR_SHOP_CAR
} from "./mutations-types";

export default {
  [GET_ADDRESS](state, { address }) {
    state.posi_address = address;
  },
  [GET_FOODS_CATALOGS](state, { data }) {
    state.foods_catalogs = data;
  },
  [GET_NEARBY_SHOPS](state, { data }) {
    state.nearby_shops = data;
  },
  [SET_USER_INFO](state, { user_info }) {
    state.user_info = user_info;
  },

  [GET_SHOP_INFO](state, info) {
    state.curr_shop_info = info;
  },
  [GET_SHOP_GOODS](state, goods) {
    state.curr_shop_goods = goods;

  },
  [GET_SHOP_RATINGS](state, ratings) {
    state.curr_shop_ratings = ratings;
  },

  [UPDATE_SELECT_COUNT](state, { food, isAdd }) {

    if (!food.selectCount) {
      switch (isAdd) {
        case true:
          // food.selectCount = 1;
          Vue.set(food,'selectCount',1)     //如果不通过这种方式添加后来添加的属性，在其绑定的dom视图中不会更新显示！！！
          state.shopCar.push(food)
          break;
        case false:
          return;
      }
    } else {
      if (isAdd) {
        food.selectCount++;
      } else {
        food.selectCount--;
        if(food.selectCount===0){
          const index=state.shopCar.findIndex(item=>{
            return item.selectCount===0
          })
          state.shopCar.splice(index,1)
        }
      }
    }
  },

  [CLEAR_SHOP_CAR](state){
         // 清空购物车信息
         state.shopCar.forEach(item=>{
           item.selectCount=0
         })
        state.shopCar=[]
  }
};
