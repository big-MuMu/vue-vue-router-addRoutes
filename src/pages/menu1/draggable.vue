<template>
    <div>
            <div class="dialog-body-table">
                <h4>鼠标可拖拽列名进行排序</h4>
                <div class="columnSetBox">
                    <div class="columnSetBox_title">
                        <el-row>
                            <el-col :span="6">名称</el-col>
                            <el-col :span="6">地址</el-col>
                            <el-col :span="8">备注</el-col>
                            <el-col :span="4">显示</el-col>
                        </el-row>
                    </div>

                    <draggable 
                        :list="draggData"
                        :options="{handle:'.draggActive'}" >

                        <div class="draggActive" v-for="(item) in draggData" :key="item.id">
                            <el-row>
                                <el-col :span="6">{{item.name}}</el-col>
                                <el-col :span="6">{{item.address}}</el-col>
                                <el-col :span="8">{{item.notes}}</el-col>
                                <el-col :span="4">
                                    <el-checkbox v-model="item.isShow"></el-checkbox>
                                </el-col>
                            </el-row>
                        </div>
                        
                    </draggable>

                </div>
            </div>
            <el-button type="primary" @click="setColSetData" title="点击确定输出的数据就是调整后的数据">确 定</el-button>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import Mock from 'mockjs'
export default {
    components: {
        draggable
    },
    data() {
        return {
            draggData: []  //列设置显示数据
        }
    },
    methods: {
        setColSetData() {
            log(this.draggData)
        }
    },
    mounted() {
        const mock = Mock.mock({
            "list|5-10": [{
                'name': '@cname',   //中文名称
                'address': '@city(true)',   //中文名称
                'id|+1': 0,   // 自增
                'notes': '@csentence(5, 8)',
                'isShow': Boolean,
            }]
        })
        this.draggData = mock.list
    }
}
</script>

<style lang="scss" scoped>
.dialog-body-table {
    h4 {
        color: #000;
        margin: 10px 30px;
    }
    // margin-bottom:20px;
}

.columnSetBox {
    width: 100%;
    overflow: auto;
}

.columnSetBox_title {
    background: #F4F4F4;
    text-align: center;
    height: 40px;
    line-height: 40px;
    .el-col {
        border-right: 1px solid #e0dfdf;
    }
}

.draggActive {
    text-align: center;
    height: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #e0dfdf;
    line-height: 40px;
    .el-col {
        border-right: 1px solid #e0dfdf;
        box-sizing: border-box;
        &:hover {
            cursor: move;
        }
    }
    /* .el-col:nth-child(2) {
        &:hover {
            cursor: move;
        }
    } */
}
</style>

