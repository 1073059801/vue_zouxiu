
<template>
   <div class="address" id="container">
    <lh-header>
        <a href="javascript:window.history.go(-1);" slot="left" class="iconfont icon-zuo left"></a>
        <!-- a href="javascript:window.history.go(-1);" -->
        <div slot="content" id="header_content">
            <p>收货地址</p>
        </div>
        <i slot="right" class="iconfont icon-msnui-more" ></i>
    </lh-header>
     <lh-content>
        <mt-field label="收货人：" placeholder="请收货人姓名" ></mt-field> <!--v-model="username"-->
        <mt-field label="手机号：" placeholder="请输入手机号" type="tel" ></mt-field>     <!--v-model="phone"-->   
        <mt-field label="邮政编码：" placeholder="请输入邮政编码" type="tel" ></mt-field>     <!--v-model="phone"-->   
        <div class="Goods"  @click="handleClick">
            <div class="left">
                收货地址：
            </div>
            <div class="content">
                <p>{{province}} {{city}} {{area}}</p>
            </div>
            <div class="right">
                <i class="iconfont icon-you"></i>
            </div>
        </div>
        

        <mt-field label="详细地址" placeholder="请填写详细地址" type="textarea" rows="4"></mt-field>  <!--v-model="introduction"-->   

        <mt-popup
            v-model="popupVisible"
            position="bottom">
            <mt-picker :slots="slots" @change="onValuesChange" value-key="name"></mt-picker>
        </mt-popup>
        <mt-button @click="payment_btn()">
                保存
        </mt-button>
     </lh-content>
        <div class="home_footer">
            <div class="top">
                <p>触屏版</p>
                <p>电脑版</p>
            </div>
            <div class="bottom">
                <p>© 2018 走秀网</p>
            </div>
        </div>
   </div>
</template>

<script  type="text/ecmascript-6" >
import s from '@/assets/address'

export default {
  data(){
    return {
        province: '',  //省
        city:'',  //市
        area:'',   //区
        Street:'',   //街道
        popupVisible: false,
        s,
      slots: [
        {
          flex: 1,
          values: s,
          className: 'slot1',
          textAlign: 'right'    
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: s[0].childs   ,
          className: 'slot3',
          textAlign: 'left'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: s[0].childs[0].childs   ,
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },
  methods:{
      handleClick: function() {
        this.popupVisible = true
        },
     onValuesChange(picker, values) {
    //   console.log(picker, values)
    //   console.log(values[0].childs)
      picker.setSlotValues(1, values[0].childs)
      picker.setSlotValues(2, values[1].childs)
     
      console.log(values[0].name)
      console.log(values[1].name)
      console.log(values[2])
      this.province = values[0].name
      this.city = values[1].name
      this.area = values[2].name

    },
    payment_btn(){
        console.log("0000")
    }
  },
  mounted(){
     console.log(s)
  }
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
.address{
    .header{
        background: #f0f0f0;
        font-size: 16px;
        border-bottom: 1px solid #999;
        .left{
            color: #999
        }
        .right{
            color: #d2041f;
        }
    }
    .content{
        text-align: center;
        a{
            color:#333;
        } 
        .Goods{
            font-size: 17px;
            border-top: 1px solid #999;
            border-bottom: 1px solid #999;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            padding-left: 24px;
            .left{

            }
            .content{
                flex: 1;
                text-align: left;
                color: #888;
                padding-left: 8px;
            }

        }
        button{
            width: 90%;
            height:40px;
            background: #d2041f;
            border-radius: 5px;
            border: none;
            margin-top: 10px;
            color: #f6f6f8;
        }
    }
        .home_footer{
        width: 100%;
        height: 96  px;
        background: #fff;
        padding: 20px 0px;
        font-size: 12px;
        color:#666;
        .top{
            width: 100%;
            
            display: flex;
            justify-content: center;
            text-align: center;
            p{
                width: 100px;
               
            }
            p:nth-of-type(1){
                border-right: 1px solid #999;
            }
        }
       
        .bottom{
            width: 100%;
            margin-top: 10px;
            p{
                text-align: center;
            }
        }
    }
}

</style>
