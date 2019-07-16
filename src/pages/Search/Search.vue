<template>
  <div class="Search">
    <TopArea top_title="搜索"></TopArea>
    <form action>
      <div>
        <input type="text" placeholder="输入关键字" class="keyword" v-model="keyword" />
        <i class="iconfont iconqingchu" v-show="keyword" @click.stop="keyword=''"></i>
      </div>
      <button class="btn_search" @click.prevent="search">搜索</button>
    </form>

    <ul class="sear_result" v-if="search_shops.length">
      <li class="item" v-for="(shop, index) in search_shops" :key="index">
        <span class="name">{{shop.name}}</span>
        <span class="category">{{shop.category}}</span>
      </li>
    </ul>
    <div v-else>暂时没有搜索到合适的商铺</div>
  </div>
</template>
<script>
import TopArea from "../../components/TopArea/TopArea";
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      keyword: ""
    };
  },
  created() {},
  components: {
    TopArea
  },
  methods: {
    search() {
      // 收集数据发请求
      let keyword = this.keyword.trim();
      if (!keyword) {
        return;
      }
      this.$store.dispatch("get_search_shops", keyword);
    }
  },
  computed: {
    ...mapState(["search_shops"])
  }
};
</script>
<style lang="scss" scoped>
.Search {
  padding-top: 48px;
  padding-left: 1rem;
  padding-right: 1rem;
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    div {
      width: 80%;
      height: 3rem;
      position: relative;
      .keyword {
        height: 3rem;
        width: 100%;
        background: #eee;
        border-radius: 0.3rem;
      }
      i {
        position: absolute;
        right: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
        &::before {
          width: 0.6rem;
          height: 0.6rem;
        }
      }
    }
    .btn_search {
      height: 3rem;
      width: 20%;
      border-radius: 0.3rem;
      background-color: #0097ff;
      color: #fff;
      outline: 0;
      border: 0;
    }
  }
  .sear_result {
    li {
      height: 4rem;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
      }
      .category {
      }
    }
  }
}
</style>
