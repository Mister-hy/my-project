<template>
  <div class="NavTop clearfix">
    <strong>VueAdmin后台管理系统</strong>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
         test
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.NavTop {
  background-color: #17b3a3;
  color: #333;
  text-align: center;
  line-height: 50px;
  // height:50px;
  .right {
    float: right;
   .el-dropdown{
    margin-top:15px;
   }
  }
}
</style>
