<template>
  <div class=""> 
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          :router="true"
          background-color="rgba(13,12,52,1)"
          text-color="#409EFF"
          active-text-color="#ffd04b">
          <el-menu-item index="/">
            <i class="el-icon-star-on"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-submenu index="product">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>商品管理</span>
            </template>
              <el-menu-item index="/product/add">
              	<i class="el-icon-plus"></i>
              	<span>添加商品</span>
              </el-menu-item>
              <el-menu-item index="/product/list">
              	<i class="el-icon-upload"></i>
              	<span>管理商品</span>
              </el-menu-item>
          </el-submenu>

           <el-submenu index="cate">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>分类管理</span>
              </template>
                <el-menu-item index="/cate/add">
                	<i class="el-icon-circle-plus-outline"></i>
                	<span>添加分类</span>
                </el-menu-item>
                <el-menu-item index="/cate/list">
                	<i class="el-icon-edit-outline"></i>
                	<span>管理分类</span>
                </el-menu-item>
            </el-submenu>

             <el-submenu index="order">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>订单管理</span>
              </template>
                <el-menu-item index="/order/list">
                	<i class="el-icon-edit"></i>
                	<span>管理订单</span>
                </el-menu-item>
                <el-menu-item index="/order/tui">
                   <i class="el-icon-service"></i>
                   <span slot="title">退换货</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
     
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      activeIndex: "home"
    }
  },
  methods: {
    handleSelect(index,indexPath){
    }
  },
  mounted(){
    this.activeIndex = this.$route.path
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
