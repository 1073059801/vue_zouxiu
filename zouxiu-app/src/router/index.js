import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/modules/Index/Index'
import Home from '@/modules/Home/Home'
import Man from '@/modules/Man/Man'
import Maam from '@/modules/Maam/Maam'
import Skincare from '@/modules/Skincare/Skincare'
import Furniture from '@/modules/Furniture/Furniture'
import Baby from '@/modules/Baby/Baby'
import Class from '@/modules/Class/Class'
import User from '@/modules/User/User'
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
    },
    {
      path:"*",
      component:{template:"<h1>404</h1>"}
    }
  ]
})
