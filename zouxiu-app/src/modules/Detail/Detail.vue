
<template>
   <div class="maam" id="container">
       <lh-header>
           <a href="javascript:window.history.go(-1);" slot="left" class="iconfont icon-zuo left"></a>
           <!-- a href="javascript:window.history.go(-1);" -->
           <div slot="content" id="header_content">
               <mt-navbar v-model="selected">
                    <mt-tab-item id="1">分类</mt-tab-item>
                    <mt-tab-item id="2">品牌</mt-tab-item>
               </mt-navbar>
           </div>
           <i slot="right" class="right">
               <router-link to="/cart" class="iconfont icon-gouwuche">
                    <mt-badge class="num" size="small">{{number}}</mt-badge>
               </router-link>
               <i class="iconfont icon-msnui-more"></i>
           </i>
       </lh-header>
     <lh-content>
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                 <div class="swipe-wrapper">
                    <mt-swipe :auto="0">
                        <mt-swipe-item v-for="ele in bannerData" :key="ele" class="banner">
                            <img :src="ele" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>

                <div class="contetn">
                    <p>{{detailData.brandName}}</p>
                    <p>{{detailData.goodsName}}</p>
                    <b>￥{{detailData.price}}   <span>￥{{detailData.or_price}}</span> </b>
                    <p style="color:#999;">发货地：{{detailData.address}}</p>
                    <div class="Model">
                        <div class="color">
                            颜色：<p>红色</p><p>蓝色</p>
                        </div>
                        <div class="color size">
                            尺码：<p>均码</p>尺码对照图
                        </div>
                    </div>
                    <div class="basic" @click="basic">
                        <i class="iconfont icon-jibenxinxi"></i>
                        <p>基本信息</p>
                        <i class="iconfont icon-you"></i>
                    </div>
                    <div class="basic_1">
                        <p>商品编号：{{detailData.pro_bh}}</p>
                        <p>服务：{{detailData.fuwu}}</p>
                        <p>商品尺寸：{{detailData.chicun}}</p>
                    </div>
                    <div class="basic">
                        <i class="iconfont icon-iconfontpinglun"></i>
                        <p>商品评论</p>
                        <i class="iconfont icon-you"></i>
                    </div>
                    
                    <div class="shop">
                        <div class="left">
                            <img src="../../assets/logo.png" alt="">
                        </div>
                        <div class="content">
                            <p>Adidas</p>
                            <p>商品：4</p>
                        </div>
                        <span class="right">
                            + 关注
                        </span>
                    </div>
                </div>
                
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul>
                    <li v-for="item in detail_img" :key="item">
                        <img :src="item" alt="">
                    </li>
                </ul>
             </mt-tab-container-item>
        </mt-tab-container>    
     </lh-content>
     <ul class="footer">
         <li class="one">
            <i class="iconfont icon-kefu-tianchong"></i>
            <p>
                客服
            </p> 
         </li>
         <li class="one">
             <i class="iconfont icon-guanzhu00"></i>
             <p>
                 关注
             </p>
         </li>
         <li class="two" @click="addCart()">
             <p>
                 加入购物车
             </p>
         </li>
         <li class="two">
             <p>
                 立即购买
             </p>
         </li>
     </ul>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'mint-ui';
import qs from 'qs'
import { Indicator } from 'mint-ui';
export default {
  data(){
      return{
          detailData:[],
          bannerData:[],
          detail_img:[],
          selected:"1",
          uid: '',
          numData: [],
          number: ''
      }
  },
  methods:{
      getDetailData(){
        var id = this.$route.params.id;
        // console.log(id)
        this.axios.get("http://localhost:8000/api/detail/getDetailData").then(res => {
            // console.log(res)
              if( id == 1 ){                  
                  this.detailData = res.data[0]
                  this.bannerData = eval(res.data[0].content_img)   
                  this.detail_img = eval(res.data[0].detail_img)   
              }else{
                //   console.log(res.data[1]) 
                  this.detailData = res.data[1]
                   this.bannerData = eval(res.data[1].content_img)   
                  this.detail_img = eval(res.data[1].detail_img)           
            }
            // console.log(res.data) 
        })
      },
      basic(event){  //失败 
       
        var box = document.getElementsByClassName("basic_1")
        console.log(box)
        // box.target.style.bannerData = "red"
        event.target.style.height = '100px'
      },
      addCart(){ //加入购物车
          if(localStorage.getItem("userinfo")){
            var uid = JSON.parse(localStorage.userinfo).uid
            var id = this.$route.params.id;   //获取商品信息id
            var carturl = "http://localhost:8000/api/cart/add";
            carturl += "?uid=" + uid + "&pid=" + id + "&number=1"  
            this.axios.get(carturl).then(res => {
                console.log(res)  
                if( res.data.msgCode == 1 ){
                    // Toast("加入购物车成功")
                    Indicator.open({
                        text: '正在加入..',
                        spinnerType: 'fading-circle'
                    })
                     setTimeout(() => {
                        Indicator.close();
                        this.num()
                    },1000)
                        //  Indicator.close();
                          

                    
                }else{  
                    Toast("GG") 
                }
            })
          }else{
               Toast("未登录")
               setTimeout(()=> {
                this.$router.push("/login")
               },1000) 
          }
      },
      num(){
        var num = 0;
        var uid = JSON.parse(localStorage.userinfo).uid
        var carturl = "http://localhost:8000/api/cart/getListData";
        carturl += "?uid=" + uid  
        this.axios.get(carturl).then(res =>{
            console.log(res.data.cartData)
            this.numData = res.data.cartData
            for( var ele of this.numData ){
                num += ele.number
                this.number = num
                console.log(this.number)
            }
        })
    }
  },
  mounted(){
     this.getDetailData()
     this.num()
  }
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
.maam{
    .header{
        border-bottom: 1px solid #d8d8d8;
        background: #f0f0f0;
        .left{
            width: 80px;
            display: block;
        }
        .right{
            display: flex;
            justify-content: space-around;
            width: 80px;
            position: relative;
            .num{
                    position: absolute;
                    top: 6px;right: 37px;
                    background: red;
                    line-height: 15px;
                }
            .iconfont{
                font-size: 20px;
            }
        }
        a{
            color: #000;
        }
        #header_content{
            width: 100px;
            a{
                color: #f66;
                background: #f0f0f0;
            }
            .mint-tab-item.is-selected{
                border-bottom: 2px solid #f66;
            }
        }
    }
    .contetn{
        padding: 0;
        background: #ededf3;
        p{
            background: #fff;
            padding: 5px 10px;text-align: left;
        }
        b{
            padding: 5px 10px;
            font-size: 20px; 
            display: block;
            border-bottom: 2px solid #d8d8d8;
            background: #fff;
            text-align: left;
            span{
                font-size: 15px;
                color: #999;
                text-decoration: line-through;
                margin-left: 30px;
            }
        }
        .Model{
                background: #ffffff;
                margin-top: 15px;            
            .color{
                padding: 3px 10px;
                display: flex;
                align-items: center;
                p{
                    border: 1px solid #d8d8d8;
                    border-radius: 5px;
                    margin-left: 5px;
                    background: #f5f5f5
                }
                p:nth-child(1){
                    background: #fe3b2f;
                    color: #fff;
                   
                }
            }
        }
        .basic{
            display: flex;
            justify-content: space-between;
            background: #fff;
            padding: 5px 10px;
            margin-top: 10px;
            .iconfont{
                font-size: 18px;
            }
            p{
                flex: 1;
            }
            
        }
        .basic_1{
            background: #ededf3;
        }
        .shop{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 20px;
            background: #fff;
            margin-top: 10px;
            .left{
                width:60px;
                height: 50px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .content{
                flex: 1;
                margin-top: 20px;
            }
            .right{
                color: #fe3b2f;
                padding: 3px 10px;
                display: inline-table;
                border: 1px solid #fe3b2f;
                border-radius: 5px;
            }
        }
    }
    .swipe-wrapper {
        height:290px;
        background: steelblue;
        .banner{
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    ul{
        width: 100%;
        li{
            width: 100%;
            img{
                width: 100%;
            }
        }
    }
    .footer{
        height: 50px;
        display: flex;
        li{
            text-align: center;
            border-right: 1px solid #d8d8d8;
            line-height: 50px;
            p{
                color: #999;
            }
        }
        .one{
            width: 15%;
            display: flex;
            flex-direction: column;
            line-height: 18px;
            align-items: center;
            justify-content: center;
        }
        .two{
            width: 35%;
        }
        li:nth-of-type(1){
            .iconfont{
                color: #fe3b2f;
            }
        }
        li:nth-of-type(3){
            background: #fe3b2f;
            p{
                color: #fff
            }
        }
        li:nth-child(4){
            background: #191919;
            p{
                color: #fff;
            }
        }
    }
}

</style>
