<template>
  <div class="ShopFoods">
    <div class="left_foods_catalor">
      <ul>
        <li
          v-for="(good, index) in curr_shop_goods"
          :key="index"
          :class="{active:index===curr_active_index}"
          @click="changIndex(index)"
        >
          <img :src="good.icon" alt v-if="good.icon" />
          {{good.name}}
        </li>
      </ul>
    </div>
    <div class="right_foods_list" ref="right_foods_list">
      <ul>
        <li class="catalor_item" v-for="(good, index) in curr_shop_goods" :key="index">
          <h3 class="title">{{good.name}}</h3>
          <ul>
            <li
              class="foods_item"
              v-for="(food, index) in good.foods"
              :key="index"
              @click="show_food_detail(food)"
            >
              <div class="left">
                <img :src="food.icon" alt />
              </div>
              <div class="right">
                <h3 class="name">{{food.name}}</h3>
                <p class="desc ellipsis">{{food.info}}</p>
                <p class="numbers">月售{{food.sellCount}}份，好评率{{food.rating}}</p>
                <p class="discount">2折 每单限1份优惠</p>
                <div class="price">
                  <span class="prices">${{food.price}}</span>
                  <BtnAddFood :food="food"></BtnAddFood>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <transition name="FoodDetails">
      <FoodDetails v-show="show_food_details" :close="close" :food="food_detail"></FoodDetails>
    </transition>
    <BottomShopCar></BottomShopCar>
  </div>
</template>
<script>
import BtnAddFood from "../../../components/BtnAddFood/BtnAddFood";
import FoodDetails from "../../../components/FoodDetails/FoodDetails";
import BScroll from "better-scroll";
import BottomShopCar from '../../../components/BottomShopCar/BottomShopCar'

import { mapState } from "vuex";
export default {
  name: "ShopFoods",
  data() {
    return {
      show_food_details: false,     
      food_detail: {},
      tops: [],
      scrollY: 0,
      foods_cata_scroll: {},
      foods_list_scroll: {}
    };
  },
  created() {
    // 取商铺食物列表
    this.$store.dispatch("get_shop_goods");
  },
  components: {
    BtnAddFood,
    FoodDetails,
    BottomShopCar
  },
  methods: {
    close() {
      this.show_food_details = false;
    },
    show_food_detail(food) {
      this.show_food_details = true;
      this.food_detail = food;
    },
    changIndex(index) {
      let top = this.tops[index];
      this.foods_list_scroll.scrollTo(0, -top, 200);
    },
    _init_scroll() {
      //初始化左右滚动对象实例
      this.foods_cata_scroll = new BScroll(".left_foods_catalor", {
        scrollY: true,
        click: true
      });
      this.foods_list_scroll = new BScroll(".right_foods_list", {
        scrollY: true,
        click: true,
        probeType: 3
      });

      // 右边食物列表滚动时，重新赋值scrollY
      this.foods_list_scroll.on("scroll", ({ x, y }) => {
        y = Math.abs(y);
        this.scrollY = y;
      });
      //  滚动结束后， 重新赋值scrollY
      this.foods_list_scroll.on("scrollEnd", ({ x, y }) => {
        y = Math.abs(y);
        this.scrollY = y;
      });
    },
    _init_tops() {
      //初始化tops数组
      //   将所有食品分类的y坐标点存起来
      this.tops.push(0);
      const lis = this.$refs.right_foods_list.querySelectorAll(".catalor_item");
      for (let i = 1; i < lis.length; i++) {
        let newTop = this.tops[i - 1] + lis[i - 1].clientHeight;
        this.tops.push(newTop);
      }
    }
  },
  computed: {
    ...mapState(["curr_shop_goods"]),
    curr_active_index() {
      // 由tops与scrollY得到
      let { tops, scrollY } = this;
      // 计算当前index
      let index = tops.findIndex((top, i, arr) => {
        return scrollY >= top && (arr[i + 1] ? scrollY < arr[i + 1] : true);
      });
      // 返回当前index
      return index;
    }
  },
  watch: {
    curr_shop_goods() {
      this.$nextTick(() => {
        this._init_tops();
        this._init_scroll();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.ShopFoods {
  background-color: #fff;
  //   padding-top: 1rem;
  // padding-bottom: 5.3rem;
  position: relative;
  .left_foods_catalor {
    position: absolute;
    left: 0;
    top: 0;
    width: 6rem;

    ul {
      background-color: #f8f8f8;
      height: 86vh;
      li {
        padding: 1.5rem 0.5rem;
        color: #666;
        display: flex;
        align-items: center;
        img {
          width: 1em;
          height: 1rem;
          margin-right: 0.3rem;
        }
        &.active {
          background-color: goldenrod;
        }
      }
    }
  }
  .right_foods_list {
    height: 93vh;
    overflow: auto;
    padding-left: 7rem;
    padding-bottom: 5.3rem;
    .catalor_item {
      .title {
        margin-bottom: 1rem;
      }
      ul {
        .foods_item {
          width: 100%;
          height: 10rem;
          // border: 1px solid #eee;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .left {
            img {
              width: 8rem;
              height: 8rem;
              border-radius: 0.3rem;
            }
          }
          .right {
            margin-left: 1rem;
            width: 13rem;
            height: 8rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;

            .name {
              font-size: 1.5rem;
              color: #333;
              font-weight: bold;
            }
            .desc {
              color: #999;
              width: 100%;
            }
            .numbers {
              color: #999;
            }
            .discount {
              color: red;
            }
            .price {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              .prices {
                color: red;
                font-size: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
 

  //   动画效果
  .FoodDetails-enter,
  .FoodDetails-leave-to {
    top: 100vh;
    height: 0rem;
  }
  .FoodDetails-enter-active,
  .FoodDetails-leave-active {
    transition: all 0.3s ease;
  }

 
}
</style>
