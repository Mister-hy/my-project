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
            :rules="Loginrules"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="Myusername">
              <el-input
                v-model="LoginruleForm.username"
                type="test"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="密码" prop="Mypassword">
              <el-input
                v-model="LoginruleForm.password"
                type="password"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="验证码" prop="Mycode">
              <el-input v-model.number="LoginruleForm.code" type="test" />
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
const LoginruleForm = reactive({
  username: '',
  password: '',
  code: ''
})
const Loginrules = reactive({
  Myusername: [{ validator: '请输入用户名', trigger: 'blur' }],
  Mypassword: [{ validator: '请输入密码', trigger: 'blur' }],
  Mycode: [{ validator: '请输入验证码', trigger: 'blur' }]
})
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
    border: 1px solid red;
  }
  .right {
    flex: 1;
    border: 1px solid red;
    position: relative;
    .login-form {
      position: absolute;
      width: 300px;
      height: 300px;
      left: 40%;
      top: 60%;
      margin-left: -150px;
      margin-top: -150px;
    }
  }
}
</style>
