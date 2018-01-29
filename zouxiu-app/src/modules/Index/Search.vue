<template>
  <div class="search" id="container">
      <lh-content>
          <div class="header">
            <div class="left">
                <a href="javascript:window.history.go(-1);" slot="left" class="iconfont icon-zuo"></a>
            </div>
            <div class="content">
                <table>
                    <i class="iconfont icon-sousuo"></i>
                    <input type="text" placeholder="搜索你想找的商品的关键字">
                </table>
                
            </div>
            <div class="right">
                
                
                <router-link to="/user">
                    搜索
                </router-link>
            </div>
        </div>

        <div class="content_wop">
            <div class="top">
                <i class="iconfont icon-collection"></i>
                <p>热门搜索</p>
            </div>
            <ul class="bottom">
                <li>男Polo</li>
                <li>红色</li>
                <li>卫衣</li>
                <li>5折</li>
                <li>牛仔</li>
                <li>lv</li>
                <li>gucci 包</li>
                <li>西装</li>
                <li>限时5折</li>
                <li>mk</li>
            </ul>
        </div>

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

      <div class="ReturnTop">
          <i class="iconfont icon-top-1-copy"></i>
      </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

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
      ])
    },
    mounted(){
        //发起 获取服务器数据的 action
        // this.$store.dispatch("getCityData")
        this.getlistData()
        
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/lib/reset.scss";
.search{
    .header{
        background: #f6f6f8;
        height: 45px;
        display: flex;
        justify-content:space-between;
        padding: 7px 0 9px;
        .left{
            width: 13%;
            height: 32px;
            padding: 0 13px;
            .iconfont{
                color: #ffbb00;
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
            a{
                color: #ffbb00;
            }
        }
    }
    .content{
        overflow-x: auto;
        background: #f6f6f8;
        .content_wop{
            width: 100%;
            height: 200px;
            padding: 0 20px;
            background: #ffffff;
            height: 300px;
            .top{
                height: 50px;
                display: flex;
                align-items: center;
                i{
                    font-size: 20px;
                }
                p{
                    margin-left: 6px;
                    font-size: 16px;
                    font-weight: 900;
                }
            }
            .bottom{
                width: 100%;
                li{
                    padding: 5px 10px;
                    border: 1px solid #e8e8e8;
                    border-radius: 5px;
                    display: inline-block;
                    margin-right: 10px;
                    margin-bottom: 10px;
                }
            }
        }
    }
    .home_footer{
        width: 100%;
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