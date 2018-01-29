
<template>
   <div class="user" id="container">
     <lh-header>
          <a href="javascript:window.history.go(-1);" slot="left" class="iconfont icon-zuo"></a>
           <!-- a href="javascript:window.history.go(-1);" -->
           <div slot="content" id="header_content">
               <p>个人中心</p>
           </div>
           <i slot="right"></i>
     </lh-header>
     <lh-content>
         <div class="content">
             <div class="Center1" v-if = "isLogin">
                <button class="touxiang" @click="sheetVisible = true">
                    点击换头像
                </button>
                <p>{{this.username}}</p>
            </div>
            
            <div class="Center" v-else>
                <router-link to="/reg">
                    <p>注册</p>
                </router-link>
                <div class="border">
                    
                </div>
                <router-link to="/login">
                    <p>登录</p>
                </router-link>
            </div>

            <button style="margin-top:100px;" @click="logout()"  v-if = "isLogin">退出登录</button> 

            <mt-actionsheet
                :actions="actions"
                v-model="sheetVisible">
            </mt-actionsheet>
         </div>
     </lh-content>
   </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui';

export default {
  data(){
      return{
          isLogin:false,
          sheetVisible:false,
          username:'',
          password:'111111',
          actions:[{
                name:"拍照",
                method:this.takePhoto() 
            },
            {
                name:"本地图库",
                method:this.getPhoto() 
            }]
      }
  },
  methods:{
      regis(username,password){
        var username = this.username
        var password = this.password
        var data2 = {
            username,
            password
        }
        // console.log(data)
        axios.post("http://localhost:8000/api/user/login", qs.stringify(data2)).then(data => {
            // console.log(data)
            if(data.data.msgCode == "0"){
                Toast('用户名不存在');
            }else if(data.data.msgCode == "2"){
                Toast('密码错误');
            }else if(data.data.msgCode == "1"){
                Toast('登陆成功');
                // localStorage.username = JSON.stringify(data2)
                localStorage.setItem("username",data2.username)
                setTimeout(() => {
                    this.$router.push("/") 
                },2000)
            }
        })
    },
    logout(){
        localStorage.removeItem("username");
        this.$router.push("/login")
    },
    getPhoto(){
        console.log("本地图库")
    },
    takePhoto(){
    console.log("拍照")
    }
  },
  mounted(){
    if(localStorage.username){
        this.isLogin = true;
        // this.username = JSON.parse(localStorage.username).username
        this.username = localStorage.getItem("username")
        console.log(this.username)
	}
  }
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
.user{
    .header{
        background: #f0f0f0;
        color: #000;
        .iconfont{ 
            color: #999;
        }
        #header_content{
            p{
                font-size: 18px;
            }
            
        }
    }
    .content{
        padding: 0 30px;
        background: url("../../assets/true.jpg") no-repeat;
        background-size:cover; 
        .Center1{
            width:100%;
            display:flex;
            flex-direction: column;
            align-items: center;
            font-size:20px;
            color:#000;
            text-align: center;
            
            .touxiang{
                margin-top: 20px;
                width: 1rem;
                height:1rem;
                border: 3px solid #fff;
                border-radius: 50%;
                color: #fff;
                font-size: 15px;
            }
            p{
                text-align: center;
                font-size: 30px;
                color: #000000;
                margin-top: 20px;
            }
            .border{
                border-left: 2px solid #fff;
                height: 50px;
            }
        }

        .Center{
            height:100px;
            width:100%;
            display:flex;
            justify-content: space-around;
            align-items: center;
            font-size:20px;
            color:#000;
            p{
                color: #000;
            }
            .border{
                border-left: 2px solid #000;
                height: 50px;
            }
        }

        button{
            width: 100%;
            height: 40px;
            background: #d2041f;
            border: none;
            color: #fff;
            font-size: 20px;
            border-radius: 5px;
        }
        .xeiyi{
            margin-top: 30px;
            a{
                color: #000;
                span{
                    color: #d2041f;
                }
            }
        }
    }
}

</style>

