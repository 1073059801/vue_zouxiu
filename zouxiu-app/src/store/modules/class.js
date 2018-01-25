import axios from "axios"

const config = {
  namespaced:true,
  state:{
    classData:[]
  },
  getters:{
    // 获取/分拣/计算
    // 组件需要的数据（方便组件使用store里面的数据）
    classData:state=>state.classData

  },
  mutations:{
    setclassData(state,payload){
        state.classData = payload.classData
        
    }
  },
  actions:{
    getclassData(context,payload){//获取数据  执行action 和服务器交互
        axios("http://localhost:8000/api/kind/getKindData").then(res=>{//提交给motation 修改数据               
            context.commit("setclassData",{classData:res.data})
            // console.log(res.data)
        })
    }
    
}

    }
export default config
