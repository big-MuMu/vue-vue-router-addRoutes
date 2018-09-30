# vue-addRoutes-vuex

### 项目介绍

基于vue、vuex、elementUI，搭建的简单的后台管理系统

### 项目功能介绍

- 根据不同的权限（后台返回的菜单）,更新路由表，渲染菜单

- 基于vuedraggable实现的表格拖拽功能

- 简单的table删除、修改，form表单

- 使用mock模拟数据

#### 软件架构

软件架构说明

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


#### 目录

    |--- assets
    |--- |--- common.js  模拟后台返回的菜单数据
    |--- pages
    |--- |--- menu1
    |--- |--- |--- draggable  可拖拽表格
    |--- |--- |--- from  表单
    |--- |--- |--- table  表格
    |--- router
    |--- |--- index.js  路由表
    |--- store
    |--- |--- store.js  vuex
    |--- utils
    |--- |--- index.js  公共js

