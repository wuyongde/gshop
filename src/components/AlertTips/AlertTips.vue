<template>
  <div class="AlertTips">
    <div class="msgbox">
      <p class="err_msg">错误：{{msg_str}}</p>
      <button class="btn_close" @click="closeMsg">关闭</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "AlertTips",
  props: {
    msg_str: String,
    close_msg: Function
  },
  methods: {
    closeMsg() {
      this.$emit("close_msg");
    }
  }
};
</script>
<style lang="scss" scoped>
.AlertTips {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .msgbox {
    width: 60%;
    height: 20%;
    border-radius: 0.7rem;
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    p {
      font-size: 1.5rem;
    }
    button {
      font-size: 1.5rem;
    }
  }
}
</style>
