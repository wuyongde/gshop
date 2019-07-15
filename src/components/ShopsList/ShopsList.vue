<template>
  <div class="nearby_shop_list">
    <!-- 附近商家 -->
    <p class="title">
      <i class="iconfont iconliebiao"></i>
      <span>附近商家</span>
    </p>
    <ul v-if="show_nearby_shops">
      <li @click="$router.push('/Shop')"  class="shop_item" v-for="(item, index) in nearby_shops" :key="index" >
        <div class="left">
          <img :src="base_image_url+item.image_path" alt />
        </div>
        <div class="middle">
          <p class="title">
            <i class="flag">品牌</i>
            <span class="shop_name ellipsis">{{item.name}}</span>
          </p>
          <p class="sales">
            <Stars :size="24" :score="item.rating"></Stars>
            <i class="score">{{item.rating}}</i>
            <i class="sales_sum">月售{{item.recent_order_num}}单</i>
          </p>
          <p class="price">
            <i class="start_price">${{item.float_minimum_order_amount}}起送</i>
            <i class="xie">/</i>
            <i class="peisonfei">配送费约${{item.float_delivery_fee}}</i>
          </p>
        </div>
        <div class="right">
          <div class="flag">
            <span v-for="(item2, index) in item.supports[0].icon_name" :key="index">{{item2}}</span>
          </div>
          <span>{{item.delivery_mode.text}}</span>
        </div>
      </li>      
    </ul>
    <ul v-else>
      <li class="shop_item nodata" v-for="(n) in 8" :key="n"></li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Stars from "../Stars/Stars";
export default {
  name: "ShopsList",
  data() {
    return {
      base_image_url: "http://localhost:8000/public/images",
      show_nearby_shops:false
    };
  },
  components: {
    Stars
  },
  created() {
    this.$store.dispatch("get_nearby_shops",(err,data)=>{
      if(data){
        this.show_nearby_shops=true
      }
    });
  },
  computed: {
    ...mapState(["nearby_shops"])
  }
};
</script>
<style lang="scss" scoped>
.nearby_shop_list {
  /* 附近商家 */
  margin-top: 10px;
  width: 100%;

  background-color: #fff;
}
.nearby_shop_list > .title {
  font-size: 1.4rem;
  color: #999;
  padding: 5px 8px;
}
.shop_item {
  border-bottom: 1px solid #eee;
  padding: 10px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  &.nodata{
    background:url('./images/shop_back.svg') no-repeat center center;
  }
}
.shop_item img {
  width: 7rem;
  height: 7rem;
}
.middle {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 7rem;
}
.middle .title .flag {
  font-size: 1.1rem;
  background-color: #ffd92f;
  color: #333;
}
.middle .title .shop_name {
  font-size: 1.6rem;
  font-weight: 600;
}
.middle .sales {
  font-size: 0.8rem;
  color: #999;
  & > * {
    margin-right: 5px;
  }
}
.middle .sales .stars {
  color: #ff9900;
  font-size: 1.5rem;
}
.middle .price {
  font-size: 0.6rem;
  color: #999;
}

.right {
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  div {
    color: #999;
    font-size: 1rem;
    span {
      color: #00a774;
      border: 1px solid #00a774;
      font-size: 12px;
      line-height: 12px;
      // margin-top: 20px;
      margin: 0 2px;
      // padding: 0;
    }
  }
  &>span{
    color: #ffd92f;
  }
}
</style>
