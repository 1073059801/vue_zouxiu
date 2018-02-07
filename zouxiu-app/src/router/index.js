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
import Sett from '@/modules/Cart/Sett.vue'
import Address from '@/modules/Cart/Address.vue'
//@ 代表 src目录
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
       
      ]
    },
    {
      path: "/home",
      name: 'home',
      component: Home
    },
    {
      path: "/man",
      name: "Man",
      component: Man
    },
    {
      path: "/baby",
      name: "Baby",
      component: Baby
    },
    {
      path: "/skin",
      name:"Skincare",
      component: Skincare
    },
    {
      path: "/maam",
      name: "Maam",
      component: Maam
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
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
      path: '/sett',
      name: 'Sett',
      component: Sett
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },


    {
      path: "/furn",
      name: "Furniture",
      component: Furniture
    },
 
    {
      path: "/class",
      name: "Class",
      component: Class
    },
    {
      path: "/user",
      name: "User",
      component: User,
      children:[
        
      ]
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
