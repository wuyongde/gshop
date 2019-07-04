<template>
  <div class="nearby_shop_list">
    <!-- 附近商家 -->
    <p class="title">
      <i class="iconfont iconliebiao"></i>
      <span>附近商家</span>
    </p>
    <ul>
      <li class="shop_item">
        <div class="left">
          <img src="./images/shop/1.jpg" alt>
        </div>
        <div class="middle">
          <p class="title">
            <i class="flag">品牌</i>
            <span class="shop_name ellipsis">小李私房菜</span>
          </p>
          <p class="sales">
            <i class="stars">****</i>
            <i class="score">3.6</i>
            <i class="sales_sum">月售106单</i>
          </p>
          <p class="price">
            <i class="start_price">$20起送</i>
            <i class="xie">/</i>
            <i class="peisonfei">配送费约$5</i>
          </p>
        </div>
        <div class="right">
          <p class="flag">保 准 票</p>
          <span>硅谷专送</span>
        </div>
      </li>
      <li class="shop_item">
        <div class="left">
          <img src="./images/shop/1.jpg" alt>
        </div>
        <div class="middle">
          <p class="title">
            <i class="flag">品牌</i>
            <span class="shop_name ellipsis">小李私房菜</span>
          </p>
          <p class="sales">
            <i class="stars">****</i>
            <i class="score">3.6</i>
            <i class="sales_sum">月售106单</i>
          </p>
          <p class="price">
            <i class="start_price">$20起送</i>
            <i class="xie">/</i>
            <i class="peisonfei">配送费约$5</i>
          </p>
        </div>
        <div class="right">
          <p class="flag">保 准 票</p>
          <span>硅谷专送</span>
        </div>
      </li>
      <li class="shop_item">
        <div class="left">
          <img src="./images/shop/1.jpg" alt>
        </div>
        <div class="middle">
          <p class="title">
            <i class="flag">品牌</i>
            <span class="shop_name ellipsis">小李私房菜</span>
          </p>
          <p class="sales">
            <i class="stars">****</i>
            <i class="score">3.6</i>
            <i class="sales_sum">月售106单</i>
          </p>
          <p class="price">
            <i class="start_price">$20起送</i>
            <i class="xie">/</i>
            <i class="peisonfei">配送费约$5</i>
          </p>
        </div>
        <div class="right">
          <p class="flag">保 准 票</p>
          <span>硅谷专送</span>
        </div>
      </li>
      <li class="shop_item">
        <div class="left">
          <img src="./images/shop/1.jpg" alt>
        </div>
        <div class="middle">
          <p class="title">
            <i class="flag">品牌</i>
            <span class="shop_name ellipsis">小李私房菜</span>
          </p>
          <p class="sales">
            <i class="stars">****</i>
            <i class="score">3.6</i>
            <i class="sales_sum">月售106单</i>
          </p>
          <p class="price">
            <i class="start_price">$20起送</i>
            <i class="xie">/</i>
            <i class="peisonfei">配送费约$5</i>
          </p>
        </div>
        <div class="right">
          <p class="flag">保 准 票</p>
          <span>硅谷专送</span>
        </div>
      </li>
      <li class="shop_item">
        <div class="left">
          <img src="./images/shop/1.jpg" alt>
        </div>
        <div class="middle">
          <p class="title">
            <i class="flag">品牌</i>
            <span class="shop_name ellipsis">小李私房菜</span>
          </p>
          <p class="sales">
            <i class="stars">****</i>
            <i class="score">3.6</i>
            <i class="sales_sum">月售106单</i>
          </p>
          <p class="price">
            <i class="start_price">$20起送</i>
            <i class="xie">/</i>
            <i class="peisonfei">配送费约$5</i>
          </p>
        </div>
        <div class="right">
          <p class="flag">保 准 票</p>
          <span>硅谷专送</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ShopsList"
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
  justify-content: flex-start;
}
.right p {
  color: #999;
  font-size: 1rem;
}
.right span {
  color: #00a774;
  border: 1px solid #00a774;
  font-size: 0.6rem;
  margin-top: 20px;
}
</style>
