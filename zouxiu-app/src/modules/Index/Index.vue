<template>
  <div class="home" id="container">
      <div id="content">
          <div class="header">
            <div class="left">
                <img src="../../assets/logo_new.png" alt="">
            </div>
            <div class="content">
                <table>
                    <i class="iconfont icon-sousuo"></i>
                    <input @focus="focus()" type="text" placeholder="搜索你想找的商品">
                </table>
                
            </div>
            <div class="right">
                <router-link to="/class">
                    <i class="iconfont icon-gengduo"></i>
                </router-link>
                
                <router-link to="/user" v-if="isLogin">
                    <i class="iconfont icon-wode"></i>
                </router-link>
                <router-link to="/login" v-else>
                    <i class="iconfont icon-wode"></i>
                </router-link>
            </div>
        </div>
        <ul>
            <li class="home" v-for="(ele, index) in listData" :key="index">
                <a :href="ele.First_url">
                    <img v-lazy="ele.First_imgUrl" alt="">
                </a>
            </li>
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
      </div>    
      <div class="ReturnTop" @click="rettop()">
          <i class="iconfont icon-top-1-copy"></i>
      </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import $ from 'jquery'

  export default {
    name: 'search',
    data(){
        return{
            isLogin: false,
            lisData:[]
        }
    },
    computed:{
      ...mapGetters("index",[
        "listData"
      ])
    },
    methods:{
      //把store 里面的action 传递（绑定）给组件的 methods
      ...mapActions("index",[
        "getlistData"
      ]),
      focus(){
          this.$router.push("/search")
      },
        rettop(){ //返回顶部
            $("#content").animate({"scrollTop":0},500)
        }
    },
    mounted(){
        //发起 获取服务器数据的 action
        // this.$store.dispatch("getCityData")
        this.getlistData()
        if(localStorage.userinfo){
            this.isLogin = true;
            this.username = JSON.parse(localStorage.userinfo).username
            //this.username = localStorage.getItem("username")
            console.log(this.username)
        }
        $("#content").scroll(function(){
            if($("#content").scrollTop()>100){
                $(".ReturnTop").css("display","block")
            }else{
                $(".ReturnTop").css("display","none")
            }
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/lib/reset.scss";
.home{

    .header{
        background: #f6f6f8;
        height: 45px;
        display: flex;
        justify-content:space-between;
        padding: 7px 0 9px;
        .left{
            width: 20%;
            height: 32px;
            padding: 0 13px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .content{
            display: flex;
            flex: 1;    
            table{
                border: 1px solid #999;
                background: #fff;
                width: 100%;
                height: 100%;
                border-radius: 10px;
                display: block;
                padding: 1px 6px;
                input{
                    border: none;
                }
            }
        }
        .right{
            width: 20%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            
            .iconfont{
                color: #000;
                font-size: 18px;
            }
        }
    }
    #content{
        overflow-x: auto;
        ul{
            width: 100%;
            li{
                width: 100%;
                height: 300px;
                background: red;
                margin-top: 5px;
                img{
                    width: 100%;
                    height: 100%;
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

    .ReturnTop{
        position:fixed;
        right: 10px;
        bottom: 20px;
        width: 50px;
        height: 45px;
        background: #666;
        color:#fff;
        border-radius: 10px;
        text-align: center;
        line-height: 45px;
        opacity: 0.5;
        .iconfont{
            display: inline-block;
            font-size: 30px;
            
        }
    }
}
</style>