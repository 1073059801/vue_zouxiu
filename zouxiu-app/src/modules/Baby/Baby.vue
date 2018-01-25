
<template>
   <div class="baby" id="container">
     <lh-content>
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
      ...mapGetters("baby", [
          "bannerData"
      ])
  },
  methods:{
      ...mapActions("baby", [
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
.baby{
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

