<template>
    <el-row :gutter="20">
        <el-col :span="24" class="topTitle">22</el-col>
        <el-col :span="4">
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router>
                <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                    <el-submenu :index="index+''" v-if="item.children&&item.children.length>1">
                        <template slot="title">
                            <i :class="item.icon"></i>{{item.name}}</template>
                        <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item v-if="item.children&&item.children.length>0&&item.children.length<2" :index="item.children[0].path">
                        <i :class="item.icon"></i>{{item.children[0].name}}</el-menu-item>
                </template>
            </el-menu>
        </el-col>
        <el-col :span="20" class="container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/">
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                        {{ item.name }}
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </el-breadcrumb>
            <el-col :span="24" style="margin-top:10px;">
                <router-view></router-view>
            </el-col>
        </el-col>
    </el-row>
</template>

<style>
.topTitle {
    height: 80px;
    line-height: 80px;
    background: #58B7FF;
    color: #fff;
}

 

.container {
    padding-top: 20px;
}

.title { 
    float: left;
    color: #475669;
}

.breadcrumb-inner {
    float: right;margin-right:30px;
}
</style>

