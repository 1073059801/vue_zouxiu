<template>
	<div class="list-data">
	<el-table
		class="tb"
	    :data="cateData"
	    style="width: 100%">
	    <el-table-column
	      label="分类id"
	      width="100">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.str_id }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="分类名称"
	      width="100">
	      <template slot-scope="scope">
	      	<span style="margin-left: 10px">{{ scope.row.structure }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="分类父级ID"
	      width="100">
	      <template slot-scope="scope">
	      	<span style="margin-left: 10px">{{ scope.row.content_id }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="分类图标"
	      width="100">
	      <template slot-scope="scope">
	      	<span style="margin-left: 10px">{{ scope.row.list_img }}</span>
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
	          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	</div>
</template>



<script>
	export default{
		name:"cateList",
		data(){
			return {
				cateData:[{
					str_id:10,
					structure:"吃饭",
					content_id:1,
					list_img:"222"
				},{
					str_id:11,
					structure:"吃饭",
					content_id:1,
					list_img:"222"
				}
				]
			}
		},
		methods:{
			handleEdit(){
				
			},
			handleDelete(){
				
			}
		}
	}
</script>


<style>
	.list-data th{
		text-align:center;
	}
</style>