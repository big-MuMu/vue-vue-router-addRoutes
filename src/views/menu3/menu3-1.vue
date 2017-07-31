
<template>
    <div>
    
        <el-tabs v-model="activeName">
            <el-tab-pane label="个人" name="first">
                <el-table :data="tableData" border style="width: 100%;margin-top:30px;" sortable>
            <el-table-column prop="date" label="日期" sortable width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
        </el-table>
            </el-tab-pane>
            <el-tab-pane label="班级" name="second">
                <el-table :data="tableData" border style="width: 100%;margin-top:30px;" sortable>
            <el-table-column prop="date" label="生日" sortable width="180">
            </el-table-column>
            <el-table-column prop="name" label="名称" sortable width="180">
            </el-table-column>
            <el-table-column prop="address" label="位置" :formatter="formatter">
            </el-table-column>
        </el-table>
            </el-tab-pane>
        </el-tabs>
    
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            filters: {
                name: ''
            },
            activeName: 'first',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        formatter(row, column) {
            return row.address;
        }
    }
}
</script>