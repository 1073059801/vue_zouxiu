
<template>
   <div class="maam" id="container">
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
      ...mapGetters("maam", [
          "bannerData"
      ])
  },
  methods:{
      ...mapActions("maam", [
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
.maam{
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
