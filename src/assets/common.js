const menuData = [{
    path: '/',
    component: 'home',
    icon: 'el-icon-information',
    name: '菜单一',
    children: [
        { path: '/table', component: 'menu1/table', name: '表格' },
        { path: '/form', component: 'menu1/form', name: 'form' },
        { path: '/draggable', component: 'menu1/draggable', name: '可拖拽表格', hidden: true },
    ]
}, {
    path: '/',
    component: 'home',
    name: '菜单二',
    icon: 'el-icon-message', //图标样式class
    children: [
        { path: '/menu2-1', component: 'menu2/menu2-1', name: 'menu2-1' },
        { path: '/menu2-2', component: 'menu2/menu2-2', name: 'menu2-2' }
    ]
}, {
    path: '/',
    component: 'home',
    name: '菜单三',
    icon: 'el-icon-message', //图标样式class
    children: [
        { path: '/menu3-1', component: 'menu3/menu3-1', name: 'menu3-1' }
    ]
}, {
    path: '/',
    component: 'home',
    icon: 'el-icon-document',
    children: [
        { path: '/menu5', component: 'menu5', name: '系统通知' },
    ]
}]
export default menuData
