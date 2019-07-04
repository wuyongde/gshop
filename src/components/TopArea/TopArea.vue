<template>
  <header class="top_area">
    <slot name="left"></slot>
    <span class="title ellipsis">{{top_title}}</span>
    <slot name="right"></slot>
  </header>
</template>
<script>
export default {
  name: "TopArea",
  props: {
    top_title: String
  }
};
</script>
<style lang="scss" scoped>
.top_area {
  /* 顶部区域 */
  width: 100%;
  height: 4rem;
  background-color: #00a774;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  .title {
    font-size: 1.7rem;
    width: 60%;
    text-align: center;
  }
  .search_icon::before {
    font-size: 1.7rem;
  }
  .login_regis {
    font-size: 1.2rem;
  }
}
</style>
