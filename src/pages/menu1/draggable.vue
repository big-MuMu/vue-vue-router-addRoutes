<template>
    <div>
        <el-dialog title="列表设置" 
            :visible.sync="dialogVisibleCol" 
            size="small" 
            :before-close="dialogHandleClose">

            <div class="dialog-body-table">
                <h4>鼠标可拖拽列名进行排序</h4>
                <div class="columnSetBox">
                    <div class="columnSetBox_title">
                        <el-row>
                            <el-col :span="2">-</el-col>
                            <el-col :span="8">列名</el-col>
                            <el-col :span="10">显示名称</el-col>
                            <el-col :span="4">显示</el-col>
                        </el-row>
                    </div>

                    <draggable 
                        :list="dataColSet"
                        :options="{handle:'.draggActive'}" 
                        v-loading="loading">

                        <div class="draggActive" v-for="(item, index) in dataColSet" :key="item.id">
                            <el-row>
                                <el-col :span="2">{{index+1}}</el-col>
                                <el-col :span="8">{{item.columnCnName}}</el-col>
                                <el-col :span="10">

                                    <el-input 
                                        @focus="(event) => {event.currentTarget.select()}"
                                        v-model="item.columnViewName" 
                                        placeholder="请输入内容" 
                                        class="input-no-border">
                                    </el-input>

                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox v-model="item.isShow"></el-checkbox>
                                </el-col>
                            </el-row>
                        </div>
                        
                    </draggable>

                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibleCol = false">取 消</el-button>
                <el-button type="primary" @click="setColSetData(1)">确 定</el-button>
                <el-button @click="setColSetData(0)">还原默认设置</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    props: ['value', 'tableDefaultId'], // tableDefaultId 单据传进来的tableID 不直接获取路由里的tableID（组装、拆卸、商品库）
    components: {
        draggable
    },
    data() {
        return {
            loading: false,
            dialogVisibleCol: false, // dialog是否显示
            dataColSet: [],    //列设置显示数据
            dataColSet_c: [],
            sourceTypes: [this.$kgw.config.parmenters.sourceType.PRODUCE_PICK, this.$kgw.config.parmenters.sourceType.PRODUCE_FED, this.$kgw.config.parmenters.sourceType.PRODUCE_RETURN], // 领、退、补单据
            customs: ['proGoodsSerial', 'proGoodsName', 'proSpecValue', 'proUnitCode', 'sourceSerial'], // 领、退、补列设置中要隐藏的字段
        }
    },
    methods: {
        // dialog关闭之前回调
        dialogHandleClose() {
            this.dialogVisibleCol = false
        },
        //获取列设置数据
        async getColSetData() {
            this.loading = true;
            let _data = await this.$http('post', '/api/services/app/sysClientUserColumnSetting/GetList', { 
                tableId: this.tableDefaultId || this.$route.meta.tableId
            });
            // log(_data)
            if (_data.status === 200) {
                _data.data = _data.data.filter((v, i) => {
                    v.index = i;
                    return v.columnViewName != '删除'
                })
                this.dataColSet = JSON.parse(JSON.stringify(_data.data));
                this.dataColSet_c = JSON.parse(JSON.stringify(_data.data))
                this.loading = false;
                // log($kgw.isExtOn(this.$kgw.config.parmenters.enumExtType.EnableCurrency))
            }
        },
        //设置列设置数据
        async setColSetData(type) {
            /*log(this.dataColSet)
            return*/
            const bool = this.dataColSet.some(v => {
                return v.isShow
            })
            if(!bool) {
                this.$message({
                    message: '至少选择一项',
                    type: 'warning'
                })
                return
            }
            let colSetDataSave = {
                tableId: this.tableDefaultId || this.$route.meta.tableId,
                sysClientUserColumnSettingInputList: []
            }
            let columnSettingData = this.$kgw.commonInfo.columnSetting
            if (type === 0) { //还原默认设置
                let _data = await this.$http('post', '/api/services/app/sysClientUserColumnSetting/Save', colSetDataSave);
                this.colSetSuccess(_data.status, _data.data, '还原成功')
            } else if (type === 1) {  //修改排序

                this.dataColSet.forEach((v, i) => {
                    
                    let colData = { 
                        columnViewName: v.columnViewName, 
                        isShow: v.isShow, 
                        columnType: v.columnType, 
                        columnId: v.columnId, 
                        idSorted: i + 1 
                    }

                    colSetDataSave.sysClientUserColumnSettingInputList.push(colData)
                })
                let _data = await this.$http('post', '/api/services/app/sysClientUserColumnSetting/Save', colSetDataSave);
                this.colSetSuccess(_data.status, _data.data, '保存成功')
            }
        },
        //列设置成功函数
        colSetSuccess(status, data, text) {
            if (status === 200) {
                this.$message({
                    message: text,
                    type: 'success'
                });
                this.dialogVisibleCol = false;
                this.$kgw.commonInfo.columnSetting = data;
                // this.$kgw.getCommonInfo()
                this.$kgw.setCommonInfo(this.$kgw.commonInfo);
                // this.getTableWidth()
                /*setTimeout(() => {
                    this.$router.go(0)
                }, 1000);*/
                this.$emit('colSetChange');
            } else {
                this.$message({
                    message: _data.message,
                    type: 'error'
                });
            }

        }

    },
    watch: {
        value(val) {
            this.dialogVisibleCol = val
            if (val) {
                this.getColSetData()
            }
        },
        dialogVisibleCol(val) {
            this.$emit("input", val)
        }
    },
   /* mounted() {
        this.initialTableTh = this.$kgw.config.parmenters.colTableTitleWidth[this.$route.meta.tableId]
        this.getTableWidth()
    }*/
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
    height: 410px; 
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
    }
    .el-col:nth-child(2) {
        &:hover {
            cursor: move;
        }
    }
}
</style>

