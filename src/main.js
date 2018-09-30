// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import routes from './router/index'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import store from './store/store'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({ routes })

window.log = console.log.bind(console);
// 刷新页面后，路由表里会只剩下本地定义的 ，没有登录后添加的，所以这里再处理一下
let permission = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : null;
if (permission) {
    store.commit('addMenu', permission);
    router.addRoutes(permission)
    router.options.routes.push(...permission)
}

// 路由守卫
router.beforeEach((route, redirect, next) => {

    if (route.path === '/login') {
        localStorage.removeItem('token1')
    }
    let user = localStorage.getItem('token1')
    
    if (!user && route.path !== '/login') {
        next({ path: '/login' })
    } else {
        if (route.name != '') {
            next()
        } else {
            next({ path: '/chart' })
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