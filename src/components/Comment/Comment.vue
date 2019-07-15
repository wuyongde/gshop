<template>
  <li class="Comment">
    <img :src="comment.avatar" alt class="avat" />
    <div class="content">
      <div class="name_date">
        <span class="name">{{comment.username}}</span>
        <div class="date">{{comment.rateTime | formatDate}}</div>
      </div>
      <div class="score">
        <Stars :size="24" :score="comment.score"></Stars>
        <span>{{satisfation}}</span>
      </div>
      <p class="user_comment">{{comment.text}}</p>
      <p class="shop_comment">商家回复：亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！</p>
      <div class="pics">
        <ul>
          <li>
            <img
              src="https://fuss10.elemecdn.com/6/bd/5864422756bad009f567acd426591jpeg.jpeg?imageMogr/format/webp/thumbnail/300x/"
              alt
            />
          </li>
          <li>
            <img
              src="https://fuss10.elemecdn.com/1/06/69c48f9180af9529ce2a37c30100bjpeg.jpeg?imageMogr/format/webp/thumbnail/300x/"
              alt
            />
          </li>
          <li>
            <img
              src="https://fuss10.elemecdn.com/6/bd/5864422756bad009f567acd426591jpeg.jpeg?imageMogr/format/webp/thumbnail/300x/"
              alt
            />
          </li>
          <li>
            <img
              src="https://fuss10.elemecdn.com/1/06/69c48f9180af9529ce2a37c30100bjpeg.jpeg?imageMogr/format/webp/thumbnail/300x/"
              alt
            />
          </li>
        </ul>
      </div>
      <div class="foods">
        <i class="iconfont iconzan-copy-copy"></i>
        <span v-for="(item, index) in comment.recommend" :key="index">{{item}}</span>
      </div>
    </div>
  </li>
</template>
<script>
import Stars from "../Stars/Stars";
export default {
  name: "Comment",
  props: {
    comment: Object
  },
  components: {
    Stars
  },
  computed: {
    satisfation() {
      //满意度---由评分所得
      let satisTxt = "";
      const score = this.comment.score * 10;
      if (score >= 40) {
        satisTxt = "非常满意";
      } else if (score >= 30) {
        satisTxt = "满意";
      } else if (score >= 20) {
        satisTxt = "还不错";
      } else {
        satisTxt = "一般";
      }
      return satisTxt;
    }
  },
  filters:{
    formatDate(str){
      return new Date(str).toLocaleDateString()
    }
  }
};
</script>
<style lang="scss" scoped>
.Comment {
  width: 100%;
  border-top: 1px solid #eee;
  padding-left: 3.3rem;
  padding-top: 0.7rem;
  position: relative;
  .avat {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 1rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    & > * {
      margin: 0.4rem 0;
    }
    .name_date {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
      }
      .date {
        color: #adacad;
      }
    }
    .score {
      color: #fb9e20;
      display: flex;
      span {
        margin-left: 0.5rem;
      }
    }
    .user_comment {
      color: #343434;
    }
    .shop_comment {
      background-color: #f3f3f3;
      color: #4b4b4b;
      padding: 1rem;
      line-height: 1.3rem;
      border-radius: 0.3rem;
    }
    .pics {
      width: 100%;
      overflow: hidden;
      ul {
        width: 300vw;
        display: flex;
        align-items: center;

        li {
          margin-right: 0.3rem;
          img {
            height: 12rem;
            width: 12rem;
          }
        }
      }
    }
    .foods {
      display: flex;
      align-content: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      & > * {
        margin: 0.1rem;
      }
      i {
        margin-right: 0.5rem;
        margin-top: 0.4rem;
        &::before {
          color: #999;
        }
      }
      span {
        background: #eaf5ff;
        color: #999;
        padding: 0.5rem;
        border-radius: 0.2rem;
      }
    }
  }
}
</style>
