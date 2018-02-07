<template>
	<div>
		<el-form  status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="分类名称">
        <el-input type="text" v-model="listData.name"></el-input>
      </el-form-item>

      <el-form-item label="选择父类">
         <el-select v-model="listData.proId" placeholder="请选择">
          <el-option
            v-for="item in cateList"
            :key="item.LogoId"
            :label="item.name"
            :value="item.LogoId">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <!-- 图片上传 http://localhost:8000/admin/uploadImg-->
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8000/api/uploadImg"
          :show-file-list="false"
          name="roompic"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>  


      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
	</div>
</template>



<script>
	import qs from "qs"
	export default {
		data(){
			return {
				listData:{
					name:"",
					proId:"",
					brandImg:""
				},
				imageUrl:"",
				cateList:[]
			}
		},
		methods:{
			submitForm(){
				this.axios.post("http://localhost:8000/api/category/add",qs.stringify(this.listData)).then(res=>{
					console.log(res.data)
				})
			}, 
			resetForm(){
				Object.keys(this.listData).forEach(key=>{
					this.listData[key] = ""
				})
			},
			handleAvatarSuccess(res,file){
				console.log(res,file)
				this.listData.brandImg= "http://localhost:8000"+res.imgSrc.replace("public","")
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file){
				
			}
		},
		mounted(){
			this.axios.get("http://localhost:8000/api/category/getCateData").then(res=>{
				this.cateList = res.data
			})
		}
	}
</script>


<style>

</style>