// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueQuillEditor from 'vue-quill-editor'
import VueRouter from 'vue-router'
import routes from './router/index'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import store from './store/store'
import { mapMutations } from 'vuex'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueQuillEditor)
Vue.config.productionTip = false
const router = new VueRouter({ routes })
let permission = JSON.parse(window.sessionStorage.getItem('data'))
if (permission) {
    store.commit('addMenu', permission)
    for (var i = 0; i < permission.length; i++) {
        let item = permission[i]
        router.options.routes.push(item)

    }
    router.addRoutes(permission)
}

function generateRoutesFromMenu(menu = [], routes = []) {
    for (let i = 0, l = menu.length; i < l; i++) {
        let item = menu[i]
        if (item.path) {
            routes.push(item)
        }
    }
    return routes
}


router.beforeEach((route, redirect, next) => {

    if (route.path === '/login') {
        window.sessionStorage.removeItem('user')
        window.sessionStorage.removeItem('data')
        store.commit('addMenu', [])
    }
    let user = JSON.parse(window.sessionStorage.getItem('user'))
    if (!user && route.path !== '/login') {
        next({ path: '/login' })
    } else {
        if (route.name != '') {
            next()
        } else {
            next({ path: '/nofound' })
        }
    }
})



new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})