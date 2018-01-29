
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
                        <li v-for="ele in listData">
                            <img src="../../assets/logo.png" alt="">
                            <p>00000000</p>
                            <p>hhahahha哈哈哈哈</p>
                            <p>￥50</p>
                        </li>
                    </ul>
                    <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
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
          listData: '',
          selected:"1"
      }
  },
  mounted(){
      var id = this.$route.params.str_id;
      console.log(id)
      this.axios.get("http://localhost:8000/api/list/getListData").then(res => {
          if( id == 1 ){
              console.log(res.data[0]) 
              this.listData = res.data[0]
          }else{
              console.log(res.data[1])
              this.listData = res.data[1]              
          }
           
      })
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
                // background: red;
                text-align:left;    
                padding: 0 5px;
                img{
                    width: 100%;
                    height: 70%;
                }
            }
        }
    }
}
</style>
