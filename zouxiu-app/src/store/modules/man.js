import axios from "axios"

const config = {
  namespaced:true,
  state:{
    bannerData:[],
    manData:[],
    good:[],
    good2:[],
    good3:[],
    good4:[],
    good5:[],
    good6:[],
    good7:[],
    good8:[],
    good9:[],
    good10:[],
    good11:[],
    good12:[],
    Selling:[],
    Selling2:[],
    extravagant:[],
    extravagant2:[]
  },
  getters:{
    // 获取/分拣/计算
    // 组件需要的数据（方便组件使用store里面的数据）
    bannerData:state=>state.bannerData,
    manData:state => state.manData,
    good:state => state.good,
    good2:state => state.good2,
    good3:state => state.good3,
    good4:state => state.good4,
    good5:state => state.good5,
    good6:state => state.good6,
    good7:state => state.good7,
    good8:state => state.good8,
    good9:state => state.good9,
    good10:state => state.good10,
    good11:state => state.good11,
    good12:state => state.good12,
    Selling:state => state.Selling,
    Selling2:state => state.Selling2,
    extravagant:state => state.extravagant,
    extravagant2:state => state.extravagant2,

  },
  mutations:{
    setbannerData(state,payload){
        state.bannerData = payload.bannerData
    },
    setmanData(state, payload){
        state.manData = payload.manData,
        state.good = payload.good,
        state.good2 = payload.good2,
        state.good3 = payload.good3,   
        state.good4 = payload.good4,
        state.good5 = payload.good5, 
        state.good6 = payload.good6, 
        state.good7 = payload.good7, 
        state.good8 = payload.good8, 
        state.good9 = payload.good9,
        state.good10 = payload.good10,
        state.good11 = payload.good11,
        state.good12 = payload.good12,
        state.Selling = payload.Selling,
        state.Selling2 = payload.Selling2,
        state.extravagant = payload.extravagant,
        state.extravagant2 = payload.extravagant2
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
            context.commit("setmanData",{    //splice(0,2)
                manData:res.data[0].children,
                good:res.data[1],
                good2:res.data[1].children.splice(0,1),
                good3:res.data[1].children.splice(0,3),
                good4:res.data[1].children.splice(0,2),
                good5:res.data[1].children.splice(0,1),
                good6:res.data[1].children.splice(0,5),
                good7:res.data[1].children.splice(0,1),                
                good8:res.data[1].children.splice(0,5),                
                good9:res.data[1].children.splice(0,1),                
                good10:res.data[1].children.splice(0,5),                
                good11:res.data[1].children.splice(0,1),                
                good12:res.data[1].children.splice(0,5),  
                Selling:res.data[2],
                Selling2:res.data[2].children.splice(0,6),  
                extravagant:res.data[3],
                extravagant2:res.data[3].children.splice(0,6),  
                
            })
            console.log(res.data[3])
        })
    }
    
    
}

    }
export default config
