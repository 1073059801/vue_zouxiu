import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/modules/Home'
import Product from '@/modules/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
      	{
      		path:"",
      		component:Home
      	},
      	{
      		path:"product",
      		component:{template:`<router-view></router-view>`},
      		children:[
      		{
      			path:"add",component:()=>import("@/modules/Product/Add")
      		},
      		{
      			path:"list",component:()=>import("@/modules/Product")
      		}
      		]
      	},
      	{
      		path:"cate",
      		component:{template:`<router-view></router-view>`},
      		children:[
      		{
      			path:"add",
      			component:()=>import("@/modules/Category/Add")
      		},
      		{
      			path:"list",
      			component:()=>import("@/modules/Category/List")
      		}
      		]
      	},
      	{
      		path:"order",
      		component:{template:`<router-view></router-view>`},
      		children:[
      			{
      				path:"list",
      				component:()=>import("@/modules/Order/List")
      			},
      			{
      				path:"tui",
      				component:{render(h){
      					return h("div",null,'order tui tui')
      				}}
      			}
      		]
      	}
      ]
    },{
    	path:"*",
    	redirect:"/home"
    }
  ]
})
