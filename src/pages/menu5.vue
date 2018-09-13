<template>
 <el-row :gutter="20">
  <el-col :span="6" class="cardSp">
    <el-card :body-style="{ padding: '10px',height:'300px',position:'relative' }">
      <div>Font Awesome为您提供可缩放的矢量图标，您可以使用CSS所提供的所有特性对它们进行更改，包括：大小、颜色、阴影或者其它任何支持的效果。Font Awesome为您提供可缩放的矢量图标，您可以使用CSS所提供的所有特性对它们进行更改，包括：大小、颜色、阴影或者其它任何支持的效果。</div>
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <router-link to="/golesson"><el-button type="text" class="button">去备课</el-button></router-link>
        </div>
      </div>
    </el-card>
  </el-col> 
   
</el-row>
</template>

<style scoped>
.cardSp{
    margin-bottom:30px;
}
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix{
      position:absolute;bottom:10px;
  }
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
