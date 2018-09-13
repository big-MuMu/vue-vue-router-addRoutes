import Vue from 'vue'
import Vuex from 'vuex'
import store from '../store/store'
import Router from 'vue-router'



let routes = [{
        path: '/login',
        component: require('@/pages/login.vue'),
        hidden: true,
    },
    {
        path: '/',
        component: require('@/pages/home.vue'),
        icon: 'el-icon-information',
        children: [
            { path: '/chart', component: require('@/pages/chart.vue'), name: '通知' },
        ]
    },
]

export default routes