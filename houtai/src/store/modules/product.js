import axios from "axios"
import qs from "qs"
import Vue from "vue"

export default{
	namespaced:true,
	state:{
		listData:[],
		count:0,
		pageSize:10,
		pageNum:1
	},
	getters:{
		listData:state=>state.listData,
		totalPage:state=>{
			//计算总共的页数
			return Math.ceil(state.count/state.pageSize)
		}
	},
	mutations:{
		setListData(state,{listData,count}){
			state.listData = listData
			state.count = count
		},
		//修改页码
		changePageNum(state,{currentPage}){
			state.pageNum = currentPage
		},
		editor(state,{index,data}){
			//首先我们要删除掉一个，其次才能在添加一个
			//vue里面对数组的某些数据进行修改的时候，this.$set(obj,key,value)
//			state.listData.splice(index,1,data)
			Vue.set(state.listData,index,data)
		}
//		,
//		delItem(state,{index}){
//			state.listData.splice(index,1)
//		}
	},
	actions:{
		getListData(context,payload={}){
			//context 上下文对象
			const {commit,state} = context;
			const {pageNum,pageSize} = state
			const {keyword,pid} = payload
			
			var params = qs.stringify({
				pid,
				pageNum,
				pageSize
			})
			
			axios.get(`http://localhost:8000/api/product/getListData?pageNum=${pageNum}&pageSize=${pageSize}`).then(res=>{
//				console.log(res.data)
				context.commit("setListData",res.data)
			})
		},
		del(context,{pid,index,succ,fail}){
		axios.post("http://localhost:8000/api/product/del",qs.stringify({pid})).then(res=>{
			console.log(res.data)
			if(res.data.msgCode==1){
				//成功
			context.dispatch("getListData")
				succ()
			}else{
				fail()
			}
		})
	}
	}
}
