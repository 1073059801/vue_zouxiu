
<template>
   <div class="maam" id="container">
     <lh-content>
        <div class="top">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">分类</mt-tab-item>
                <mt-tab-item id="2">价格</mt-tab-item>
            </mt-navbar>
        </div>
        <div class="content">
            <mt-tab-container v-model="selected">
               
                <mt-tab-container-item id="1">
                    <ul>
                        <li v-for="ele in listData" :key="ele.goodsName">
                            <router-link :to="{name:'Detail',params:{id:ele.str_id}}" >
                                <img :src="ele.img_url"  alt="">
                                <p>{{ele.discount}}</p>
                                <p>{{ele.goodsName}}</p>
                                <p>￥{{ele.price}}</p>
                            </router-link>
                        </li>
                    </ul>
                    <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                     <ul>
                        <li v-for="ele in listData" :key="ele.goodsName">
                             <router-link :to="{name:'Detail',params:{id:ele.str_id}}" >
                                <img :src="ele.img_url"  alt="">
                                <p>{{ele.discount}}</p>
                                <p>{{ele.goodsName}}</p>
                                <p>￥{{ele.price}}</p>
                            </router-link>
                        </li>
                    </ul>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
     </lh-content>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {axios} from 'axios'

export default {
  data(){
      return{
          str_id: '',
          listData: [],
          selected:"1",
          goodsData:[]
      }
  },
  methods:{
      getgoodsData(){
           var id = this.$route.params.str_id || 2;
           console.log(id)
          this.axios.get("http://localhost:8000/api/product/getListData").then(res => {
               console.log(res.data.listData)
               if( id == 1 ){
                   this.listData = res.data.listData.splice(0,8)
                   console.log(this.goodsData)
               }else if( id == 2 ){
                    this.listData = res.data.listData.splice(8,12)
                   console.log( this.goodsData)
               }
          })
      }
  },
  mounted(){
      var id = this.$route.params.str_id;
    //   console.log(id)
    //   this.axios.get("http://localhost:8000/api/list/getListData").then(res => {
    //       if( id == 1 ){
    //           console.log(res.data[0]) 
    //           this.listData = res.data[0].content
    //       }else{
    //           console.log(res.data[1])
    //           this.listData = res.data[1].content              
    //       }
           
    //   })
      this.getgoodsData()
  }
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
.maam{
    .top{
        height: 49px;
        border-bottom: 1px solid #999;
        a{
            color: #000;
        }
        
        .mint-tab-item.is-selected{
            color: red;
            border-bottom: 2px solid red;
        }
    }
    .content{

        a{
            color: #000;
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 50%;
                height: 315px;
                // background: red;
                text-align:left;    
                padding: 0 5px;
                // padding-bottom:10px; 
                img{
                    width: 100%;
                    height: 75%;
                }
                p{
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>
