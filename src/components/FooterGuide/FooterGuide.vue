<template>
    <footer class="FooterGuide">
        <router-link to="/msite">
            <i class="iconfont iconchangyonglogo40"></i>
            <span>首页</span>
        </router-link>
         <router-link to="/search">
            <i class="iconfont iconfaxian"></i>
            <span>发现</span>
        </router-link>
         <router-link to="/order">
            <i class="iconfont iconicon-"></i>
            <span>订单</span>
        </router-link>
         <router-link to="/profile">
            <i class="iconfont iconwode-copy-copy"></i>
            <span>我的</span>
        </router-link>
    </footer>
</template>
<script>
export default {
    name:'FooterGuide'
    
}
</script>
<style lang="scss" scoped>
.FooterGuide{
    width: 100%;
    height: 4.5rem;
    border-top: 1px solid #eee;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        padding: 6px 0;
        
    }
    .router-link-active{
        color: #0185FF;
    }

}

</style>
