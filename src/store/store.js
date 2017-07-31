import Vue from 'vue'
import Vuex from 'vuex'
import lazyLoading from '../assets/lazy'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        items: [],
        isLoadRoutes: false
    },

    getters: {
        menuitems: state => {
            return state.items
        },
        isLoadRoutes: state => {
            return state.isLoadRoutes
        }
    },
    mutations: {
        addMenu(state, menuItems) {
            if (menuItems.length === 0) {
                state.items = []
            } else {
                // state.items = menuItems
                menuItems.map(function(item) {
                    item.component = lazyLoading(item.component)
                    item.children.map(function(child) {
                        child.component = lazyLoading(child.component)
                    })
                })
                state.items.push(...menuItems)
            }
        },
        loadRoutes(state) {
            state.isLoadRoutes = !state.isLoadRoutes
        }
    },
    actions: {
        addMenu({ commit }, menuItems) {
            if (menuItems.length > 0) {
                commit('addMenu', menuItems)
            }
        },
        loadRoutes({ commit }) {
            commit('loadRoutes')
        }
    }
})



export default store