
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
            <li>
                <img src="../../assets/logo.png" alt="">
            </li>
        </ul>
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
          "manData"
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
