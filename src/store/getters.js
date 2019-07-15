export default {

    totalPrice(state){          //购物车内商品总价格
        const {shopCar}=state
        let result=shopCar.reduce((sum,food)=>{
            return sum+=food.price * food.selectCount
        },0)
        return result
    },
    totalNumber(state){        //购物车内商品总数量
        const {shopCar}=state
        let result=shopCar.reduce((sum,food)=>{
            return sum+=food.selectCount
        },0)
        return result
    }
}