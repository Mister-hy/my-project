<template>
  <div class="login-container">
    <el-form ref="FormRef" :rules="rules" class="login-form" :model="ModelForm">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="iconfont icon-user"></span>
        <span class="svg-container">
          <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
        </span>
        <el-input
          v-model.trim="ModelForm.username"
          name="username"
          type="text"
        />
      </el-form-item>

      <span class="svg-container"> </span>
      <el-form-item prop="password">
        <span class="iconfont icon-suo"></span>

        <el-input
          v-model.trim="ModelForm.password"
          prefix-icon="icon-user"
          :type="flag ? 'text' : 'password'"
        ></el-input>

        <span class="show-pwd">
          <el-icon>
            <i
              @click="passwordChange"
              :class="[
                flag ? 'iconfont icon-eye-fill' : 'iconfont icon-no_eye'
              ]"
              style="margin-top: 8px; font-size: 18px"
              class="i"
            />
          </el-icon>
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handlerUserSubmit"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Allarr } from './passWord'
import UserApi from '../../api/user'

const ModelForm = reactive({
  username: 'supri-admin',
  password: '123456'
})
const flag = ref()
const passwordChange = () => {
  flag.value = !flag.value
  console.log(flag.value)
}
const rules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: Allarr
    }
  ]
})
// 登录
const handlerUserSubmit = async () => {
  const res = await UserApi.login(ModelForm)
  console.log(res)
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      .el-input__wrapper {
        background: transparent !important;
        box-shadow: none;
      }
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.iconfont {
  color: #f6f6f6;
  margin-left: 20px;
}
.el-form-item__content {
  box-shadow: none;
}
.login-container .show-pwd[data-v-418f9a7e] {
  margin-top: 5px;
  margin-right: 20px;
}
.el-button--primary {
  margin-top: 20px;
}
</style>
