<template>
  <div class="ShopInfos">
    <div class="peison_info">
      <h3 class="title">配送信息</h3>
      <p>
        <span>蜂鸟专送</span>
        约30分钟送达，距离1.3km
      </p>
      <span>配送费 ￥3</span>
    </div>
    <div class="shop_service">
      <h3 class="title">商家服务</h3>
      <p>
        <span class="tags">赔</span>
        商家原因导致订单取消，赔付代金券
      </p>
      <p>
        <span class="tags">票</span>
        该商家支持开发票，请在下单时填写好发票抬头
      </p>
    </div>
    <div class="shop_pics">
      <h3 class="title">商家实景</h3>
      <div class="box">
        <div class="imgs">
          <img
            src="https://fuss10.elemecdn.com/9/e6/3ae4747537d00334f90a540588f28jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/"
            alt
          />
          <span>门面(1张)</span>
        </div>
        <div class="imgs">
          <img
            src="https://fuss10.elemecdn.com/9/e6/3ae4747537d00334f90a540588f28jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/"
            alt
          />
          <span>门面(1张)</span>
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
        <p class="desc">川湘菜, 其他快餐</p>
      </div>
      <div class="item">
        <span class="name">商家电话</span>
        <p class="desc">
          18683794071
          <i class="iconfont iconicondayu"></i>
        </p>
      </div>
      <div class="item">
        <span class="name">地址</span>
        <p class="desc">成都高新区剑南大道中段998号B1层CB07号</p>
      </div>
      <div class="item">
        <span class="name">营业时间</span>
        <p class="desc">10:00-20:30</p>
      </div>
    </div>
    <div class="aptitude">
      <h3 class="title">营业资质</h3>
      <span><i class="arr iconfont iconicondayu"></i></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopInfos"
};
</script>
<style lang="scss" scoped>
.ShopInfos {
  background-color: #f5f5f5;
  color: #757575;

  & > * {
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
    p {
      &:first-of-type {
        margin-top: 1.5rem;
        margin-bottom: 1.3rem;
      }
      &:last-of-type {
        margin-bottom: 1.7rem;
      }
      .tags {
        border: 1px solid #eee;
        padding: 0 0.3rem;
      }
    }
  }
  .shop_pics {
    .box {
      width: 100%;
      display: flex;
      margin: 1rem 0;     
      .imgs {
        width: 7rem;
        height: 7rem;
        position: relative;
        margin-right: 0.5rem;
        img{
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
  .shop_info {
    .item {
      padding: 1.3rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border-top: 1px solid #eee;
      &:first-of-type{
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
    h3{
        margin: 0;
    }    
  }
}
</style>
