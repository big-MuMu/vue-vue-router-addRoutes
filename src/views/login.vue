<template>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" :loading="logining" @click="handleSubmit2">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import axios from 'axios'
import {
    mapActions,
    mapGetters
} from 'vuex'
import store from '../store/store'
import menuData from '../assets/common'
export default {
    data() {
        return {
            logining: false,
            ruleForm2: {
                account: 'admin',
                checkPass: '123456'
            },
            rules2: {
                account: [{
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                },],
                checkPass: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                },]
            },
            checked: true
        };
    },
    computed: {
        ...mapGetters([
            'menuitems',
            'isLoadRoutes'
        ])
    },
    methods: {
        handleSubmit2() {
            this.logining = true;
            this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    sessionStorage.setItem('user', '222');
                    sessionStorage.setItem('data', JSON.stringify(menuData));
                    this.addMenu(menuData)
                    if (!this.isLoadRoutes) {
                        for (var i = 0; i < menuData.length; i++) {
                            let item = menuData[i]
                            this.$router.options.routes.push(item)
                        }
                        this.$router.addRoutes(this.menuitems)
                        this.loadRoutes()
                    }


                    this.$router.push({
                        path: '/404'
                    });
                    this.logining = false;


                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        ...mapActions([
            'addMenu',
            'loadRoutes'
        ])
    }
}

function generateRoutesFromMenu(menu = [], routes = []) {
    debugger
    for (let i = 0, l = menu.length; i < l; i++) {
        let item = menu[i]
        if (item.path) {
            routes.push(item)
        }
    }
    return routes
}


</script>

<style scoped>
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.login-container .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}

.login-container .remember {
    margin: 0px 0px 35px 0px;
}
</style>