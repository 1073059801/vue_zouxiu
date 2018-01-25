<template>
  <div class="header">
    <ul>
      <li class="header-btn">
        <slot name="left"></slot>
      </li>
      <li class="header-tit">
        <slot name="content"></slot>
      </li>
       <li class="header-btn">
        <slot name="right"></slot>
      </li>
    </ul>
    <h1>{{tit}}</h1>
  </div>
</template>

<script>
export default {
  name: 'lhHeader',
  props:{
    tit:{
      type:String
      // default:"头部"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only-->

<style scoped lang = "scss">    
@import "~@/lib/reset.scss";
  .header {
    width: 100%;
    height: 50px;
    background: #f66;
    display: flex;
    padding: 0 10px;
    line-height: 50px;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
