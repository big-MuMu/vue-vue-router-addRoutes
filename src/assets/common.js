const menuData = [{
    path: '/',
    component: 'home',
    icon: 'el-icon-information',
    name: '菜单一',
    children: [
        { path: '/menu1-1', component: 'menu1/menu1-1', name: '表格' },
        { path: '/menu1-2', component: 'meu1/menu1-2', name: 'menu1-2', hidden: true },
        { path: '/menu1-3', component: 'menu1/menu1-3', name: '表单' },
    ]
}, {
    path: '/',
    component: require('@/views/home.vue'),
    name: '菜单二',
    icon: 'el-icon-message', //图标样式class
    children: [
        { path: '/menu2-1', component: 'menu2/menu2-1', name: 'menu2-1' },
        { path: '/menu2-2', component: 'menu2/menu2-2', name: 'menu2-2' }
    ]
}, {
    path: '/',
    component: require('@/views/home.vue'),
    name: '菜单三',
    icon: 'el-icon-message', //图标样式class
    children: [
        { path: '/menu3-1', component: 'menu3/menu3-1', name: 'menu3-1' }
    ]
}, {
    path: '/',
    component: require('@/views/home.vue'),
    icon: 'el-icon-document',
    children: [
        { path: '/menu5', component: 'menu5', name: '系统通知' },
    ]
}]
export default menuData