<template>
  <div class="Shop">
      <ShopHeaders></ShopHeaders>
    <div class="tabs">
      <router-link to="/Shop/ShopFoods">点餐</router-link>
      <router-link to="/Shop/ShopRates">评价</router-link>
      <router-link to="/Shop/ShopInfos">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import ShopHeaders from '../../components/ShopHeaders/ShopHeaders'

export default {
  name: "Shop",
  components:{
      ShopHeaders
  },
  created() {
    // 取商铺信息
    this.$store.dispatch('get_shop_info')

    
  },
};
</script>
<style lang="scss" scoped>
.Shop{

    .tabs{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #666;
        font-size: 1.5rem;
        border-bottom: 1px solid #eee;
        &>*{
            padding-bottom: 1rem;           
        }
        .router-link-active{
            border-bottom: 2px solid #2295FF;
            color: #333;
        }
    }
}

</style>
