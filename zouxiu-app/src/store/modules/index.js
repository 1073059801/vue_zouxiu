import axios from "axios"

const config = {
  namespaced:true,
  state:{
    listData:[]
  },
  getters:{
    // 获取/分拣/计算
    // 组件需要的数据（方便组件使用store里面的数据）
    listData:state=>state.listData

  },
  mutations:{
    setlistData(state,payload){
        state.listData = payload.listData
        
    }
  },
  actions:{
    getlistData(context,payload){//获取数据  执行action 和服务器交互
        axios("http://localhost:8000/api/index/getFirstData").then(res=>{//提交给motation 修改数据               
            context.commit("setlistData",{listData:res.data})
            // console.log(res.data)
        })
    }
    
}

    }
export default config
