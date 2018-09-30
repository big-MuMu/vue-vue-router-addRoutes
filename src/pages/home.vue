<template>
    <el-row :gutter="20">
        <el-col :span="24">
            <div class="topTitle">
                <span>后台管理</span>
                <span style="float: right; cursor: pointer;" @click="exit">退出</span>
            </div>
            
        </el-col>
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

<script>
export default {
    methods: {
        exit() {
            this.$store.commit('clear'); // 清空vuex的数据
            localStorage.clear();
            this.$router.push({path: '/login'})
        }
    }
}
</script>


<style>
    .topTitle {
        height: 80px;
        width: 100%;
        line-height: 80px;
        background: #58B7FF;
        color: #fff;
        padding: 0 30px;
        box-sizing: border-box;
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

