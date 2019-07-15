<template>
  <div class="BtnAddFood">
    <transition name="removeCount">
      <span class="remove" v-show="food.selectCount" @click.stop="updateSelectCount(false)">-</span>
    </transition>
    <i class="number" v-show="food.selectCount">{{food.selectCount?food.selectCount:0}}</i>
    <span class="add" @click.stop="updateSelectCount(true)">+</span>
  </div>
</template>
<script>
export default {
  name: "BtnAddFood",
  props: {
    food: Object
  },
  methods: {
    updateSelectCount(isAdd) {
      // console.log(isAdd)
      this.$store.dispatch("update_select_count", {
        food: this.food,
        isAdd: isAdd
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.BtnAddFood {
  width: 6.5rem;
  span {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    font-weight: bold;
    text-align: center;
    line-height: 1.6rem;
    font-size: 1.5rem;
  }
  .remove {
    color: #2295ff;
    background-color: #fff;
    border: 1px solid #2295ff;
    float: left;
  }
  .number {
    margin: 0 0.7rem;
    color: #333;
    line-height: 1.6rem;
    float: left;
  }
  .add {
    color: #fff;
    background-color: #2295ff;
    // margin-left: 4.5rem;
    float: right;
  }

  // 过渡效果
  .removeCount-enter,.removeCount-leave-to{
    transform: translateX(4.5rem) rotate(180deg);
    opacity: 0;
    
  }
  .removeCount-enter-active,.removeCount-leave-active{
    transition: all 0.3s ease;
  }
}
</style>
