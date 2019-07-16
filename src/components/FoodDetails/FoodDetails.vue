<template>
    <div class="FoodDetails">
        <div class="food_img">
            <img v-lazy="food.image" alt="">
            <span class="btn_close" @click="close">x</span>
        </div>
        <div class="food_info">
            <h3 class="title">{{food.name}}</h3>
            <p class="numbers">月售{{food.sellCount}}份 好评率{{food.rating}}%</p>
            <p class="price">
                <span class="now">${{food.price}}&nbsp;&nbsp; </span>
                <span class="old">${{food.oldPrice}}</span>
                <span class="zekou">&nbsp;&nbsp;7.4折 每单限1份优惠</span>
            </p>
            <p class="raw">{{food.info}}</p>
            <BtnAddFood :food="food"></BtnAddFood>
        </div>
    </div>
</template>
<script>
import BtnAddFood from '../../components/BtnAddFood/BtnAddFood'
export default {
    name:'FoodDetails',
    props:{
        close:Function,
        food:Object
    },
    components:{
        BtnAddFood
    }
}
</script>
<style lang="scss" scoped>
.FoodDetails{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    .food_img{
        width: 100%;
        height: 100vw;
        img{
            width: 100%;
            height: 100vw;
        }
        span{
            width: 2.5rem;
            height: 2.5rem;
            text-align: center;
            line-height: 2.5rem;
            font-size: 2rem;
            background-color: #CCCCCC;
            border-radius: 50%;
            color: #fff;
            position: absolute;
            right: 1.3rem;
            top: 0.7rem;
        }
    }
    .food_info{
        padding: 1.5rem;
        position: relative;
        &>*{
            margin-bottom: 1rem;
        }
        .title{
            font-size: 2rem;
            font-weight: bold;
            color: #333;
        }
        .numbers{
            color: #999;
        }
        .price{

            .now{
                font-size: 1.3rem;
                color:#FF563F; 
            }
            .old{
                color: #999;
                text-decoration: line-through;
            }
            .zekou{
                color:#FF563F; 
            }
        }
        .raw{
            color: #999;
        }
        .BtnAddFood{
            position: absolute;
            top: 6rem;
            right: 1rem;
        }
    }
}
</style>
