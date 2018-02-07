// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'


// Vue.use(ElementUI)

import axios from 'axios'
import qs from 'qs'

import lhHeader from '@/components/Header'
import lhContent from '@/components/Content'
import VueJsonp from 'vue-jsonp'


import { Swipe, SwipeItem, TabItem, Navbar, Toast, Lazyload, MessageBox, Loadmore, Indicator, Badge, Field, Picker,
   Popup} from 'mint-ui';


import store from "./store"
import MintUI from 'mint-ui'
import { mapGetters,mapActions } from 'vuex'

import Mint from 'mint-ui';
Vue.use(Mint);
Vue.use(MintUI);
Vue.use(Lazyload);

//josnp
Vue.use(VueJsonp)
Vue.component("lh-header",lhHeader)
Vue.component("lh-content",lhContent)
//mint-ui
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Badge.name, Badge);
Vue.component(Field.name, Field);
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);

//axios 
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
