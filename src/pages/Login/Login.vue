<template>
  <div class="Login">
    <span class="btn_back iconfont iconicondayu" @click="$router.back()"></span>
    <h1 class="title">硅谷外卖</h1>
    <p class="sub_title">
      <span class="btn_sms" :class="{active:active_class_flag}" @click="active_class_flag=true">短信登录</span>
      <span
        class="btn_pass"
        :class="{active:!active_class_flag}"
        @click="active_class_flag=false"
      >密码登录</span>
    </p>
    <form action="#" class="user_login">
      <section class="sms_login" :class="{active:active_class_flag}">
        <div class="phone_number">
          <input type="text" placeholder="手机号" v-model="phone" />
          <button
            :class="{right_phone_class:right_phone}"
            @click.prevent="get_verify_number"
            :disabled="!right_phone"
            v-html="btn_verify_number_text"
          ></button>
        </div>
        <div class="verify_number">
          <input type="text" placeholder="验证码" v-model="code" />
        </div>
        <label>
          温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
          <span>《用户服务协议》</span>
        </label>
      </section>
      <section class="pass_login" :class="{active:!active_class_flag}">
        <div class="user_name">
          <input type="text" placeholder="手机/邮箱/用户名" v-model="name" />
        </div>
        <div class="user_pass">
          <input type="text" v-if="show_pass" v-model="pwd" />
          <input type="password" placeholder="密码" v-else v-model="pwd" />
          <button @click.prevent="show_pass=!show_pass" :class="{class_showmsg:show_pass}">
            abc
            <i :class="{class_showmsg:show_pass}"></i>
          </button>
        </div>
        <div class="auth_code">
          <input type="text" placeholder="验证码" v-model="captcha" />
          <img src="http://localhost:8000/captcha" alt="校验码" ref="captcha" @click="get_captcha" />
        </div>
      </section>
      <button class="btn_login" @click.prevent="login">登录</button>
    </form>

    <button class="btn_about">关于我们</button>
    <AlertTips v-show="show_AlertTips" :msg_str="msg_str" @close_msg="close_msg"></AlertTips>
  </div>
</template>
<script>
import AlertTips from "../../components/AlertTips/AlertTips";
import {
  req_sms_veriyNumber,
  req_sms_login,
  req_user_login
} from "../../api/index"; //引入api接口模块（ajax请求函数模块）
export default {
  name: "Login",
  data() {
    return {
      active_class_flag: true,
      btn_verify_number_text: "获取验证码",
      timerId: null,
      show_pass: false,
      phone: "", //手机号
      code: "", //短信验证码
      name: "", //用户名
      pwd: "", //密码
      captcha: "", //校验码
      show_AlertTips: false, //是否显示错误提示框
      msg_str: "" //错误提示文本
    };
  },
  components: {
    AlertTips
  },
  computed: {
    right_phone() {
      return /^1\d{10}$/.test(this.phone);
    },
  },
  methods: {
    //   获取验证码
    get_verify_number() {
      // 倒计时
      if (this.timerId) {
        return;
      }
      let that = this;
      let i = 10;
      that.timerId = setInterval(() => {
        if (i === -1) {
          that.btn_verify_number_text = `获取验证码`;
          clearInterval(that.timerId);
          that.timerId = null;
          return;
        }
        that.btn_verify_number_text = `剩余<i>${i}</i>秒`;
        i--;
      }, 1000);
      // 索取验证码---发送ajax请求
      req_sms_veriyNumber(Number(this.phone), (err, data) => {
        // console.log('111')
        if (err || data == 1) {
          that.fn_show_AlertTips("短信发送失败！");
          // 发送失败后，清空倒计时定时器
          clearInterval(that.timerId);
          that.timerId = null;
          return;
        }
        that.fn_show_AlertTips("短信发送成功！");
      });
    },

    // 用户登录
    login() {
      let that = this;
      // 先校验前端表单数据（收集表单数据并在提交前校验）
      if (this.active_class_flag) {
        // 表明当前是短信登录
        const { right_phone, code } = this;
        if (!right_phone) {
          // console.log('手机号不正确')
          this.fn_show_AlertTips("手机号不正确");
        } else if (!/^\d{4}$/.test(code)) {
          // console.log('短信验证码不正确')
          this.fn_show_AlertTips("短信验证码必须为4位数字");
        } else {
          // 手机号与验证码格式校验通过，发送登录的ajax请求
          req_sms_login(Number(that.phone), Number(that.code), (err, data) => {
            if (err || data.code === 1) {
              that.fn_show_AlertTips("登录失败，手机号或验证码错误");
              return;
            }
            // 否则，登录成功
            // that.fn_show_AlertTips("登录成功！" + data.data._id);
            that.$store.dispatch("set_user_info", data.data); //更新state中的登录用户信息
            that.$router.replace("/profile"); //跳转到个人信息页
          });
        }
      } else {
        // 表明当前是用户名密码登录
        // 发送登录验证请求
        req_user_login(this.name, this.pwd, this.captcha, (err, data) => {
          if (err || data.code === 1) {
            that.fn_show_AlertTips("登录失败，用户名、密码或校验码有误");
            return;
          }
          // 否则，登录成功
          that.$store.dispatch("set_user_info", data.data); //更新state中的登录用户信息
          that.$router.replace("/profile"); //跳转到个人信息页
        });
      }
    },
    // 关闭弹出的错误提示框
    close_msg() {
      this.show_AlertTips = false;
      this.msg_str = "";
    },
    // 弹出错误提示框的通用函数
    fn_show_AlertTips(msg_str) {
      this.show_AlertTips = true;
      this.msg_str = msg_str;
    },
    // 重新获取校验码
    get_captcha() {
      this.$refs.captcha.src = "http://localhost:8000/captcha?n=" + Date.now(); //由于src地址一样时不会重发请求，所以这里加了一个变化的查询字符串--技巧
    }
  }
};
</script>
<style lang="scss" scoped>
.Login {
  padding: 5px 10px;
  .btn_back {
    transform: rotate(180deg);
  }
  .title {
    font-size: 3.5rem;
    font-weight: 900;
    text-align: center;
    margin-top: 40px;
    color: #00a774;
  }
  .sub_title {
    margin-top: 30px;
    text-align: center;
    margin-bottom: 10px;
    span {
      margin: 5px 20px;
      color: #333;
      font-size: 1.4rem;
      font-weight: 500;
      padding-bottom: 5px;
      &.active {
        color: #00a774;
        border-bottom: 2px solid #00a774;
      }
    }
  }
  form {
    padding: 10px 30px;
    font-size: 1.4rem;
    section {
      display: none;
      &.active {
        display: block;
      }
      & > div {
        width: 100%;
        height: 4rem;
        margin-bottom: 20px;
        position: relative;
        input {
          width: 100%;
          height: 100%;
          border: 1px solid #ddd;
          border-radius: 5px;
          color: #666;
          padding-right: 100px;
          text-indent: 1em;
          &:focus {
            border-color: #00a774;
          }
        }
      }
    }
    .sms_login {
      .phone_number {
        button {
          color: #ddd;
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          &.right_phone_class {
            color: #333;
            i {
              color: #00a774;
            }
          }
        }
      }
      .verify_number {
      }
      label {
        color: #999;
        line-height: 1.6rem;

        span {
          color: #00a774;
        }
      }
    }
    .pass_login {
      .user_name {
        input {
        }
      }
      .user_pass {
        position: relative;
        input[type="password"] {
        }
        input[type="text"] {
        }
        button {
          outline: none;
          border: none;
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 4rem;
          height: 2rem;
          text-align: left;
          background-color: #eee;
          border-radius: 1rem;
          &.class_showmsg {
            background-color: #4bd96e;
            color: #fff;
          }
          i {
            width: 2rem;
            height: 2rem;
            background-color: #ddd;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 0;
            transition: all 300ms ease;
            &.class_showmsg {
              left: 2rem;
            }
          }
        }
      }
      .auth_code {
        position: relative;
        input {
          padding-right: 50%;
        }
        img {
          position: absolute;
          right: 0.3rem;
          top: 50%;
          transform: translateY(-50%);
          height: 90%;
          width: auto;
        }
      }
    }
    .btn_login {
      width: 100%;
      border-radius: 5px;
      height: 4rem;
      background-color: #4bd96e;
      color: #fff;
      margin: 30px 0 10px;
      font-size: 1.4rem;
      border: none;
      outline: none;
    }
  }
  .btn_about {
    font-size: 1.2rem;
    color: #999;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>
