// 引入ajax接口请求模块
import {
  req_address,
  req_foods_catalogs,
  req_nearby_shops,
  req_shop_info,
  req_shop_goods,
  req_shop_ratings,
  req_search_shops
} from "../api/index";

import {
  GET_ADDRESS,
  GET_FOODS_CATALOGS,
  GET_NEARBY_SHOPS,
  SET_USER_INFO,
  GET_SHOP_INFO,
  GET_SHOP_GOODS,
  GET_SHOP_RATINGS,
  UPDATE_SELECT_COUNT,
  CLEAR_SHOP_CAR,
  GET_SEARCH_SHOPS
} from "./mutations-types";

// 异步请求必须写在actions中
export default {
  // 获取定位
  [GET_ADDRESS]({ commit, state }) {
    // 处理经纬度字符串
    let geohash = `${state.latitude},${state.longitude}`;
    // 发ajax
    req_address(geohash, (err, address) => {
      if (err) {
        return;
      } else {
        commit(GET_ADDRESS, { address });
      }
    });
  },
  // 获取食品分类
  [GET_FOODS_CATALOGS]({ commit, state }, callback) {
    // 发ajax请求
    req_foods_catalogs((err, data) => {
      if (err) {
        return;
      } else {
        commit(GET_FOODS_CATALOGS, { data });
        callback(null, data);
      }
    });
  },
  // 获取附近商家
  [GET_NEARBY_SHOPS]({ commit, state }, callback) {
    // 发ajax请求
    req_nearby_shops(state.latitude, state.longitude, (err, data) => {
      if (err) {
        return;
      } else {
        commit(GET_NEARBY_SHOPS, { data });
        callback(null, data);
      }
    });
  },

  // 设置用户登录信息---同步请求
  [SET_USER_INFO]({ commit, state }, user_info) {
    commit(SET_USER_INFO, { user_info });
  },

  // 获取商铺信息
  [GET_SHOP_INFO]({ commit, state }) {
    // 发ajax请求
    req_shop_info((err, data) => {
      if (err) {
        return;
      } else {
        commit(GET_SHOP_INFO, data);
      }
    });
  },

  // 获取商铺食品列表
  [GET_SHOP_GOODS]({ commit, state }) {
    // 发ajax请求
    req_shop_goods((err, data) => {
      if (err) {
        return;
      } else {
        commit(GET_SHOP_GOODS, data);
        commit(CLEAR_SHOP_CAR)
      }
    });
  },

  // 获取商铺评论列表
  [GET_SHOP_RATINGS]({ commit, state }) {
    // 发ajax请求
    req_shop_ratings((err, data) => {
      if (err) {
        return;
      } else {
        commit(GET_SHOP_RATINGS, data);
      }
    });
  },

  // 同步---增加或减少购买的食物数量
  [UPDATE_SELECT_COUNT]({commit,state},{food,isAdd}){
      commit(UPDATE_SELECT_COUNT,{food,isAdd})
  },

  // 同步---清空购物车
  [CLEAR_SHOP_CAR]({commit,state}){
      commit(CLEAR_SHOP_CAR)
    },



  // 根据经纬度和关键字搜索商铺列表
  [GET_SEARCH_SHOPS]({ commit, state }, keyword) {
    // 准备请求参数
    const geohash=`40.10038,116.36867`
    // 发ajax请求
    req_search_shops({ geohash:geohash, keyword:keyword }, (err, data) => {
      if (err) {
        return;
      } else {
        commit(GET_SEARCH_SHOPS, { data });
      }
    });
  },

};
