
<template>
   <div class="man" id="container">
     <lh-content>
        <div class="swipe-wrapper">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(ele, index) in bannerData" :key="index" class="banner">
                    <img :src="ele.pic_img" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <ul class="class">
            <li v-for="man in manData" :key="man.pro_img">
                <img v-lazy="man.pro_img" alt="">
                <p></p>
            </li>
        
        </ul>
        <div class="man">
            <div class="top">
                <p>
                    <span>{{good.structure}}</span>
                </p>
            </div>

            <div class="content">
                <div class="top" v-for="man in good2" :key="man.pro_img">
                    <img v-lazy="man.pro_img" alt="">
                    <div class="position">
                        <a href="#">
                            <b>{{man.pro_name}} </b>
                            <i>{{man.pro_name_c}}</i>
                        </a>
                    </div>
                </div>
                <ul class="pull">
                    <li v-for="good3 in good3" :key="good3.pro_img">
                        <img :src="good3.pro_img" alt="">
                        <p>{{good3.pro_name}}</p>
                        <p><span>￥{{good3.pro_prc}}</span><s>￥{{good3.pro_prc_old}}</s></p>
                    </li>
                    <li v-for="item in good4" :key="item.pro_img">
                        <img :src="item.pro_img" alt="">
                        <p>{{item.pro_name}}</p>
                        <p><span>￥{{item.pro_prc}}</span><s>￥{{item.pro_prc_old}}</s></p>
                    </li>
                </ul>

                <div class="top" v-for="man in good5" :key="man.pro_img">
                    <img :src="man.pro_img" alt="">
                    <div class="position">
                        <a href="#">
                            <b>{{man.pro_name}} </b>
                            <i>{{man.pro_name_c}}</i>
                        </a>
                    </div>
                </div>
                <ul class="pull">
                    <li v-for="man in good6" :key="man.pro_img">
                        <img :src="man.pro_img" alt="">
                        <p>{{man.pro_name}}</p>
                        <p><span>￥{{man.pro_prc}}</span><s>￥{{man.pro_prc_old}}</s></p>
                    </li>
                </ul>

                <div class="top" v-for="man in good7" :key="man.pro_img">
                    <img :src="man.pro_img" alt="">
                    <div class="position">
                        <a href="#">
                            <b>{{man.pro_name}} </b>
                            <i>{{man.pro_name_c}}</i>
                        </a>
                    </div>
                </div>
                <ul class="pull">
                    <li v-for="man in good8" :key="man.pro_img">
                        <img v-lazy="man.pro_img" alt="">
                        <p>{{man.pro_name}}</p>
                        <p><span>￥{{man.pro_prc}}</span><s>￥{{man.pro_prc_old}}</s></p>
                    </li>
                </ul>

                <div class="top" v-for="man in good9" :key="man.pro_img">
                    <img v-lazy="man.pro_img" alt="">
                    <div class="position">
                        <a href="#">
                            <b>{{man.pro_name}} </b>
                            <i>{{man.pro_name_c}}</i>
                        </a>
                    </div>
                </div>
                
                <ul class="pull">
                    <li v-for="man in good10" :key="man.pro_img">
                        <img v-lazy="man.pro_img" alt="">
                        <p>{{man.pro_name}}</p>
                        <p><span>￥{{man.pro_prc}}</span><s>￥{{man.pro_prc_old}}</s></p>
                    </li>
                </ul>
                
               

                <div class="top" v-for="man in good11" :key="man.pro_img">
                    <img v-lazy="man.pro_img" alt="">
                    <div class="position">
                        <a href="#">
                            <b>{{man.pro_name}} </b>
                            <i>{{man.pro_name_c}}</i>
                        </a>
                    </div>
                </div>
                 <ul class="pull">
                    <li v-for="man in good12" :key="man.pro_img">
                        <img v-lazy="man.pro_img" alt="">
                        <p>{{man.pro_name}}</p>
                        <p><span>￥{{man.pro_prc}}</span><s>￥{{man.pro_prc_old}}</s></p>
                    </li>
                </ul>

                 
            </div>

            <div class="Selling">
                <div class="top">
                    <p>
                        <span>{{Selling.structure}}</span>
                    </p>
                </div>
                <div class="se_con">
                    <div class="left" v-for="item in Selling2" :key="item.pro_img">
                        <img v-lazy="item.pro_img" alt="">
                        <div class="position">
                            <a href="#">
                            <p>{{item.pro_name}}</p> 
                                <p>{{item.pro_name_c}}</p>
                            </a>
                        </div>
                    </div>
                    <div class="left" v-for="item in extravagant2" :key="item.pro_img">
                        <img v-lazy="item.pro_img" alt="">
                        <div class="position">
                            <a href="#">
                            <p>{{item.pro_name}}</p> 
                                <p>{{item.pro_name_c}}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Selling">
                <div class="top">
                    <p>
                        <span>{{extravagant.structure}}</span>
                    </p>
                </div>
                <div class="se_con">
                    <div class="left" v-for="item in extravagant2" :key="item.pro_img">
                        <img v-lazy="item.pro_img" alt="">
                        <div class="position">
                            <a href="#">
                            <p>{{item.pro_name}}</p> 
                                <p>{{item.pro_name_c}}</p>
                            </a>
                        </div>
                    </div>
                    <div class="left" v-for="item in Selling2" :key="item.pro_img">
                        <img v-lazy="item.pro_img" alt="">
                        <div class="position">
                            <a href="#">
                            <p>{{item.pro_name}}</p> 
                                <p>{{item.pro_name_c}}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--man-->
     </lh-content>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data(){
      return{

      }
  },
  computed:{
      ...mapGetters("man", [
          "bannerData",
          "manData",
          "good",
          "good2",
          "good3",
          "good4",
          "good5",
          "good6",
          "good7",
          "good8",
          "good9",
          "good10",
          "good11",
          "good12",
          "Selling",
          "Selling2",
          "extravagant",
          "extravagant2"
      ])
  },
  methods:{
      ...mapActions("man", [
          "getbannerData",
          "getmanData"
      ])
  },
  mounted(){
      this.getbannerData(),
      this.getmanData()
  }
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
.man{
    .swipe-wrapper {
        height:290px;
         .banner{
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .class{
        width: 100%;
        height: auto;
        padding-right: 8px;
        li{
            width: 23%;
            height: 93px;
            float: left;
            margin-left: 2%;
            margin-top: 8px;
            text-align: center;
            img{
                width: 100%;
                height: 100%;
            }
            p{

            }
        }
    }
    .man{
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
            .pull{
                width: 100%;
                height: 177px;
                display: -webkit-box;
                flex-wrap: nowrap;
                overflow-y: auto;
                margin-top: 10px;
                li{
                    width: 33%;
                    text-align: center;
                    padding: 0 13px;
                    img{
                        width: 100%;
                        height: 80%;
                    }
                    p{
                        white-space: nowrap;
                        overflow: hidden;
                        span{

                        }
                        s{
                            text-decoration:line-through;
                            margin-left: 5px;
                            color: #999;
                        }
                    }
                }
            }
        }
    }
    .Selling{
         margin-top: 20px;
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
        .se_con{
            display: flex;
            width: 100%;
            height: auto;
            justify-content: space-around;
            flex-wrap: wrap;
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
    }
}

</style>
