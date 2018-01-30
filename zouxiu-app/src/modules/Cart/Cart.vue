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
        <div class="empty" v-if="empty">
            <img src="../../assets/shopping_cart.png" alt="">
            <p>您的购物车空空如也...</p>
            <router-link to="/" class="button">
                去逛逛
            </router-link>
        </div>
        <ul class="no_empty" v-else>
            <li v-for="ele in cartData" :key="ele.p_name">
                <div class="left">
                    <i>
                        <img src="../../assets/logo.png" alt="">
                    </i>
                </div>
                <div class="con">
                    <img :src="ele.img_url" alt="">
                </div>
                <div class="right">
                    <p>{{ele.p_name}}</p>
                    <p>颜色：</p>
                    <p>购买价：￥{{ele.price}}</p>
                    <p>数量：</p>
                </div>
                <div class="delete">
                    <i class="iconfont icon-shanchu"></i>
                </div>
            </li>
        </ul>
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
export default {
  data(){
      return {
          empty: true,
          cartData:[]
      }
  },
  methods:{
      getcartData(){
          var uid = JSON.parse(localStorage.userinfo).uid
           var carturl = "http://localhost:8000/api/cart/getListData";
          carturl += "?uid=" + uid  
          this.axios.get(carturl).then(res =>{
            this.empty = false
              console.log(res.data.cartData)
              this.cartData = res.data.cartData;
          })
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

            li{
                height: 120px;
                background: #fff;
                display: flex;
                justify-content: space-between;
                border: 1px solid #f6f6f8;
                padding: 10px 10px;
                
                .left{
                    width: 10%;
                    line-height: 100px;
                    i{
                        width: 20px;
                        height: 20px;
                        border: 1px solid #f6f6f8;
                        background: red;
                        display: inline-flex;
                        border-radius: 50%;
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: 100%;
                        }
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


