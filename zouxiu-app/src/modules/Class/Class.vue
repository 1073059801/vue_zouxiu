

<template>
   <div class="baby" id="container">
       <lh-header>
           <a href="javascript:window.history.go(-1);" slot="left" class="iconfont icon-zuo"></a>
           <!-- a href="javascript:window.history.go(-1);" -->
           <div slot="content" id="header_content">
               <mt-navbar v-model="selected">
                    <mt-tab-item id="1">分类</mt-tab-item>
                    <mt-tab-item id="2">品牌</mt-tab-item>
               </mt-navbar>
           </div>
           <i slot="right"></i>
       </lh-header>
     <lh-content>
         

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <p>11111111</p>
            </mt-tab-container-item>
               
            <mt-tab-container-item id="2">
                <div class="index_2_wrap">
                    <mt-index-list>
                        <mt-index-section v-for="ele in classData" :index="ele.name" :key="ele.LogoId">
                            <div class="logo">
                                <div class="img" v-for="el in ele.children" :title="el">
                                    <img v-lazy="el.brandImg" alt="" >
                                    <p>{{el.enName}}</p>
                                </div>
                            </div>
                        </mt-index-section>
                    </mt-index-list>
                </div> 
            </mt-tab-container-item>
        </mt-tab-container>      
     </lh-content>
   </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  data(){
      return{
           selected:"2"
      }
  },
  computed:{
      ...mapGetters("classs", [
          "classData"
      ])
  },
  methods:{
      ...mapActions("classs",[
          "getclassData"
      ])
  },
  mounted(){
    this.getclassData()
  }
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
.baby{
    .header{
        background: #fff;
        border-bottom: 1px solid #d8d8d8;
        background: #fafafa;
    }
    a{
        color: #000;
    }
    #header_content{
        width: 100px;
        a{
            color: #f66;
            background: #fafafa;
        }
        .mint-tab-item.is-selected{
            border-bottom: 2px solid #f66;
        }
    }
    .content{
        .index_2_wrap{
            width: 100%;
            height: 100%;
            // position: absolute;
            top: 45px;
            bottom: 0;
            width: 100%;
            overflow: auto;
            .mint-indexlist-nav{
                position: fixed;
            }
            .logo{
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                .img{
                    width: 28%;
                    height: 50px;
                    margin-top: 15px;
                   text-align: center;
                    // float: left;
                    img{
                        width: 100%;
                        height: 40px;
                         border: 1px solid #000;
                    }
                }
            }
        }
    }
}

</style>
