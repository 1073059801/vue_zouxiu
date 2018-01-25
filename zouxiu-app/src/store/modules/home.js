import axios from "axios"

const config = {
  namespaced:true,
  state:{
    bannerData:[],
    homeData:[],
    homeData2:[],
    homeData3:[],
    homeData4:[],
    homeData5:[],
    sale:[],
    sale2:[],
    sale3:[],
    sale4:[],
    screen:[],
    screen2:[],
    screen3:[],
    screen4:[],
    mama:[],
    mama2:[],
    mama3:[],
    mama4:[]
  },
  getters:{
    // 获取/分拣/计算
    // 组件需要的数据（方便组件使用store里面的数据）
    bannerData:state=>state.bannerData,
    homeData:state=>state.homeData,
    homeData2:state=>state.homeData2,
    homeData3:state=>state.homeData3,
    homeData4:state=>state.homeData4,
    homeData5:state=>state.homeData5,
    sale:state=>state.sale,
    sale2:state=>state.sale2,
    sale3:state=>state.sale3,
    sale4:state=>state.sale4,
    screen:state=>state.screen,
    screen2:state=>state.screen2,
    screen3:state=>state.screen3,
    screen4:state=>state.screen4,
    mama:state=>state.mama,
    mama2:state=>state.mama2,
    mama3:state=>state.mama3,
    mama4:state=>state.mama4,
  },
  mutations:{
    setbannerData(state, payload){
        state.bannerData = payload.bannerData
    },
    sethomeData(state, payload){
        state.homeData = payload.homeData,
        state.homeData2 = payload.homeData2,
        state.homeData3 = payload.homeData3,
        state.homeData4 = payload.homeData4,
        state.homeData5 = payload.homeData5,
        state.sale = payload.sale,
        state.sale2 = payload.sale2,
        state.sale3 = payload.sale3,
        state.sale4 = payload.sale4,
        state.screen = payload.screen,
        state.screen2 = payload.screen2,
        state.screen3 = payload.screen3,
        state.screen4 = payload.screen4,
        state.mama = payload.mama,
        state.mama2 = payload.mama2,
        state.mama3 = payload.mama3,
        state.mama4 = payload.mama4
        
        }
  },
  actions:{
    getbannerData(context,payload){//获取数据  执行action 和服务器交互
        axios("http://localhost:8000/api/lbt/getLbtData").then(res=>{//提交给motation 修改数据               
            context.commit("setbannerData",{bannerData:res.data[0].children})
            // console.log(res.data[0].children)
        })
    },
    gethomeData(context,payload){
        axios("http://localhost:8000/api/home/getHomeData").then(res=>{//提交给motation 修改数据               
            context.commit("sethomeData",{
                                          homeData:res.data[0],
                                          homeData2:res.data[0].children.splice(0,2),
                                          homeData3:res.data[0].children.splice(0,3),
                                          homeData4:res.data[0].children.splice(0,3),
                                          homeData5:res.data[0].children.splice(0,3),
                                          sale:res.data[1],
                                          sale2:res.data[1].children.splice(0,4),                                          
                                          sale3:res.data[1].children.splice(0,2),                                    
                                          sale4:res.data[1].children,
                                          screen:res.data[2],                                                                    
                                          screen2:res.data[2].children.splice(0,4),                                                                 
                                          screen3:res.data[2].children.splice(0,4),                                                                
                                          screen4:res.data[2].children.splice(0,4),                                                                
                                          mama:res.data[3],                                                                
                                          mama2:res.data[3].children.splice(0,1),                                                                   
                                          mama3:res.data[3].children.splice(0,4),                                                                   
                                          mama4:res.data[3].children.splice(0,3),                                                                   
                                        }) //splice(0,2)
            // context.commit("sethomeData2",{homeData2:res.data.splice(0,1).children}) //splice(0,2)
            console.log(res.data[3])
        })
    }
}

    }
export default config
