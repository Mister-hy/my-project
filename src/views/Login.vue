<template>
  <div class="login">
    <div class="login-content">
      <div class="left">
        <h2>欢迎来到VueAdmin管理系统</h2>
      </div>
      <div class="right">
        <div class="login-form">
          <el-form
            ref="LoginruleFormRef"
            :model="LoginruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input
                v-model="LoginruleForm.username"
                type="test"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="LoginruleForm.password"
                type="password"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input
                v-model.number="LoginruleForm.code"
                class="codeIpt"
                type="test"
              />
              <img src="" alt="" class="img" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary">提交</el-button>
              <el-button>获取密码</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import api from '../api/api.js'
const LoginruleForm = reactive({
  username: '',
  password: '',
  code: ''
})
const rules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入密码'
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入验证码'
    }
  ]
})
const tj = async () => {
  const res = await api.captcha()
  console.log(res)
}
tj()
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  .login-content {
    width: 900px;
    height: 360px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -450px;
    margin-top: -180px;
    display: flex;
  }
  h2 {
    margin-top: 20px;
    // margin-left:20px;
    text-align: center;
  }
  .left {
    flex: 1;
    // border: 1px solid red;
  }
  .right {
    flex: 1;
    // border: 1px solid red;
    position: relative;
    .login-form {
      position: absolute;
      width: 400px;
      height: 400px;
      left: 40%;
      top: 60%;
      margin-left: -200px;
      margin-top: -200px;
    }
  }
  .codeIpt {
    width: 60%;
  }
  .img {
    width: 36%;
    height: 30px;
    margin-left: 10px;
    border: 1px solid red;
  }
}
</style>
