import axios from "axios"

const config = {
  namespaced:true,
  state:{
    bannerData:[]
  },
  getters:{
    // 获取/分拣/计算
    // 组件需要的数据（方便组件使用store里面的数据）
    bannerData:state=>state.bannerData

  },
  mutations:{
    setbannerData(state,payload){
        state.bannerData = payload.bannerData
        
    }
  },
  actions:{
    getbannerData(context,payload){//获取数据  执行action 和服务器交互
        axios("http://localhost:8000/api/lbt/getLbtData").then(res=>{//提交给motation 修改数据               
            context.commit("setbannerData",{bannerData:res.data[3].children})
            // console.log(res.data[1].children)
        })
    }
    
}

    }
export default config
