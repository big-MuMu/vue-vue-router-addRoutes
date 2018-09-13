
<template>
<div>
    <el-row>
      <el-col :span="24" style="background:#f2f2f2;padding:10px;padding-bottom:0;">
        <el-form :inline="true" style="height:45px;">
          <el-form-item label="学生姓名">
            <el-input placeholder="姓名"></el-input>
          </el-form-item>
           
           
          <el-form-item>
            <el-button type="primary"><i class="el-icon-search"></i> 查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  <el-table
    :data="tableData"
    border
    style="width: 100%;margin-top:10px;"
    sortable
    >
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
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