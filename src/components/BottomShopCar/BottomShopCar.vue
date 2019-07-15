<template>
  <div class="BottomShopCar">
    <!-- <p class="youhui">满25减10元，满55减25元</p> -->
    <transition name="toggle_car">
      <ShopCars v-show="toggle_show_car" :show_car="show_car"></ShopCars>
    </transition>
    <!--弹出的购物车组件-->
    <div class="shop_car" @click="show_car">
      <span class="car iconfont iconqicheqianlian-" :class="{haveNumber:totalNumber}">
        <i class="totalNumber" v-show="totalNumber">{{totalNumber}}</i>
      </span>
      <div class="foods">
        <span class="top">{{totalPrice?'￥'+totalPrice:'未选购商品'}}</span>
        <span class="bottom">另需配送费{{curr_shop_info.deliveryPrice}}元</span>
      </div>
      <span class="price" :class="{jiesuang:startPrice=='去结账'}">{{startPrice}}</span>
    </div>
  </div>
</template>
<script>
import ShopCars from "../../components/ShopCars/ShopCars";
import { mapGetters, mapState } from "vuex";

export default {
  name: "BottomShopCar",
  data() {
    return {
      toggle_show_car: false
    };
  },
  components: {
    ShopCars
  },
  computed: {
    ...mapGetters(["totalPrice", "totalNumber"]),
    ...mapState(["curr_shop_info"]),
    startPrice() {
      if (!this.totalNumber) {
        return `${this.curr_shop_info.minPrice}元起送`;
      } else if (this.totalPrice < this.curr_shop_info.minPrice) {
        return `还差 ${this.curr_shop_info.minPrice - this.totalPrice} 元起送`;
      } else {
        return `去结账`;
      }
    }
  },
  methods: {
    show_car(){
      this.toggle_show_car=!this.toggle_show_car
    }
  },
};
</script>
<style lang="scss" scoped>
.BottomShopCar {
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;

  .youhui {
    height: 1.3rem;
    line-height: 1.3rem;
    background-color: #fffad9;
    text-align: center;
    font-size: 0.5rem;
  }
  .shop_car {
    height: 4rem;
    background-color: #505052;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0rem 0 6rem;
    .car {
      position: absolute;
      left: 1rem;
      top: -1rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 2px solid #444444;
      background-color: #363636;
      text-align: center;
      line-height: 3rem;
      font-size: 2.5rem;
      color: #fff;
      &.haveNumber {
        background-color: green;
        &::before {
          color: #fff;
        }
      }
      .totalNumber {
        font-size: 1rem;
        font-weight: bold;
        position: absolute;
        right: 0;
        top: 0;
        color: red;
      }
    }
    .foods {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      color: #fff;
      height: 80%;
      .top {
        font-size: 1rem;
      }
    }
    .price {
      font-size: 1.5rem;
      color: #fff;
      padding: 0 2rem;
      &.jiesuang{
        height: 100%;
        line-height: 4rem;
        
        background-color: #22A9F2;
        color: #fff;
      }
    }
  }

  // 过渡效果
  .toggle_car-enter,
  .toggle_car-leave-to {
    top: 100vh;
  }
  .toggle_car-enter-active,
  .toggle_car-leave-active {
    transition: all 0.3s ease;
  }
}
</style>
