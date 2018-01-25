import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import classs from './modules/class'
import home from './modules/home'
import man from './modules/man'
import maam from './modules/maam'
import skincare from './modules/skincare'
import furniture from './modules/furniture'
import baby from './modules/baby'


Vue.use(Vuex)

const Store = new Vuex.Store({
    modules:{
        index,
        classs,
        home,
        man,
        maam,
        skincare,
        furniture,
        baby
    }
})

export default Store
