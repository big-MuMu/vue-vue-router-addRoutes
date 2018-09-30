<template>
    <el-table
        :data="tableData"
        stripe
        style="width: 100%">

        <el-table-column
            prop="date"
            label="日期">
        </el-table-column>

        <el-table-column
            prop="name"
            label="姓名">
            <template slot-scope="scope">
                <el-input 
                    v-if="scope.row.isEdit"
                    v-model="scope.row.name" 
                    placeholder="请输入姓名">
                </el-input>
                <span v-else v-text="scope.row.name"></span>
            </template>
        </el-table-column>

        <el-table-column
            prop="sex"
            label="性别">
            <template slot-scope="scope">
                <span>{{scope.row.sex === 1 ? '男': '女'}}</span>
            </template>
        </el-table-column>

        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>

        <el-table-column
            prop="notes"
            label="备注">
        </el-table-column>

        <el-table-column
            fixed="right"
            label="操作"
            width="280">
            <template slot-scope="scope">
                <el-button type="text" v-if="!scope.row.isEdit" @click="toggle(scope.row)" size="small">编辑</el-button>
                <el-button type="text" v-else @click="toggle(scope.row)" size="small">保存</el-button>
                <el-button type="danger" @click="del(scope.$index)" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>

import Mock from 'mockjs'
export default {
    data() {
        return {
            tableData: [],
        }
    },
    methods: {
        toggle(row) {
            this.$set(row, 'isEdit', !row.isEdit)
        },
        del(index) {
            this.tableData.splice(index, 1)
        }
    },
    mounted() {
        const mock = Mock.mock({
            "list|5-10": [{
                'name': '@cname',   //中文名称
                'address': '@city(true)',   //中文名称
                'id|+1': 0,   // 自增
                'sex': '"number|0-1"',
                'notes': '@csentence(5, 8)',
                'date': '@date()',
            }]
        })
        this.tableData = mock.list
    }
}
</script>


 

 
