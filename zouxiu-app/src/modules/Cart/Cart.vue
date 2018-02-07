<template> 
<div class="cart" id="container">
    <lh-header>
        <a href="javascript:window.history.go(-1);" slot="left" class="iconfont icon-zuo left"></a>
        <!-- a href="javascript:window.history.go(-1);" -->
        <div slot="content" id="header_content">
            <p>购物车</p>
        </div>
        <i slot="right" class="right">
            编辑
        </i>
    </lh-header>
    <lh-content>
        
        <ul class="no_empty" v-if="empty">
            <li class="top">
                <div class="left">
                    <i class="img" :class="[allSelected?'cur2':'']" @click="SelectedImg()"></i>
                </div>
                <span>全选</span>
            </li>
            <li v-for="(ele, index) in cartData" :key="ele.p_name" class="li">
                <div class="left" >
                    <i class="img" @click="backSize({index,ele})" :class="[ele.isSelect?'cur':'']">
                    </i>
                </div>
                <div class="con">
                    <img :src="ele.img_url" alt="">
                </div>
                <div class="right">
                    <p>{{ele.p_name}}</p>
                    <p>颜色：</p>
                    <p>购买价：￥{{ele.price}} <span>￥{{ele.or_price}}</span> </p>
                    <p>应付价：￥{{ele.price* 1 *ele.number}}</p>
                    <div class="Counter">
                        数量：<div class="Counter_1">
                            <button @click="reduce(ele)">-</button>
                            <span>{{ele.number}}</span>
                            <button @click="plus(ele)">+</button>
                        </div>
                    </div>
                </div>
                <div class="delete" @click="Delete(ele)">
                    <i class="iconfont icon-shanchu"></i>
                </div>
            </li>
        </ul>
        <div class="empty" v-else>
            <img src="../../assets/shopping_cart.png" alt="">
            <p>您的购物车空空如也...</p>
            <router-link to="/" class="button">
                去逛逛
            </router-link>
        </div>
        
    </lh-content>
    <div class="home_footer">
        <div class="top">
            <p>触屏版</p>
            <p>电脑版</p>
        </div>
        <div class="bottom">
            <p>© 2018 走秀网</p>
        </div>
    </div>
    <div class="footer">
        <div class="left">
            <p>应付总金额：<span>￥{{total.price}}</span></p>
            <p>已优惠<span>￥{{total.discount}}</span></p>
            <p>商品总金额：<span>￥{{total.orprice}}</span></p>
        </div>
         <div class="right"> <!--@click="Settlement()" -->
            <router-link to="/sett" >
                <p>结算(<span>{{total.num}}件</span>)</p>
            </router-link>
        </div>
    </div>
</div>
       
</template>

<script>
import qs from 'qs'
import {Toast} from 'mint-ui'
import { MessageBox } from 'mint-ui';
export default {
  data(){
      return {
          empty: false,
          one:[],
          cartData:[],
          Total: '',     //应付
          Discount:'',   //优惠
          Or_price:'',     //原价
          pieceData:[],
          number: '',
          choose: true
      }
  },
  methods:{
      getcartData(){
          var uid = JSON.parse(localStorage.userinfo).uid
          var carturl = "http://localhost:8000/api/cart/getListData";
          carturl += "?uid=" + uid  
            this.axios.get(carturl).then(res =>{
                //  this.cartData = res.data.cartData
                 res.data.cartData.forEach((item)=>{
                    item.isSelect = true;
                    this.cartData.push(item)
                    console.log(this.cartData)
                if( !item.isSelect ){
                    this.choose = false
                }
            })
            if( this.cartData == '' ){  //判断 购物车 是否 有商品
                this.empty = false
            }else{
                this.pieceData = this.cartData.length
                this.empty = true
                // var copeWith = 0;
                // var orprice = 0;
                // var dis = 0;
                // var piece = 0;
                // for( var item of this.cartData ){
                //     copeWith += item.number * 1 * item.price;  // 应付
                //     orprice += item.number * 1 * item.or_price;  //总额
                //     dis = orprice - copeWith  //优惠
                //     piece += item.number  //件数
                // }
                // // console.log(dis) // 优惠

                // this.Total = copeWith
                // this.Or_price = orprice
                // this.Discount = dis
                // this.number = piece
                // console.log(this.number)
            }
          })
          return{
              
          }
      },
      SelectedImg(){  //点击全选反选
            console.log(this.cartData)
            this.choose = !this.choose
            this.cartData.forEach((ele)=>{
                ele.isSelect = this.choose
            })
        },
      plus(ele){//   console.log("加")
          var number = ele.number * 1 + 1;
        //   console.log(number)
        if( number == 0 ){
            number += 1;
            return
        }
        ele.number = number;    
        var uid = JSON.parse(localStorage.userinfo).uid
        var cart_id = ele.cart_id;
        // console.log(pid) 
        var carturl = "http://localhost:8000/api/cart/changeNumber"
        var params  = "uid=" + uid + "&cart_id=" + cart_id + "&number="+ number
        this.axios.post(carturl,params).then(res => {
            // console.log(res.data)
            if( res.data.msgCode == 1 ){
                // Toast("加一成功")
                // this.Total += ele.price * 1
                // this.Or_price += ele.or_price * 1
                // this.Discount += ele.or_price * 1 - ele.price * 1
                // this.number += 1
                // console.log(this.Discount)
            }else{
                Toast("GG")
            }
        })
      },
      reduce(ele){//   console.log("减")
          var number = ele.number * 1 - 1;
            if( number == 0 ){
                number += 1;
                return
            }
        //   console.log(number)
        ele.number = number;
        var uid = JSON.parse(localStorage.userinfo).uid
        var cart_id = ele.cart_id;
        var numb = 0;
        // console.log(pid)
        var carturl = "http://localhost:8000/api/cart/changeNumber"
        var params = "uid=" + uid + "&cart_id=" + cart_id + "&number=" + number
        this.axios.post(carturl,params).then(res => {
            // console.log(res.data)
            if( res.data.msgCode == 1 ){
                // Toast("减一成功")
                // this.Total -= ele.price * 1
                // this.Or_price -= ele.or_price * 1
                // numb += ele.or_price * 1 - ele.price * 1
                // console.log(numb)
                // this.Discount -= numb
                // this.number -= 1
            }else{
                Toast("GG")
            }
        })
      },
      Delete(ele){ //  删除商品
           MessageBox.confirm('确定删除此商品?').then(action => {            
                var uid = JSON.parse(localStorage.userinfo).uid
                var cart_id = ele.cart_id;
                var carturl = "http://localhost:8000/api/cart/removeItem"
                var params = "uid="+ uid + "&cart_id="+ cart_id
            this.axios.post(carturl,params).then(res => {
                console.log(res.data)
                if( res.data.msgCode == 1 ){
                    
                    location.reload() // 页面刷新
                }else{
                    Toast("GG")
                }
            })
        });
      },
      backSize({index, ele}){  // 点击改变 全选背景图  单选//state.cartData[index].selected = !state.cartData[index].selected
    
        ele.isSelect = !ele.isSelect
      },
      Settlement(){  //点击结算
        // var uid = JSON.parse(localStorage.userinfo).uid
        // var cate_id = 2
        // var settUrl = "http://localhost:8000/api/order/submitOrder";
        // var params = "uid=" + uid 
        // this.axios.post(settUrl, params).then(res => {
        //     console.log(res)
        // })
      }
    },
     computed:{   //  监听
        allSelected(){
            var selected = true
            this.cartData.forEach((item)=>{
                if(!item.isSelect){
                    console.log()
                    selected = false
                }
            })
            return selected
        },
        total(){
            var price = 0;
            var num = 0;
            var orprice = 0;
            var discount = 0;
             this.cartData.forEach((ele)=>{
                // console.log(ele)
                if( ele.isSelect ){
                    console.log(ele.p_name)
                    // console.log(ele.price)
                    // console.log(ele.or_price)
                    // console.log(ele.number)
                    discount += ele.or_price * ele.number - ele.price * ele.number;
                    num += ele.number;
                    price += ele.price * num; 
                    orprice += ele.or_price * num;
                    
                    console.log(discount)
                    // console.log(orprice)
                    // this.Total = price;
                    // this.Or_price = orprice * num;
                    // this.Discount = this.Or_price - this.Total;
                    // this.number = num
                }
            })
            return {
                price, num, orprice, discount
            }
        }
        
  },
  mounted(){
      this.getcartData()
  }
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
.cart{
    .header{
        background: #f0f0f0;
        font-size: 16px;
        border-bottom: 1px solid #999;
        .left{
            color: #999
        }
        .right{
            color: #d2041f;
        }
    }
    .content{
        background: #f0f0f0;
        height: 470px;
        padding: 20px 0;
        .empty{
            height: 200px;
            text-align: center;
            padding: 30px 0;
            img{
                width: 100px;
                height: 100px;
            }
            p{
                color: #999;
                margin-top: 10px;
            }
            .button{
                display:inline-table;
                line-height: 40px;
                width: 80%;
                height: 40px;
                background: #d2041f;
                border: none;
                color: #fff;
                margin-top: 20px;
                border-radius: 10px;
            }
        }
        .no_empty{
            .top{
                height: 30px;
                display:block;
                padding: 0px;
                height: 35px;
                .left{
                    float: left;
                    .img{
                    // background: url("../../assets/timg.jpg") -26px 0px;
                    }
                    .cur2{
                        background-position-x:-26px; 
                    }
                }
                i{
                    float: left;
                }
                span{
                    float: left;
                    margin-top: 7px;
                }
                
            }
            li{
                height: 133px;
                background: #fff;
                display: flex;
                justify-content: space-between;
                border: 1px solid rgb(241, 232, 232);
                padding: 10px 10px;
                align-items: center;
                .left{
                    width: 10%;
                    height: 30px;
                    // line-height: 100px;
                    .img{
                        width: 30px;
                        height:30px;
                        // border: 1px solid #999;
                        display: inline-flex;
                        // border-radius: 50%;
                        overflow: hidden;
                        background: url("../../assets/timg.jpg") 0px 0px;
                        background-size: 114px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .cur{
                        background-position-x:-26px; 
                    }
                    .img_2{
                         width: 30px;
                        height: 30px;
                        // border: 1px solid #999;
                        display: inline-flex;
                        // border-radius: 50%;
                        overflow: hidden;
                        background: url("../../assets/timg.jpg") -26px 0px;
                        background-size: 114px;
                    }
                }
                .con{
                    width: 25%;
                    padding: 0px 0;
                   
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .right{
                    padding: 0 20px;
                    flex: 1;
                    text-align:left;
                    p:nth-child(1){
                        color: #000000;
                    }
                     p{
                        color: #999;      
                        span{
                            font-size: 10px;
                            text-decoration: line-through;
                            margin-left: 10px;
                        }                  
                    }
                }
                .delete{
                    line-height: 100px;
                    i{
                        display: inline-flex;
                    }                    
                }
                .Counter{
                    display: flex;
                    align-items: center;
                    color: #999;
                    .Counter_1{
                        display: flex;
                        width: 100px;
                        border: 1px solid #999;
                        margin-left: 10px;
                        button{
                            width: 30%;
                            height:100%;
                            background: #fff;
                            border: none;
                            font-size: 18px;
                            background: #999;
                            color: #fff;
                        }
                        span{
                            width: 40%;
                            text-align: center;
                            border-left: 1px solid #999;
                            border-right: 1px solid #999;
                            line-height: 27px;
                        }
                    }
                }
            }
            .jia{
                height: 100px;
            }
        }
    }
    .home_footer{
        width: 100%;
        height: 96  px;
        background: #f6f6f8;
        padding: 20px 0px;
        font-size: 12px;
        color:#666;
        .top{
            width: 100%;
            
            display: flex;
            justify-content: center;
            text-align: center;
            p{
                width: 100px;
               
            }
            p:nth-of-type(1){
                border-right: 1px solid #999;
            }
        }
        .bottom{
            width: 100%;
            margin-top: 10px;
            p{
                text-align: center;
            }
        }
    }
    .footer{
        height: 66px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        .left{
            text-align: left;
            p{
                color: #666;
            }
            span{
                color: red;
            }
            p:nth-child(2){
                color: #999;
                span{
                    color: #999;
                }
            }
            p:nth-child(3){
                color: #999;
                span{
                    color: #999;
                    text-decoration: line-through;
                }
            }
        }
        .right{
            height: 100%;
            width: 108px;
            background: red;
            text-align: center;
            line-height: 66px;
            a{
                font-size:20px;
                color: #fff;
            }
        }
    }
}
</style>


