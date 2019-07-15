<template>
  <!-- 首页 Msite -->
  <div class="Msite">
    <TopArea :top_title="posi_address">
      <routerLink to="/search" tag="i" class="search_icon iconfont iconsousuo" slot="left"></routerLink>

      <routerLink tag="span" class="login_regis" slot="right" :to="user_info._id?'/profile':'/login'">{{user_info._id?'已登录':'登录|注册'}}</routerLink>
    </TopArea>

    <section class="foods_classes swiper-container" v-if="show_foods_catalogs">
      <!-- 食品分类 -->
      <div class="outer_box swiper-wrapper">
        <div
          class="inner_box_1 swiper-slide"
          v-for="(item, index) in foods_catalogs_arr"
          :key="index"
        >
          <div class="item" v-for="(item_inner, index) in item" :key="index">
            <img :src="base_image_url+item_inner.image_url" :alt="item_inner.title" />
            <span>{{item_inner.title}}</span>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </section>
    <section class="foods_classes nodata" v-else></section>

    <ShopsList></ShopsList>
  </div>
  <!-- 首页 Msite  end -->
</template>
<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
import TopArea from "../../components/TopArea/TopArea";
import ShopsList from "../../components/ShopsList/ShopsList";

import { mapState, mapActions } from "vuex";

export default {
  name: "Msite",
  data() {
    return {
      base_image_url: "http://localhost:8000/public/images",
      show_foods_catalogs: false
    };
  },
  created() {
    // 请求地址数据
    this.$store.dispatch("get_address");
    // 请求食品分类数据
    this.$store.dispatch("get_foods_catalogs", (err, data) => {
      if (data) {
        this.show_foods_catalogs = true;
      }
    });
  },
  mounted() {},
  components: {
    TopArea,
    ShopsList
  },
  computed: {
    ...mapState(["posi_address", "foods_catalogs","user_info"]),
    // 生成新的二维数组，方便视图显示
    foods_catalogs_arr() {
      let arr_new = [];
      let arr_inner = [];
      //遍历原数组
      this.foods_catalogs.forEach((item, index, arr) => {
        if (arr_inner.length === 8) {
          arr_new.push(arr_inner);
          arr_inner = [];
          arr_inner.push(item);
        } else if (arr.length === index + 1) {
          arr_inner.push(item);
          arr_new.push(arr_inner);
        } else {
          arr_inner.push(item);
        }
      });
      return arr_new;
    }
  },
  watch: {
    foods_catalogs() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper-container", {
          direction: "horizontal", // 水平切换选项
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
/* 首页 Msite */
.Msite {
  background-color: #f5f5f5;
  margin-bottom: 4.5rem;
}

.foods_classes {
  /* 食品分类 */
  width: 100%;
  height: 16rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  margin-top: 4rem;
  &.nodata {
    background: url("./images/msite_back.svg") no-repeat center center;
  }
}

.outer_box {
  width: 200%;
  height: 100%;
}
.outer_box > * {
  //   float: left;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 10px;
}
.outer_box .item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  height: 50%;
  padding: 6px 0;
  font-size: 1.3rem;
  color: #666;
}
.outer_box img {
  width: 4rem;
  height: 4rem;
}

/* 首页 Msite  end */
</style>
