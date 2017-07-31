import Vue from 'vue'
import Vuex from 'vuex'
import store from '../store/store'
import Router from 'vue-router'



let routes = [{
        path: '/login',
        component: require('@/views/login.vue'),
        hidden: true,
    },
    {
        path: '/',
        component: require('@/views/home.vue'),
        icon: 'el-icon-information',
        children: [
            { path: '/404', component: require('@/views/404.vue'), name: '通知' },
        ]
    },
    //...generateRoutesFromMenu()
]

// Menu should have 2 levels.  



function generateRoutesFromMenu(menu = [], routes = []) {
    for (let i = 0, l = menu.length; i < l; i++) {
        let item = menu[i]
        if (item.path) {
            routes.push(item)
        }
    }
    return routes
}
export default routes
// let routes = [{
//         path: '/login',
//         component: login,
//         name: '',
//         hidden: true,
//     },

//     {
//         path: '/',
//         component: Home,
//         name: '',
//         leaf: true,
//         icon: 'el-icon-information',
//         children: [
//             { path: '/notice', component: notice, name: '通知' },
//         ]
//     },
// {
//     path: '/',
//     component: Home,
//     name: '',
//     leaf: true,
//     icon: 'el-icon-information',
//     children: [
//         { path: '/homepage', component: homepage, name: '课程表' },
//     ]
// },
//     {
//         path: '/',
//         component: Home,
//         name: '备课',
//         icon: 'el-icon-message', //图标样式class
//         children: [
//             { path: '/golesson', component: golesson, name: '备课', hidden: true },
//             { path: '/newlesson', component: newlesson, name: '新建教案' },
//             { path: '/personcourse', component: personcourse, name: '个人课程历史记录' },
//             { path: '/classcourse', component: classcourse, name: '班级课程历史记录' },
//         ]
//     },
//     {
//         path: '/',
//         component: Home,
//         name: '我的学生',
//         icon: 'el-icon-message', //图标样式class
//         children: [
//             { path: '/mystudy', component: mystudy, name: '我的小组' },
//             { path: '/classeval', component: classeval, name: '课时评价' },
//         ]
//     },
//     {
//         path: '/',
//         component: Home,
//         name: '',
//         leaf: true,
//         icon: 'el-icon-menu',
//         children: [
//             { path: '/myquestion', component: myquestion, name: '我的题库' },
//         ]
//     },
//     {
//         path: '/',
//         component: Home,
//         name: '',
//         leaf: true,
//         icon: 'el-icon-document',
//         children: [
//             { path: '/studentfile', component: studentfile, name: '学生档案' },
//         ]
//     },
//     {
//         path: '/',
//         component: Home,
//         name: '',
//         leaf: true,
//         icon: 'el-icon-picture',
//         children: [
//             { path: '/mylesson', component: mylesson, name: '我的备课' },
//         ]
//     },
// ];

// export default routes