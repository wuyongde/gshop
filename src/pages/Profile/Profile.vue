<template>
    <div class="Profile">
        <TopArea top_title='我的'></TopArea>
        <div class="user_info" @click="$router.push('/Login')">
            <img src="" alt="">
            <div>
                <span class="top" v-if="user_info._id">{{user_info.name || user_info.phone}}</span>
                <span class="top" v-else>登录/注册</span>
                <span class="bottom" v-show="!user_info.phone"><i class="iconfont iconshouji"></i>暂无绑定手机号</span>
            </div>
            <i class="iconfont iconicondayu"></i>
        </div>
    
  </div>
</template>
<script>
import TopArea from '../../components/TopArea/TopArea'
import {mapState} from 'vuex'
export default {
    name:'Profile',
    components:{
        TopArea
    },
    computed: {
        ...mapState(['user_info'])
    },
    
}
</script>
<style lang="scss" scoped>
.Profile{
    background-color: #F5F5F5;
    padding-top: 4rem;
    .user_info{
        width: 100%;
        height: 9rem;
        background-color: #00A774;
        border-top: 1px solid #F5F5F5;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>img{
            width: 5rem;
            height: 5rem;
            background-color: #999;
            border-radius: 50%;
        }
        &>div{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            
            height: 100%;
            width: 70%;
            padding: 9px 0;
            .top{
                font-size: 1.8rem;
                font-weight: 600;
                color: #fff;
            }
            .bottom{
                font-size: 1.3rem;
                color: #eee;
            }

        }
        &>i{
            color: #fff;
        }

    }

}
</style>
