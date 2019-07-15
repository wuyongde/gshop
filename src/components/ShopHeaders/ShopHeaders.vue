<template>
  <div class="ShopHeaders">
    <div class="shop_bg" :style="{background:`url(${curr_shop_info.bgImg}) no-repeat center center`}">
      <div class="mask"></div>
      <span class="btn_back iconfont iconicondayu" @click="$router.push('/msite')"></span>
      <div class="logo" :style="{background:`url(${curr_shop_info.avatar}) no-repeat center center`}"></div>
    </div>
    <div class="shop_info">
      <h3 class="name">
        {{curr_shop_info.name}}
        <i class="iconfont iconsanjiaoxing-xia1"></i>
      </h3>
      <div class="descri">
        <span>评价{{curr_shop_info.score}}</span>
        <span>月售{{curr_shop_info.sellCount}}单</span>
        <span>{{curr_shop_info.description}}约{{curr_shop_info.deliveryTime}}分钟</span>
      </div>
      <div class="discount">
        <span class="price">$6</span>
        <span>无门槛</span>
        <span>领取</span>
      </div>
      <div class="favorable">
        <span class="manjian">满减</span>
        <span class="desc">满25减10，满55减25</span>
        <span class="btn_numbers">
          4个优惠
          <i class="iconfont iconsanjiaoxing"></i>
        </span>
      </div>
      <p
        class="notice ellipsis"
      >公告：温馨小提示：1.餐厅的送餐时间是11:00-14：00/17:00-19:30,配送时间（最后一单配送完毕）其他时间接受预定。2.外卖制作+配送都需要消耗时间，为了能及时用餐，希望大家提前1小时以上预定，避开高峰拥堵，谢谢您！</p>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "ShopHeaders",
  computed: {
    ...mapState(['curr_shop_info'])
  },
};
</script>
<style lang="scss" scoped>
.ShopHeaders {
  width: 100%;
  .shop_bg {
    width: 100%;
    height: 8rem;
    background-size: 100% auto;
    position: relative;
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .btn_back {
      position: absolute;
      left: 0.5rem;
      top: 0.5rem;
      transform: rotate(180deg);
      &::before {
        font-weight: 700;
        font-size: 2.5rem;
        color: #fff;
      }
    }
    .logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -1rem;
      width: 6rem;
      height: 6rem;
      border-radius: 0.2rem;
      background-size: 100% auto;
    }
  }

  .shop_info {
    background: #fff;
    width: 100%;
    padding: 2.5rem 3rem 1.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    & > * {
      margin: 0.4rem;
    }
    .name {
      font-size: 2rem;
      font-weight: 500;
    }
    .descri {
      color: #878787;
      span {
        margin: 0.6rem;
      }
    }
    .discount {
      background: #ffe578;
      line-height: 2rem;
      color: #666;
      padding-left: 1rem;
      span {
        margin: 0.5rem;
      }
      .price {
        font-size: 1.5rem;
        color: #333;
      }
    }
    .favorable {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      .manjian {
          padding: 0.2rem 0.4rem;
          color: #fff;
          background: #F07373;
      }
      .desc {
          color: #333;
          width: 65%;
      }
      .btn_numbers {
          color: #999;
          i::before{
            font-size: 0.5rem;
          }
      }
    }
    .notice {
        width: 100%;
        color: #999;
        font-weight: lighter;
    }
  }
}
</style>
