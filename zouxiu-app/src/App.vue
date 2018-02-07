<template>
  <div id="app">
    <transition 
       name="slide-fade"
    >
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  // name: 'App',
  // data(){
  //   return{
  //     show: true
  //   }
  // }
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
  #app{
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

 /*淡入淡出 动画效果   name="fade"*/   
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .child-view {
      position: absolute;
      transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(30px, 0);
      transform: translate(30px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-30px, 0);
      transform: translate(-30px, 0);
    }


.slide-fade-enter-active {   /* 横向切换动画 name="slide-fade" */
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


/* 突然跳出  动画   name="bounce" */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
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
