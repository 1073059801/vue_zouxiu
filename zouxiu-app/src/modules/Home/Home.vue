<template>
<div class="home" id="container">
    <lh-content>
        <div class="swipe-wrapper">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="ele in bannerData" :key="ele.pic_img" class="banner">
                    <img :src="ele.pic_img" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="Extension">
            <div class="left">
                <img src="../../assets/VIP.png" alt="">
            </div>
            <div class="right">
                <img src="../../assets/laba.png" alt="">
                <marquee>
                    <p>广告位招商。。。联系电话：15515052087</p>
                </marquee>
            </div>
        </div>
        <div class="dalibao">
            <img src="../../assets/dalibao.jpg" alt="">
        </div>
        <div class="Newest">
            <div class="top">
                <p>
                    <span>{{homeData.structure}}</span>
                </p>
            </div>
            <div class="content">
                <router-link v-for="item in homeData2" :key="item.img" :to="{name:'List',params:{str_id:item.str_id}}" class="left">
                    <img v-lazy="item.img" alt="">
                    <div class="position">
                        <a href="#">
                            {{item.pro_name}}
                        </a>
                    </div>
                </router-link>
            </div>
            <div class="swipe-wrapper">
                <mt-swipe :auto="0">
                    <mt-swipe-item class="swipe">
                        <div class="one" v-for="items in homeData3" :key="items.pro_img">
                            <img v-lazy="items.pro_img" alt="">
                            <p>{{items.pro_name}}</p>
                            <p>{{items.pro_name_c}}</p>
                            <p>{{items.pro_prc}}</p>
                        </div>
                    </mt-swipe-item>
                    <mt-swipe-item class="swipe">
                        <div class="one" v-for="items in homeData4" :key="items.pro_img">
                            <img v-lazy="items.pro_img" alt="">
                            <p>{{items.pro_name}}</p>
                            <p>{{items.pro_name_c}}</p>
                            <p>{{items.pro_prc}}</p>
                        </div>
                    </mt-swipe-item>
                    <mt-swipe-item class="swipe">
                        <div class="one" v-for="items in homeData5" :key="items.pro_img">
                            <img v-lazy="items.pro_img" alt="">
                            <p>{{items.pro_name}}</p>
                            <p>{{items.pro_name_c}}</p>
                            <p>{{items.pro_prc}}</p>
                        </div>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div><!--Newest-->

        <div class="Sale">
             <div class="top">
                <p>
                    <span>{{sale.structure}}</span>
                </p>
            </div>

            <div class="content">
                 <div class="left" v-for="sale in sale2" :key="sale.img">
                    <img v-lazy="sale.img" alt="">
                     <div class="position">
                        <a href="#">
                            {{sale.pro_name}}
                        </a>
                    </div>
                </div>
            </div>
            <div class="img" v-for="sale3 in sale3" :key="sale3.img">
                <img v-lazy="sale3.img" alt="">
                <div class="position">
                    <a href="#">
                        <b>{{sale3.pro_name}}</b>
                        <i>DSquared2/Thom Browne/AJ...</i>
                    </a>
                </div>
            </div>
            <ul class="kind">
                <li v-for="sale4 in sale4" :key="sale4.img">
                    <img v-lazy="sale4.img" alt="">
                    <div class="position">
                        {{sale4.pro_name}}
                    </div>
                </li>
            </ul>
        </div><!--sale-->

        <div class="screen">
             <div class="top">
                <p>
                    <span>{{screen.structure}}</span>
                </p>
            </div>

            <div class="content">
                 <div class="left" v-for="sale in screen2" :key="sale.img">
                    <img v-lazy="sale.img" alt="">
                     <div class="position">
                        <a href="#">
                            {{sale.pro_name}}
                        </a>
                    </div>
                </div>
            </div>
            <ul class="kind">
                <li v-for="sale4 in screen3" :key="sale4.img">
                    <img v-lazy="sale4.img" alt="">
                    <div class="position">
                        {{sale4.pro_name}}
                    </div>
                </li>
            </ul>
            <div class="img" v-for="sale3 in screen4" :key="sale3.img">
                <img v-lazy="sale3.img" alt="">
            </div>
            
        </div><!--screen-->

         <div class="mama">
             <div class="top">
                <p>
                    <span>{{mama.structure}}</span>
                </p>
            </div>

            <div class="content">
                <div class="top" v-for="mama in mama2" :key="mama.img">
                    <img v-lazy="mama.img" alt="">
                    <div class="position">
                        <a href="#">
                            <b>{{mama.pro_name_c}} </b>
                            <i>{{mama.pro_name}}</i>
                        </a>
                    </div>
                </div>
                 <div class="left" v-for="mama in mama3" :key="mama.img">
                    <img v-lazy="mama.img" alt="">
                     <div class="position">
                        <a href="#">
                           <p>{{mama.pro_name}}</p> 
                            <p>{{mama.pro_name_c}}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="img" v-for="sale3 in mama4" :key="sale3.img">
                <img v-lazy="sale3.img" alt="">
                <div class="position">
                    <a href="#">
                        <b>{{sale3.pro_name}}</b>
                        <i>{{sale3.pro_name_c}}</i>
                    </a>
                </div>
            </div>
           
        </div><!--mama-->
    </lh-content>
</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  data(){
      return{
          str_id:''
      }
  },
  computed:{
      ...mapGetters("home", [
          "bannerData",
          "homeData",
          "homeData2",
          "homeData3",
          "homeData4",
          "homeData5",
          "sale",
          "sale2",
          "sale3",
          "sale4",
          "screen",
          "screen2",
          "screen3",
          "screen4",
          "mama",
          "mama2",
          "mama3",
          "mama4"
      ])
  },
  methods:{
      ...mapActions("home", [
          "getbannerData","gethomeData"
      ])
  },
  mounted(){
      this.getbannerData(),
      this.gethomeData()
  }
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
.home{
    .swipe-wrapper {
        height:290px;
        .banner{
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .Extension{
        width: 100%;
        height: 50px;
        display: flex;
        .left{
            width: 40%;
            height: 100%;
            img{
                width: 100;
                height: 100%;
            }
        }
        .right{
            width: 60%;
            height: 100%;
            display: flex;
            align-items: center;
            img{
                width: 20px;
                height: 20px;
                line-height: 50px;
                display: inline-block;
            }
            marquee{
                // color: #000;
                font-size: 20px;
                line-height: 50px;
                direction:down;
                direction:right;
            }
        }
    }
    .dalibao{
        width: 100%;
        height: 90px;
        padding: 0 5px;
        img{
            width: 100%;
            height: 100%;

        }
    }
    .Newest{
        margin-top: 10px;
            .top{
                height: 40px;
                width: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
            p{
                background: #000;
                display: inline-block;
                height: 1px;
                width: 148px;
                position: relative;
                text-align: center;
                span{
                    display: inline-block;
                    background: #fff;
                    height: 20px;
                    opacity: 1;
                    width: 95px;
                    position: absolute;
                    margin-top: -10px;
                    top: 0px;
                    left: 26px;
                }
            }
        }
        .content{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .left{
                width: 48%;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .position{
                    width: 100%;
                    height: 30px;
                    position: absolute;
                    left: 0;
                    bottom: 20px;
                    text-align: center;
                    // opacity: 0.5;
                  
                    a{
                         background: rgba(248, 247, 247, 0.8);
                        width: 100px;
                        height: 100%;
                        // background: #fff;
                        text-align: center;
                        border-radius: 50px;
                        display: inline-block;
                        line-height: 30px;
                        font-size: 15px;
                        color: #000000;
                        font-weight: 900;
                        font-family: '微软雅黑';
                    }
                }
            }
            .right{
                width: 48%;
            }
        }
        .swipe-wrapper{
             height: 240px;
            .swipe{
                display: flex;
                justify-content: space-around;
                .one{
                    width: 30%;
                    height: 70%;
                    background: seagreen;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    p{
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
            }
            .mint-swipe-indicator.is-active{
                    background: red;
                }
            .mint-swipe-indicator{
                background: #000000;
            }
        }
    }
    .Sale{
        margin-top: 10px;
         .top{
                height: 40px;
                width: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
            p{
                background: #000;
                display: inline-block;
                height: 1px;
                width: 100px;
                position: relative;
                text-align: center;
                span{
                    display: inline-block;
                    background: #fff;
                    height: 20px;
                    opacity: 1;
                    width: 50px;
                    position: absolute;
                    margin-top: -10px;
                    top: 0px;
                    left: 26px;
                }
            }
        }
         .content{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .left{
                width: 48%;
                height: 150px;
                margin-top: 5px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .position{
                    width: 100%;
                    height: 30px;
                    position: absolute;
                    left: 0;
                    bottom: 20px;
                    text-align: center;
                    // opacity: 0.5;
                  
                    a{
                         background: rgba(248, 247, 247, 0.8);
                        width: 100px;
                        height: 100%;
                        // background: #fff;
                        text-align: center;
                        border-radius: 50px;
                        display: inline-block;
                        line-height: 30px;
                        font-size: 15px;
                        color: #000000;
                        font-weight: 900;
                        font-family: '微软雅黑';
                    }
                }
            }
           
        }
        .img{
            width: 100%;
            height: 225px;
            margin-top: 10px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            .position{
                width: 100%;
                height: 60px;
                position: absolute;
                left: 0;
                bottom: 20px;
                text-align: center;
                // opacity: 0.5;
                
                a{
                        background: rgba(248, 247, 247, 0.9);
                    width: 70%;
                    height: 100%;
                    // background: #fff;
                    text-align: center;
                    display: inline-block;
                    font-size: 15px;
                    color: #000000;
                    font-family: '微软雅黑';
                    padding: 7px 0 0 0;
                    b{
                        display: block;
                        font-size: 20px;
                        font-weight: 900;
                    }
                }
            }
        }
        .kind{
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: space-around;
            margin-top: 10px;
            li{
                width: 23%;
                height: 100%;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .position{
                    position: absolute;
                    // left: 10px;
                    bottom: 2px;
                }
            }
        }
    }
    .screen{
        margin-top: 10px;
         .top{
                height: 40px;
                width: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
            p{
                background: #000;
                display: inline-block;
                height: 1px;
                width: 148px;
                position: relative;
                text-align: center;
                span{
                    display: inline-block;
                    background: #fff;
                    height: 20px;
                    opacity: 1;
                    width: 98px;
                    position: absolute;
                    margin-top: -10px;
                    top: 0px;
                    left: 26px;
                }
            }
        }
         .content{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .left{
                width: 48%;
                height: 150px;
                margin-top: 5px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .position{
                    width: 100%;
                    height: 30px;
                    position: absolute;
                    left: 0;
                    bottom: 20px;
                    text-align: center;
                    // opacity: 0.5;
                  
                    a{
                         background: rgba(248, 247, 247, 0.8);
                        width: 100px;
                        height: 100%;
                        // background: #fff;
                        text-align: center;
                        border-radius: 50px;
                        display: inline-block;
                        line-height: 30px;
                        font-size: 15px;
                        color: #000000;
                        font-weight: 900;
                        font-family: '微软雅黑';
                    }
                }
            }
           
        }
        .img{
            padding: 0 10px;
            width: 100%;
            height: 95px;
            margin-top: 10px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .kind{
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: space-around;
            margin-top: 10px;
            li{
                width: 23%;
                height: 100%;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .position{
                    position: absolute;
                    // left: 10px;
                    bottom: 2px;
                }
            }
        }
    }
    .mama{
        margin-top: 10px;
         .top{
                height: 40px;
                width: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
            p{
                background: #000;
                display: inline-block;
                height: 1px;
                width: 148px;
                position: relative;
                text-align: center;
                span{
                    display: inline-block;
                    background: #fff;
                    height: 20px;
                    opacity: 1;
                    width: 98px;
                    position: absolute;
                    margin-top: -10px;
                    top: 0px;
                    left: 26px;
                }
            }
        }
         .content{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .top{
                height: 200px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .position{
                    width: 100%;
                    height: 60px;
                    position: absolute;
                    left: 0;
                    bottom: 20px;
                    text-align: center;
                    a{
                        background: rgba(248, 247, 247, 0.7);
                        width: 70%;
                        height: 100%;
                        // background: #fff;
                        text-align: center;
                        display: inline-block;
                        font-size: 15px;
                        color: #000000;
                        font-family: '微软雅黑';
                        padding: 7px 0 0 0;
                        b{
                            display: block;
                            font-size: 20px;
                            font-weight: 900;
                        }
                    }
                }
            }
            .left{
                width: 48%;
                height: 220px;
                margin-top: 5px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .position{
                    width: 100%;
                    height: 50px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    text-align: center;
                    // opacity: 0.5;
                  
                    a{
                         background: rgba(248, 247, 247, 0.8);
                        width: 100%;
                        height: 100%;
                        // background: #fff;
                        text-align: center;
                        display: inline-block;
                        font-size: 15px;
                        color: #000000;
                        font-weight: 900;
                        font-family: '微软雅黑';
                        p:nth-child(2){
                            font-weight: 100;
                        }
                    }
                }
            }
           
        }
        .img{
            width: 100%;
            height: 225px;
            margin-top: 10px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
             .position{
                    width: 100%;
                    height: 60px;
                    position: absolute;
                    left: 0;
                    bottom: 20px;
                    text-align: center;
                    // opacity: 0.5;
                  
                    a{
                         background: rgba(248, 247, 247, 0.9);
                        width: 70%;
                        height: 100%;
                        // background: #fff;
                        text-align: center;
                        display: inline-block;
                        font-size: 15px;
                        color: #000000;
                        font-family: '微软雅黑';
                        padding: 7px 0 0 0;
                        b{
                            display: block;
                            font-size: 20px;
                            font-weight: 900;
                        }
                    }
                }
        }
        .kind{
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: space-around;
            margin-top: 10px;
            li{
                width: 23%;
                height: 100%;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .position{
                    position: absolute;
                    // left: 10px;
                    bottom: 2px;
                }
            }
        }
    }
}

</style>
