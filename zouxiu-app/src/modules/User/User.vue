
<template>
   <div class="user" id="container">
     <lh-content>
         <div>user页面</div>
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
.user{
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

