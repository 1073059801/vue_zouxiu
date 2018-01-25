<template>
   <div class="skin" id="container">
     <lh-content>
        <div>美妆护肤专场</div>
        <div class="swipe-wrapper">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(ele, index) in bannerData" :key="index" class="banner">
                    <img :src="ele.pic_img" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
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
      ...mapGetters("skincare", [
          "bannerData"
      ])
  },
  methods:{
      ...mapActions("skincare", [
          "getbannerData"
      ])
  },
  mounted(){
      this.getbannerData()
  }
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
.skin{
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
}

</style>
