<template>
	<div>
		<el-form  status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		<el-form-item label="商品名称">
	         <el-input v-model="productData.goodsName"></el-input>
        </el-form-item>
		<el-form-item label="商品价格">
	         <el-input v-model="productData.price"></el-input>
        </el-form-item>
		<el-form-item label="商品库存">
	         <el-input v-model="productData.total_number"></el-input>
        </el-form-item>
		<el-form-item label="商品售出">
	         <el-input v-model="productData.seller_number"></el-input>
        </el-form-item>
		<el-form-item label="打折商品">
	         <el-input v-model="productData.discount"></el-input>
        </el-form-item>
        <el-form-item>
        <el-upload
		  action="http://localhost:8000/api/uploadImg"
		  list-type="picture-card"
          name="roompic"
          :on-success="handleAvatarSuccess"
		  :on-preview="handlePictureCardPreview"
		  :on-remove="handleRemove">
		  <i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
		  <img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
        </el-form-item>
        <!--39.48-->
      <!--<el-form-item label="选择父类">
         <el-select v-model="proId" placeholder="请选择">
          <el-option
            v-for="item in cateList"
            :key="item.LogoId"
            :label="item.name"
            :value="item.LogoId">
          </el-option>
        </el-select>
      </el-form-item>-->

      <!--<el-form-item>
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
      </el-form-item>  -->


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
				productData:{
					goodsName:"",
					price:"",
					total_number:"",
					discount:"",
					seller_number:"",
					img_url:[],
					img_list:[]
				},
				dialogImageUrl: '',
        		dialogVisible: false
			}
		},
		methods:{
			handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePictureCardPreview(file) {
	        this.dialogImageUrl = file.url;
	        this.dialogVisible = true;
	      },
	      handleAvatarSuccess(res,file){
	      		console.log(res)
      		this.productData.img_url = "http://localhost:8000"+res.imgSrc.replace("public","")
			this.productData.img_list.push(this.productData.img_url)
	      },
			submitForm(){
				console.log(this.productData)
				var params =  qs.stringify({...this.productData,start_time:Math.round(new Date().getTime()/1000)})
				this.axios.post("http://localhost:8000/api/product/add",params).then(res=>{
					console.log(res.data)
				})
			}, 
			resetForm(){
				Object.keys(this.listData).forEach(key=>{
//					this.listData[key] = ""
				})
			},
		mounted(){
			
			}
		}
	}
</script>


<style>

</style>