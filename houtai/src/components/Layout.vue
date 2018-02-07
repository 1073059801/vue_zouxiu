<template>
<div class="">
  <el-container>
    <el-header class="lm-header">
      <lm-header></lm-header> 
    </el-header>
    <el-container>
      <el-aside class="aside" style="width:200px;min-height:825px;">
        <side-menu></side-menu >  
      </el-aside>
      <el-container>
        <el-main class="content">
          <transition name="el-zoom-in-center">
            <router-view></router-view>
          </transition>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</div>
</template>

<script>
import lmHeader from "./Header"
import sideMenu from "./SideMenu"
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    sideMenu,lmHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lm-header { background:url(../assets/bj.jpg)no-repeat; 
						 background-size:cover;
						 color: #fff;
					 }
.content {  min-height: 500px;}
.aside {
				background-color: rgba(13,12,52,1);
			 }
</style>
