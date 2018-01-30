import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/modules/Index/Index'
import Search from '@/modules/Index/Search'
import Home from '@/modules/Home/Home'
import List from '@/modules/Home/List'
import Man from '@/modules/Man/Man'
import Maam from '@/modules/Maam/Maam'
import Skincare from '@/modules/Skincare/Skincare'
import Furniture from '@/modules/Furniture/Furniture'
import Baby from '@/modules/Baby/Baby'
import Class from '@/modules/Class/Class'
import User from '@/modules/User/User'
import Reg from '@/modules/User/Reg.vue'
import Login from '@/modules/User/Login.vue'
import Detail from '@/modules/Detail/Detail.vue'
import Cart from '@/modules/Cart/Cart.vue'
//@ 代表 src目录
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: "/home",
      name: 'home',
      component: Home
    },
    {
      path: "/list",
      name: 'List',
      component: List
    },
    {
      path: "/deta:id",
      name: 'Detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: "/man",
      name: "Man",
      component: Man
    },
    {
      path: "/maam",
      name: "Maam",
      component: Maam
    },
    {
      path: "/skin",
      name:"Skincare",
      component: Skincare
    },
    {
      path: "/furn",
      name: "Furniture",
      component: Furniture
    },
    {
      path: "/baby",
      name: "Baby",
      component: Baby
    },
    {
      path: "/class",
      name: "Class",
      component: Class
    },
    {
      path: "/user",
      name: "User",
      component: User
      // children: [
      //   {
      //     // path: "reg",
      //     // name: "Reg",
      //     // component:Reg
      //     // path:"reg",component:()=>import("@/modules/User/Reg")
      //   }
      // ]
    },
    {
      path: "/reg",
          name: "Reg",
          component: Reg
    },
    {
      path: "/login",
      name: "Longin",
      component: Login
    },
    {
      path:"*",
      component:{template:"<h1>404</h1>"}
    }
  ]
})
