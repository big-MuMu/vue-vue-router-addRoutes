<template>
    <el-table
        :data="tableData"
        stripe
        style="width: 100%">

        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>

        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>

        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
    </el-table>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
export default {
    data() {
        return {
            tableData: [],
        }
    },
    methods: {
        getList() {
            axios.get('assets/json/table.json')
            .then(res => {
                log(res)
            })
        },
    },
    mounted() {
        // this.getList();
    }
}
</script>


 

 
