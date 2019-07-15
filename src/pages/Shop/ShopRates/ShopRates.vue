<template>
  <div class="ShopRates">
    <div class="summery">
      <span class="total">{{curr_shop_info.score}}</span>
      <div class="stars">
        <span class="title">商家评分</span>
        <Stars :size="24" :score="curr_shop_info.score"></Stars>
      </div>
      <div class="weidao">
        <span class="title">味道</span>
        <span class="score">{{curr_shop_info.foodScore}}</span>
      </div>
      <div class="baozhuang">
        <span class="title">包装</span>
        <span class="score">{{curr_shop_info.serviceScore}}</span>
      </div>
      <div class="line"></div>
      <div class="peisong">
        <span class="title">配送</span>
        <span class="score">{{curr_shop_info.serviceScore}}</span>
      </div>
    </div>
    <div class="filters">
      <div class="words">
        <span
          :class="{active:filterKeyword==='全部'}"
          @click="filterKeyword='全部'"
        >全部 {{curr_shop_ratings.length}}</span>
        <span>最新</span>
        <span
          @click="filterKeyword='好评'"
          :class="{active:filterKeyword==='好评'}"
        >好评 {{totalNum_good}}</span>
        <span
          @click="filterKeyword='差评'"
          :class="{active:filterKeyword==='差评',bad:filterKeyword!=='差评'}"
        >差评 {{totalNum_bad}}</span>
        <span>有图 593</span>
        <span>味道好 30</span>
      </div>
      <div
        class="only_see_content"
        @click="onlySeeHaveText=!onlySeeHaveText"
        :class="{gou:onlySeeHaveText}"
      >
        <i class="iconfont icongou"></i>
        只看有内容的评价
      </div>
    </div>
    <div class="comments" ref="comments">
      <ul>
        <Comment v-for="(Comment, index) in commentsArr" :key="index" :comment="Comment"></Comment>
      </ul>
    </div>
  </div>
</template>
<script>
import Stars from "../../../components/Stars/Stars";
import Comment from "../../../components/Comment/Comment";
import { mapState } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "ShopRates",
  data() {
    return {
      onlySeeHaveText: false,
      filterKeyword: "全部"
    };
  },
  computed: {
    ...mapState(["curr_shop_info", "curr_shop_ratings"]),
    commentsArr() {
      switch (this.filterKeyword) {
        case "全部":
          if (!this.onlySeeHaveText) {
            return this.curr_shop_ratings;
          } else {
            return this.curr_shop_ratings.filter(item => {
              return item.text.trim().length > 0;
            });
          }
          break;
        case "好评":
          if (!this.onlySeeHaveText) {
            return this.curr_shop_ratings.filter(item => {
              return item.score * 10 >= 30;
            });
          } else {
            return this.curr_shop_ratings.filter(item => {
              return item.text.trim().length > 0 && item.score * 10 >= 30;
            });
          }
          break;
        case "差评":
          if (!this.onlySeeHaveText) {
            return this.curr_shop_ratings.filter(item => {
              return item.score * 10 < 20;
            });
          } else {
            return this.curr_shop_ratings.filter(item => {
              return item.text.trim().length > 0 && item.score * 10 < 20;
            });
          }
          break;
        default:
          return this.curr_shop_ratings;
      }
    },
    totalNum_good() {
      return this.curr_shop_ratings.reduce((sum, item) => {
        return (sum += item.score * 10 >= 30 ? 1 : 0);
      }, 0);
    },
    totalNum_bad() {
      return this.curr_shop_ratings.reduce((sum, item) => {
        return (sum += item.score * 10 < 20 ? 1 : 0);
      }, 0);
    }
  },
  components: {
    Stars,
    Comment
  },
  created() {
    // 取商铺评论列表
    this.$store.dispatch("get_shop_ratings");
  },
  watch: {
    curr_shop_ratings() {
      this.$nextTick(() => {
        // dom更新后，创建滚动
        new BScroll(this.$refs.comments, {
          scrollY: true,
          click: true
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.ShopRates {
  .summery {
    width: 100vw;
    padding: 0 1.5rem;
    height: 8.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.7rem solid #f5f5f5;
    & > * {
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .title {
        font-size: 0.5rem;
        color: #999;
      }
      .score {
        font-size: 2rem;
        color: #666;
      }
    }
    .total {
      font-size: 4rem;
      color: #ff5f00;
    }
    .stars {
    }
    .weidao {
    }
    .baozhuang {
    }
    .line {
      // height: 100%;
      width: 0.1rem;
      background-color: #ddd;
    }
    .peisong {
    }
  }
  .filters {
    padding: 0 1rem;
    .words {
      border-bottom: 1px solid #eee;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      padding: 0.7rem 0;
      span {
        padding: 0.6rem 1rem;
        background-color: #eaf5ff;
        color: #757f8c;
        border-radius: 0.2rem;
        margin: 0.3rem;
        &.active {
          color: #fff;
          background: #0097ff;
        }
        &.bad {
          color: #b4b4b4;
          background: #f5f5f5;
        }
      }
    }
    .only_see_content {
      border-bottom: 1px solid #eee;
      font-size: 1.3rem;
      padding: 1.2rem 0;
      color: #696969;
      text-indent: 1rem;
      i {
        &::before {
          font-size: 0.5rem;
        }
      }
      &.gou {
        i {
          &::before {
            color: #75d572;
          }
        }
      }
    }
  }
  .comments {
    padding: 0 1rem;
    height: 90vh;
    overflow: hidden;
  }
}
</style>
