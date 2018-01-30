<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang = "scss">    
@import "~@/lib/reset.scss";
*{
  margin: 0;
  padding: 0;
}
html,body,#app,#container{
		width: 100%;
    height: 100%;
    overflow:auto;
	}
  #container {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .header{

    }
    #content{
      flex:1;
      overflow-y: auto;
    }
    .footer{
      
    }
  }
  
</style>
