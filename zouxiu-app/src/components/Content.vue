<template>
  <div class="content" id="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'lhHeader',
  props:{
    tit:{
      type:String,
      default:"内容"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only-->

<style scoped lang = "scss">    
@import "~@/lib/reset.scss";
  .content {
      flex: 1;  
  }
</style>
