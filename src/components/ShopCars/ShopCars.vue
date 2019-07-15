<template>
  <div class="ShopCars" @click="show_car">
    <div class="car">
      <div class="tips">已减6.17元</div>
      <div class="header">
        <span class="left">已选商品</span>
        <span class="right" @click.stop="clear_shop_car" v-show="shopCar.length">
          <i class="iconfont iconqingchu"></i>清空
        </span>
      </div>
      <div class="list" ref="list">
        <ul>
          <li>
            <span class="name ellipsis">名称</span>
            <span class="price">单价</span>
            <span class="number">数量</span>
            <span class="sum">小计</span>
          </li>
          <li v-for="(food, index) in shopCar" :key="index">
            <span class="name ellipsis">{{food.name}}</span>
            <span class="price">
              <i class="old">￥{{food.oldPrice}}</i>
              <i class="now">￥{{food.price}}</i>
            </span>
            <BtnAddFood :food="food"></BtnAddFood>
          </li>
        </ul>
      </div>
      <div class="boxs">
        <span class="name">餐盒</span>
        <span class="number">2</span>
      </div>
    </div>
  </div>
</template>
<script>
import BtnAddFood from "../../components/BtnAddFood/BtnAddFood";
import { mapState } from "vuex";
import BScroll from "better-scroll";
import { MessageBox } from "mint-ui";
export default {
  name: "ShopCars",
  props: {
    show_car: Function
  },
  mounted() {
    const list = this.$refs.list;
    setTimeout(() => {
      new BScroll(list, {
        scrollY: true,
        click: true
      });
    }, 100);
  },
  components: {
    BtnAddFood
  },
  computed: {
    ...mapState(["shopCar"])
  },
  methods: {
    clear_shop_car() {
      MessageBox.confirm("确定要清除吗?").then(
        () => {
          this.$store.dispatch("clear_shop_car");
          this.show_car()
        },
        () => {}
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.ShopCars {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;

  .car {
    color: #333;
    background-color: #fff;
    // padding: 0 1rem;
    width: 100vw;
    position: absolute;
    bottom: 4rem;
    left: 0;
    .tips {
      background-color: #fffad9;
      text-align: center;
      height: 1.5rem;
      line-height: 1.5rem;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ebeff1;
      padding: 1rem 1rem;
      .left {
        font-size: 1.5rem;
      }
      .right {
        color: #999;
        i {
          margin-right: 0.2rem;
        }
      }
    }
    .list {
      height: 10rem;
      padding: 0 1rem;
      overflow: auto;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4.5rem;
        border-bottom: 1px solid #eee;
        .name {
          font-size: 1.5rem;
          width: 60%;
        }
        .price {
          .old {
            font-size: 0.6rem;
            margin-right: 0.2rem;
            text-decoration: line-through;
          }
          .now {
            color: red;
            font-size: 1.5rem;
          }
        }
      }
    }
    .boxs {
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
      height: 4.8rem;
      .name {
      }
      .number {
        color: red;
        margin-right: 10rem;
      }
    }
  }
}
</style>
