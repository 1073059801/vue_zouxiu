<template> 
<div class="cart">
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
                    <i class="img" v-if = "img" @click="SelectedImg">
                        <!-- <img src="../../assets/timg (1).jpg" alt=""> -->
                    </i>
                    <i class="img_2" v-else @click="SelectedImg">

                    </i>
                </div>
                <span>全选</span>
            </li>
            <li v-for="ele in cartData" :key="ele.p_name">
                <div class="left" >
                    <i class="img" v-if = "img" @click="backSize">
                        <!-- <img src="../../assets/timg (1).jpg" alt=""> -->
                    </i>
                    <i class="img_2" v-else @click="backSize">

                    </i>
                </div>
                <div class="con">
                    <img :src="ele.img_url" alt="">
                </div>
                <div class="right">
                    <p>{{ele.p_name}}</p>
                    <p>颜色：</p>
                    <p>购买价：￥{{ele.price}}</p>
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
          cartData:[],
          img: true,
          imgSize: true
      }
  },
  methods:{
      getcartData(){
          var uid = JSON.parse(localStorage.userinfo).uid
           var carturl = "http://localhost:8000/api/cart/getListData";
          carturl += "?uid=" + uid  
            this.axios.get(carturl).then(res =>{
            console.log(res.data.cartData)
            this.cartData = res.data.cartData;
            if( this.cartData == '' ){
                this.empty = false
            }else{
                this.empty = true
            }
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
                Toast("加一成功")
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
             ele.number = number;
        var uid = JSON.parse(localStorage.userinfo).uid
        var cart_id = ele.cart_id;
        // console.log(pid)
        var carturl = "http://localhost:8000/api/cart/changeNumber"
        var params = "uid=" + uid + "&cart_id=" + cart_id + "&number=" + number
        this.axios.post(carturl,params).then(res => {
            // console.log(res.data)
            if( res.data.msgCode == 1 ){
                Toast("减一成功")
            }else{
                Toast("GG")
            }
        })
      },
      Delete(ele){ //  删除商品
           MessageBox.confirm('确定执行此操作?').then(action => {
                MessageBox({
                    title: '提示',
                    message: '确定删除此商品?',
                    showCancelButton: true
                });
    
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
      SelectedImg(event){//点击全选反选
      var imgdata = document.getElementsByClassName ("img_2")
      console.log(imgdata)
          if( this.img == true ){
              this.img = false
              imgdata.style.backgroundPositionX = "-26px";
          }else{
              this.img = true
              imgdata.style.backgroundPositionX = "0px";
          }
      },
      backSize(event){
          if( this.imgSize == true ){
            event.target.style.backgroundPositionX = "-26px";
            this.imgSize = false;
          }else{ 
               event.target.style.backgroundPositionX = "0px";
              this.imgSize = true;
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
        height: 500px;
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
                height: 120px;
                background: #fff;
                display: flex;
                justify-content: space-between;
                border: 1px solid #f6f6f8;
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
                    p:nth-child(1){
                        color: #000000;
                    }
                     p{
                        color: #999;                        
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
        height: 50px;
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
}
</style>


