 <template>
<div>

<el-steps :space="180" :active="active" finish-status="success" style="text-align:center;margin-bottom:30px;border-bottom:1px solid #e9e9e9;">
  <el-step title="教案上传"></el-step>
  <el-step title="备课题目"></el-step>
  <el-step title="备课完成"></el-step>
</el-steps>


<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="课程主题" prop="name">
    <el-input v-model="ruleForm.name" style="width:80%;"  placeholder="请输入课程主题"></el-input>
  </el-form-item>
  <el-form-item label="学科" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="物理"></el-radio>
      <el-radio label="化学"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="备课类别" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择类别">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  
  <el-form-item label="教案内容" prop="name">
    <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  >
  <el-button size="small" type="primary">点击上传</el-button>
</el-upload>
  </el-form-item>
  <el-form-item label="教案难度" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="基础"></el-radio>
      <el-radio label="中等"></el-radio>
      <el-radio label="提高"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
  export default {
    data() {
      return {
          active: 0,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script> 

<style scoped>
  .demo-ruleForm{
      width:60%;
  }
  .el-form-item__content{
      text-align: left;
  }
   .el-step__main{
       margin-left:-10px;
   }
</style>
 
