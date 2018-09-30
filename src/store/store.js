import Vue from 'vue'
import Vuex from 'vuex'
import lazyLoading from '../utils/index'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        menu: [],
    },
    mutations: {
        addMenu(state, menuItems = []) {
            if (!menuItems.length) {
                state.menu = [];
                return
            }
            // 后台传来的menu参数是字符串 所以要把component处理一下
            menuItems.forEach(i => {
                i.component = lazyLoading(i.component)
                i.children.forEach((child) => {
                    // console.log(child.component)
                    child.component = lazyLoading(child.component)
                    // console.log(child.component)
                })
            })
            state.menu = [...state.menu, ...menuItems];
        },
        clear(state) {
            state.menu = [];
        }
    }
})



export default store