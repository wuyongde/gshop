<template>
  <div class="stars">
    <img
      :src="`${base_image_url}/stars/star${size}_${item}@2x.png`"
      alt
      v-for="(item, index) in stars_arr"
      :key="index"
    />
  </div>
</template>
<script>
export default {
  name: "Stars",
  data() {
      return {
          base_image_url: "http://localhost:8000/public/images"
      }
  },
  props: {
    size: Number,
    score: Number
  },
  computed: {
    stars_arr() {
      const { score } = this;
      const arr = [];
      // 算全星
      for (let i = 0; i < Math.floor(score); i++) {
        arr.push("on");
      }
      // 算半星0/1个
      if (score * 10 - Math.floor(score) * 10 >= 5) {
        arr.push("half");
      }
      // 算0星
      while (arr.length < 5) {
        arr.push("off");
      }
      return arr;
    }
  }
};
</script>
<style lang="scss" scoped>
.stars {
  img {
    width: 1rem;
    height: auto;
  }
}
</style>
