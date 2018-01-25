import axios from "axios"

const config = {
  namespaced:true,
  state:{
    bannerData:[],
    manData:[]
  },
  getters:{
    // 获取/分拣/计算
    // 组件需要的数据（方便组件使用store里面的数据）
    bannerData:state=>state.bannerData,
    manData:state => state.manData

  },
  mutations:{
    setbannerData(state,payload){
        state.bannerData = payload.bannerData
    },
    setmanData(state, payload){
        state.manData = payload.manData
    }
  },
  actions:{
    getbannerData(context,payload){//获取数据  执行action 和服务器交互     
        axios("http://localhost:8000/api/lbt/getLbtData").then(res=>{//提交给motation 修改数据               
            context.commit("setbannerData",{bannerData:res.data[1].children})
            // console.log(res.data[1].children)
        })
    },
    getmanData(context, payload){
        axios("http://localhost:8000/api/hometwo/getHomeTwoData").then(res=>{//提交给motation 修改数据               
            context.commit("setmanData",{manData:res.data})
            console.log(res.data)
        })
    }
    
    
}

    }
export default config
