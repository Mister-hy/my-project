<template>
  <div class="login">
    <div class="login-content">
      <div class="left">
        <h2>欢迎来到VueAdmin管理系统</h2>
      </div>
      <div class="right">
        <div class="login-form">
          <el-form
            :model="loginForm"
            :rules="loginRules"
            label-width="150px"
            class="demo-ruleForm"
            :ref="LoginForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password" type="password" />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input v-model="loginForm.code" class="codeIpt" />
              <span @click="getImgCode" class="span"
                ><img :src="data.imgCode" alt="正在加载" class="img"
              /></span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onLogin" @keyup.enter="onLogin"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api/api.js'
import { useStore } from 'vuex'
/**
 * @描述 表单数据对象
 */
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: ''
})
const LoginForm = reactive()
const data = reactive({
  imgCode: ''
})
// 获取vuex
const store = useStore()
//跳转路由
const router = useRouter()
// 用户名验证规则
const validateUsername = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  }
}
// 密码验证规则
const validatePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value.length < 6) {
    callback(new Error('密码不能少于6位'))
  }
}
// 验证码验证规则
const validateCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else if (value.length !== 5) {
    callback(new Error('验证码为5个字符'))
  }
}
/**
 * @描述 表单验证规则
 */
const loginRules = {
  username: [
    {
      required: true,
      trigger: 'blur',
      validator: validateUsername
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      validator: validateCode
    }
  ]
}
/**
 * @描述 登录事件
 */
const onLogin = async () => {
  // const res = await store.dispatch('getCode', loginForm)
  // if (!loginForm.value) return
  // await LoginForm.value.validate(async (valid) => {
  //   const res = await api.login(loginForm)
  //   console.log(res)
  // })
  // const res = await api.login(loginForm)
  // console.log(res)
  router.push('/User')
}
/**
 * @描述 获取验证码事件
 */
const getImgCode = async () => {
  const res = await api.getCode()
  data.imgCode = res.data.data.captchaImg
}
getImgCode()
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
  .el-input {
    height: 35px;
  }
  .span {
    width: 36%;
    margin-left: 10px;
    display: inline-block;
    .img {
      width: 100%;
      height: 35px;
    }
  }
}
// .login {
//   height: 100%;
//   background-color: #fafafa;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .demo-ruleForm {
//     .title {
//       text-align: center;
//       padding: 20px;
//       transform: translateY(-20px);
//     }
//     padding: 50px;
//     width: 500px;
//     border: 1px solid #000;
//     .codeImg {
//       width: 120px;
//       height: 40px;
//       border: 1px solid #000;
//     }
//   }
// }
</style>
