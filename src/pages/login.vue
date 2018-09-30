<template>
    <el-form 
        :model="ruleForm" 
        :rules="rules" 
        ref="ruleForm" 
        label-position="left" 
        label-width="0px" 
        class="demo-ruleForm login-container">

        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input 
                type="text" 
                v-model="ruleForm.account" 
                auto-complete="off" 
                placeholder="账号"></el-input>
        </el-form-item>

        <el-form-item prop="checkPass">
            <el-input 
                type="password" 
                v-model="ruleForm.checkPass" 
                auto-complete="off" 
                placeholder="密码"></el-input>
        </el-form-item>

        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>

        <el-form-item style="width:100%;">
            <el-button 
                type="primary" 
                style="width:100%;" 
                :loading="logining" 
                @click="handleSubmit">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import axios from 'axios'
import lazyLoading from '../utils/index'
import menuD from '../assets/common' // 这里的数据模拟后台返回的数据
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            logining: false,
            ruleForm: {
                account: 'admin',
                checkPass: '123456'
            },
            rules: {
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
        ...mapState({
            menuData: state => state.menu,
        }),
    },
    methods: {
        ...mapMutations([
            'addMenu'
        ]),
        handleSubmit() {
            this.logining = true;
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    localStorage.setItem('token1', 'token1');
                    // 将获取到的菜单存在本地
                    localStorage.setItem('data', JSON.stringify(menuD));
                    // vuex定义的添加菜单，把后台返回的数据添加到vuex中,
                    this.addMenu(menuD)

                    this.$router.addRoutes(this.menuData)
                    this.$router.options.routes.push(...this.menuData)
                    // })

                    this.$router.push({
                        path: '/chart'
                    });
                    this.logining = false;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
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