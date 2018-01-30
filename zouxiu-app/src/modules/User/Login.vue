
<template>
   <div class="user" id="container">
     <lh-header>
          <a href="javascript:window.history.go(-1);" slot="left" class="iconfont icon-zuo"></a>
           <!-- a href="javascript:window.history.go(-1);" -->
           <div slot="content" id="header_content">
               <p>使用密码登录</p>
           </div>
           <i slot="right"></i>
     </lh-header>
     <lh-content>
         <div class="content">
             <table>
                 <input  @focus="focus" @blur="focusno" type="username" name="username" v-model="username" placeholder="手机号/邮箱/用户名">
             </table>
             <table>
                 <input  @focus="focus" @blur="focusno" type="password" name="password" v-model="password" placeholder="密码">
             </table>
            <div class="forgetpass">
                 <a href="#">忘记密码?</a>
             </div>
             <button @click="regis(username,password)">登录</button>
             <div class="forgetpass item">
                 <a href="#">使用手机验证码登录</a>
             </div>
             <div class="forgetpass item">
                 <router-link to="/reg"  index="">立即注册</router-link>
                 <!-- <div><router-view></router-view></div> -->
             </div>
            <div class="login">
                <p>
                    <span>使用第三方账号登录</span>
                </p>
                <div class="login_">
                    <a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100308612&redirect_uri=https%3A%2F%2Funion.xiu.com%2Ftencent%2FgetCodeWAP.do%3Furl%3Dhttp%253A%252F%252Fm.xiu.com%252Flogin%252Fsuccess.html" class="QQ"></a>
                    <a href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3D382f3674def34330832025da77e82b8c" class="QQ zfb"></a>
                </div>
            </div>
            <div class="forgetpass item xeiyi">
                 <a href="#">登录即代表您已同意<span>《走秀网用户协议》</span></a>
             </div>
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
          username:'15515052087',
          password:'111111'
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
                localStorage.userinfo = JSON.stringify(data.data.userInfo)
                //localStorage.setItem("userinfo",data.data.userInfo)
                console.log(data,2325464576576867)
                setTimeout(() => {
                    this.$router.push("/") 
                },2000)
            }
        })
    },
    focus(event){
        // console.log(event.target)
        event.target.style.borderBottom = '1px solid red'
    },
    focusno(event){
        // console.log(event.target)
        event.target.style.borderBottom = '1px solid #999'
    }
  },
  mounted(){
    if(localStorage.username){
        this.isLogin = true;
        this.username = JSON.parse(localStorage.username).username
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
        table{
            width: 100%;
            height: 40px;
            margin-top: 10px;
            input{
                width: 100%;
                height: 100%;
                border: none;
                border-bottom: 1px solid #999;
            } 
        }
        .forgetpass{
            text-align: right;
            margin-top: 10px;
        }
        button{
            width: 100%;
            height: 40px;
            background: #d2041f;
            border: none;
            color: #fff;
            font-size: 20px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .item{
            text-align: center;
            margin-top: 20px;
        }
        .login{
            margin-top: 100px;
            p{
                height: 1px ;
                background: #999;
                position: relative;
                top: 10px;
                text-align: left;
                span{
                    position: absolute;
                    left: 50px;
                    width: 150px;
                    text-align: center;
                    margin-top: -10px;
                    background: #fff;
                }
            }
            .login_{
                width: 100%;
                margin-top: 30px;
                display: flex;
                justify-content: space-around;
                .QQ{
                    width: 58px;
                    height: 55px;
                    background:url(../../assets/login.png) no-repeat;
                    background-size:241px;
                }
                .zfb{
                    background:url(../../assets/login.png) no-repeat -123px 0px;
                    background-size:241px;
                }
            }
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

