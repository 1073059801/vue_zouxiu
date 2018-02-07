
<template>
   <div class="sett" id="container">
       <lh-header>
        <a href="javascript:window.history.go(-1);" slot="left" class="iconfont icon-zuo left"></a>
        <!-- a href="javascript:window.history.go(-1);" -->
        <div slot="content" id="header_content">
            <p>确认订单</p>
        </div>
        <i slot="right" class="iconfont icon-msnui-more" ></i>
    </lh-header>
     <lh-content>
        <ul class="sett_content">
            <li>
                <div class="left">

                </div>
                <div class="content">
                    <ul>
                        <li v-for="ele in setData" :key="ele.p_name">
                            <img :src="ele.img_url" alt="">
                        </li>
                    </ul>
                </div>
                <div class="right right_num">
                    <p>......共<span>{{number}}</span>件商品</p>
                </div>
            </li>
            <li>
                <div class="left">
                    
                </div>
                <div class="content">

                </div>
                <div class="right">
                    <i class="iconfont icon-you"></i>
                </div>
            </li>
            <li>
                <div class="left">
                    <p>使用优惠</p>
                </div>
                <div class="content">

                </div>
                <div class="right">
                    <i class="iconfont icon-you"></i>
                </div>
            </li>
            <li>
                <div class="left">
                    <p>商品总金额： <span>￥{{Or_price}}</span> </p>
                    <p>运费 <span>￥0</span> </p>
                    <p>优惠金额 <span>￥{{Discount}}</span> </p>
                    <p>虚拟账户支付 <span>￥0</span> </p>
                    <p class="sum">还需要支付额 <span>￥{{Total}}</span> </p>
                </div>
                <div class="content">

                </div>
            </li>
            <button @click="payment_btn()">
                立即支付
            </button>
        </ul>
        <div class="home_footer">
            <div class="top">
                <p>触屏版</p>
                <p>电脑版</p>
            </div>
            <div class="bottom">
                <p>© 2018 走秀网</p>
            </div>
        </div>
     </lh-content>
   </div>
</template>

<script>
import { MessageBox } from 'mint-ui';

export default {
  data(){
      return{
          setData: [],
          number: '',   //件数
          Or_price: '',  //原价
          Total: '',     //应付
          Discount:'',   //优惠
      }
  },
  methods:{
      getSettData(){
          var uid = JSON.parse(localStorage.userinfo).uid
          var carturl = "http://localhost:8000/api/cart/getListData";
          carturl += "?uid=" + uid  
          var num = 0;   //件数
          var orprice = 0; // 原价
          var copeWith = 0;  //应付
          var dis = 0;
          this.axios.get(carturl).then(res => {
              res.data.cartData.forEach(ele =>{
                  console.log(ele)
              })
              this.setData = res.data.cartData
              for( var ele of this.setData ){
                num += ele.number   //  件数
                orprice += ele.number * 1 * ele.or_price;  //总额
                copeWith += ele.number * 1 * ele.price;  // 应付
                dis = orprice - copeWith  //优惠
                console.log(this.number)
              }
              this.number = num   //件数
              this.Or_price = orprice  //总额
              this.Total = copeWith   //应付
              this.Discount = dis  //优惠
          })
      },
      payment_btn(){

          MessageBox.prompt('请输入支付密码').then(({ value, action }) => {
                this.$router.push("/address") 

                // var uid = JSON.parse(localStorage.userinfo).uid
                // var cart_id = ele.cart_id;
                // var carturl = "http://localhost:8000/api/cart/removeItem"
                // var params = "uid="+ uid + "&cart_id="+ cart_id
                // sthis.axios.post(carturl,params).then(res => {
                // console.log(res.data)
                // if( res.data.msgCode == 1 ){
                    
                // }else{
                //     Toast("GG")
                // }
            // })
        });
    }

  },
  mounted(){
      this.getSettData()
  }
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
.sett{
    .header{
        background: #f0f0f0;
        .iconfont{
            color: #999;
        }
    }
    .content{
        text-align: center;        
        .sett_content{
             padding: 10px 0 0;
            li{
                padding: 10px 10px;
                border-top:1px solid #efefef; 
                border-bottom:1px solid #efefef; 
                margin-top: 15px;
                display: flex;
                justify-content: space-between;
                .left{
                    text-align: left;
                    p:nth-child(5){
                        span{
                            color: #d2041f;
                            font-weight: 900;
                        }
                    }
                }
                .content{
                    flex: 1;
                    height: 100%;
                    ul{
                        display: -webkit-box;
                        overflow-y: auto;
                        flex-wrap: nowrap;
                        li{
                            margin-top: 0px;
                            height: 110px;
                            width: 30%;
                            padding: 0px 0px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }  
                }
                .right{
                    
                }
                .right_num{
                    line-height: 110px;
                }
            }
        }
    }
    button{
        width: 90%;
        height:40px;
        background: #d2041f;
        border-radius: 5px;
        border: none;
        margin-top: 10px;
        color: #f6f6f8;
    }
    .home_footer{
        width: 100%;
        height: 96  px;
        background: #fff;
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
