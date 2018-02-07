<template>
	<div class="list-data">
	<!--搜索框-->
	<!--<div style="margin-top: 15px;">
	  <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select">
	    <el-select v-model="cate1" slot="prepend" placeholder="请选择">
	      <el-option :label="data.name" :value="data.LogoId" :key="data.LogoId" v-for="data in cateData"></el-option>
	    </el-select>
	    <el-button slot="append" icon="el-icon-search"></el-button>
	  </el-input>
	</div>-->
		
	<el-table
		class="tb"
	    :data="listData"
	    style="width: 100%">
	    <el-table-column
	      label="商品ID"
	      width="100">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.pid }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="商品名称"
	      width="180">
	      <template slot-scope="scope">
	      	<span style="margin-left: 10px">{{ scope.row.goodsName }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="商品价格"
	      width="180">
	      <template slot-scope="scope">
	      	<span style="margin-left: 10px">{{ scope.row.price }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="商品图片"
	      width="180">
	      <template slot-scope="scope">
	      	<span style="margin-left: 10px">{{ scope.row.img_url }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="库存"
	      width="100">
	      <template slot-scope="scope">
	      	<span style="margin-left: 10px">{{ scope.row.total_number }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="售出"
	      width="100">
	      <template slot-scope="scope">
	      	<span style="margin-left: 10px">{{ scope.row.seller_number }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="折扣"
	      width="100">
	      <template slot-scope="scope">
	      	<span style="margin-left: 10px">{{ scope.row.discount }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column label="操作">
	      <template slot-scope="scope">
	        <el-button
	          size="mini"
	          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
	        <el-button
	          size="mini"
	          type="danger"
	          @click="handleDelete({index:scope.$index,pid:scope.row.pid})">删除</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	  <div>
	  	<el-pagination
		  background
		  layout="prev, pager, next"
		  @current-change="currentChange"
		  :page-count="totalPage"
		  >
		</el-pagination>
	  </div>

	  <pro-editor ref="editor">
	  	
	  </pro-editor>

	</div>
</template>



<script>
	import {mapActions,mapGetters} from "vuex"
	import proEditor from "./Editor.vue"
	export default{
		name:"productList",
		data(){
			return {
				
			}
		},
		computed:{
			...mapGetters("product",[
				"listData","totalPage"
				
			])
			
		},
		methods:{
			...mapActions("product",[
				"getListData","del"
			]),
			currentChange(currentPage){
//				this.getListData({currentPage})
				this.$store.commit("product/changePageNum",{currentPage})
				this.getListData()
			},
			getCateData(LogoId=1){
				//获取分类数据
					this.axios.get("http://localhost:8000/api/category/getCateData?LogoId="+LogoId).then(res=>{
					this.cateData = res.data
				})
			},
			handleEdit(index,rowData){
//				this.editorVisible = true
				this.$refs.editor.show(index,rowData)

			},
			handleDelete(params){
				this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	
		        	
		        	this.del({...params,succ:()=>{
		        		this.$message({
			            type: 'success',
			            message: '删除成功!'
		        	  });
		        	},fail:()=>{
		        		this.$message({
			            type: 'fail',
			            message: '删除失败!'
		        	  });
		        	}})
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
			}
		},
		mounted(){
			this.getListData()
			this.getCateData()
		},
		components:{
			proEditor
		}
	}
</script>


<style>
	.el-table__header th{
		text-align:center;
	}
	.el-select{
		width:150px;
	}
</style>
<!--4.1 58min讲了第二种点击切换页面数据的方法-->