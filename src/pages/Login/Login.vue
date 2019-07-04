<template>
  <div class="Login">
    <span class="btn_back iconfont iconicondayu" @click="$router.back()"></span>
    <h1 class="title">硅谷外卖</h1>
    <p class="sub_title">
      <span class="btn_sms active">短信登录</span>
      <span class="btn_pass">密码登录</span>
    </p>
    <form action="#" class="sms_login">
      <div class="phone_number">
        <input type="text" placeholder="手机号">
        <button>获取验证码</button>
      </div>
      <div class="verify_number">
        <input type="text" placeholder="验证码">
      </div>
      <label>温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意<span>《用户服务协议》</span></label>
      <button class="btn_login">登录</button>
    </form>

    <button class="btn_about">关于我们</button>
  </div>
</template>
<script>
export default {
  name: "Login"
};
</script>
<style lang="scss" scoped>
    .Login{
        padding: 5px 10px;
        .btn_back{
            transform: rotate(180deg)          
        }
        .title{
            font-size: 3.5rem;
            font-weight: 900;
            text-align: center;
            margin-top: 40px;
            color: #00A774;
        }
        .sub_title{
            margin-top: 30px;
            text-align: center;
            margin-bottom: 10px;
            span{
                margin: 5px 20px;
                color: #333;
                font-size: 1.4rem;
                font-weight: 500;
                padding-bottom: 5px;
                &.active{
                    color: #00A774;
                    border-bottom: 2px solid #00A774;
                }
            }

        }
        form{
            padding: 10px 30px;
            font-size: 1.4rem;
            &>div{
                width: 100%;
                height: 4rem;
                margin-bottom: 20px;
                position: relative;
                input{
                    width: 100%;
                    height: 100%;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    color: #666;
                    padding-right:100px;
                    text-indent: 1em;
                    &:focus{
                        border-color: #00A774;
                    }
                }
            }
            .phone_number{
                button{
                    color: #ddd;
                    position: absolute;
                    right: 15px;
                    top: 50%;
                    transform: translateY(-50%)
                }
            }
            .verify_number{
                
            }
            label{
                color: #999;
                line-height: 1.6rem;

                span{
                    color: #00A774;
                }
            }
            .btn_login{
                width: 100%;
                border-radius: 5px;
                height: 4rem;
                background-color: #4BD96E;
                color: #fff; 
                margin: 30px 0 10px; 
                font-size: 1.4rem;
                border: none;
                outline: none;             
            }

        }
        .btn_about{
            font-size: 1.2rem;
            color: #999;
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }
</style>
