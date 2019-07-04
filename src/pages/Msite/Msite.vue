<template>
  <!-- 首页 Msite -->
  <div class="Msite">
    <TopArea top_title="昌平区北七家宏福旅行社会大街21号">
      <i class="search_icon iconfont iconsousuo" slot="left"></i>
      <span class="login_regis" slot="right">登录|注册</span>
    </TopArea>

    <section class="foods_classes swiper-container">
      <!-- 食品分类 -->
      <div class="outer_box swiper-wrapper">
        <div class="inner_box_1 swiper-slide">
          <div class="item">
            <img src="../../assets/images/nav/1.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/2.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/3.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/4.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/5.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/6.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/7.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/8.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
        </div>
        <div class="inner_box_2 swiper-slide">
          <div class="item">
            <img src="../../assets/images/nav/1.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/2.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/3.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/4.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/5.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/6.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/7.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
          <div class="item">
            <img src="../../assets/images/nav/8.jpg" alt="甜品饮品">
            <span>甜品饮品</span>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </section>
    
    <ShopsList></ShopsList>
  </div>
  <!-- 首页 Msite  end -->
</template>
<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
import TopArea from "../../components/TopArea/TopArea";
import ShopsList from '../../components/ShopsList/ShopsList'

export default {
  name: "Msite",
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 水平切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  components: {
    TopArea,
    ShopsList
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
