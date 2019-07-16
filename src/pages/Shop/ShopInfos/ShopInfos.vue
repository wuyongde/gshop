<template>
  <div class="ShopInfos" ref="ShopInfos">
    <div class="box">
      <div class="peison_info">
        <h3 class="title">配送信息</h3>
        <p>
          <span>{{curr_shop_info.description}}</span>
          约{{curr_shop_info.deliveryTime}}分钟送达，距离{{curr_shop_info.distance}}
        </p>
        <span>配送费 ￥{{curr_shop_info.deliveryPrice}}</span>
      </div>
      <div class="shop_service">
        <h3 class="title">商家服务</h3>
        <div class="box">
          <p v-for="(support, index) in curr_shop_info.supports" :key="index">
            <span class="tags" :class="activeTag[support.type]">{{support.name}}</span>
            {{support.content}}
          </p>
        </div>
      </div>
      <div class="shop_pics">
        <h3 class="title">商家实景</h3>
        <div class="box" ref="shop_pics">
          <div class="wrap" :style="{width:picsWidth+'rem'}">
            <div class="imgs" v-for="(pic, index) in curr_shop_info.pics" :key="index">
              <img :src="pic" alt />
              <span>门面(1张)</span>
            </div>
          </div>
        </div>
      </div>
      <div class="shop_info">
        <h3 class="title">商家信息</h3>
        <div class="item">
          <span class="name">中式快餐</span>
          <p class="desc"></p>
        </div>
        <div class="item">
          <span class="name">品类</span>
          <p class="desc">{{curr_shop_info.category}}</p>
        </div>
        <div class="item">
          <span class="name">商家电话</span>
          <p class="desc">
            {{curr_shop_info.phone}}
            <i class="iconfont iconicondayu"></i>
          </p>
        </div>
        <div class="item">
          <span class="name">地址</span>
          <p class="desc">{{curr_shop_info.address}}</p>
        </div>
        <div class="item">
          <span class="name">营业时间</span>
          <p class="desc">10:00-20:30</p>
        </div>
      </div>
      <div class="aptitude">
        <h3 class="title">营业资质</h3>
        <span>
          <i class="arr iconfont iconicondayu"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "ShopInfos",
  data() {
    return {
      activeTag: ["red", "green", "blue"]
    };
  },
  created() {
    // this.$store.dispatch("get_shop_info");
  },
  mounted() {
    this._initScroll();
  },
  computed: {
    ...mapState(["curr_shop_info"]),
    picsWidth() {
      let result =
        (this.curr_shop_info.pics ? this.curr_shop_info.pics.length : 0) * 75;
      return Math.floor(result / 10) + "." + (result % 10);
    }
  },
  methods: {
    _initScroll() {
      // console.log('111')
      // dom更新后，创建滚动
      new BScroll(this.$refs.ShopInfos, {
        scrollY: true,
        click: true
      });
      // 创建商家图片滚动实例
      new BScroll(this.$refs.shop_pics, {
        scrollX: true,
        click: true
      });
    }
  },
  watch: {
    // curr_shop_info() {
    //   this.$nextTick(() => {
    //     this._initScroll();
    //   });
    // }
  }
};
</script>
<style lang="scss" scoped>
.ShopInfos {
  background-color: #f5f5f5;
  color: #757575;
  height: 45vh;
  overflow: hidden;
  & > .box > * {
    background-color: #fff;
    margin-bottom: 1rem;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  h3.title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    color: #333;
  }
  .peison_info {
    p {
      margin-top: 1.5rem;
      span {
        background: #0097ff;
        color: #fff;
        padding: 0.1rem 0.2rem;
        border-radius: 0.2rem;
        margin-right: 0.5rem;
      }
    }
    & > span {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
  }
  .shop_service {
    .box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      p {
        margin-top: 1.3rem;

        &:last-of-type {
          margin-bottom: 1.7rem;
        }
        .tags {
          border: 1px solid #eee;
          padding: 0 0.3rem;
          border-radius: 0.2rem;
          &.red {
            background: red;
            color: #fff;
          }
          &.green {
            background: green;
            color: #fff;
          }
          &.blue {
            background: blue;
            color: #fff;
          }
        }
      }
    }
  }
  .shop_pics {
    .box {
      width: 100%;
      height: 7rem;
      overflow: hidden;
      .wrap {
        height: 100%;
        & > * {
          float: left;
        }
        .imgs {
          width: 7rem;
          height: 7rem;
          position: relative;
          margin-right: 0.5rem;
          img {
            width: 100%;
            height: 100%;
          }
          span {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            font-size: 0.5rem;
          }
        }
      }
    }
  }
  .shop_info {
    .item {
      padding: 1.3rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border-top: 1px solid #eee;
      &:first-of-type {
        border-top: 0;
      }
      .name {
        font-size: 1rem;
        font-weight: 600;
        color: #666;
      }
      .desc {
        // width: 60%;
      }
    }
  }
  .aptitude {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1rem 0.5rem;
    h3 {
      margin: 0;
    }
  }
}
</style>
