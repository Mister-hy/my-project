<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      unique-opened
      router
    >
      <SidbarPorps v-for="item in data" :key="item" :menuList="item">
      </SidbarPorps>
      <el-sub-menu index="/user">
        <template #title>
          <el-icon> <svg-icon icon="article-create"></svg-icon></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user/manage">
            <template #title>
              <el-icon> <svg-icon icon="article-create"></svg-icon></el-icon>
              <span>用户管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/user/role">
            <template #title>
              <el-icon> <svg-icon icon="role"></svg-icon></el-icon>
              <span>角色管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/user/permission">
            <template #title>
              <el-icon> <svg-icon icon="permission"></svg-icon></el-icon>
              <span>菜单管理</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="/article">
          <template #title>
             <el-icon> <svg-icon icon="article"></svg-icon></el-icon>
            <span>系统工具</span>
          </template>
          <el-menu-item-group >
            <el-menu-item index="/article/ranking">
               <el-icon> <svg-icon icon="article-ranking"></svg-icon></el-icon>
               <span>数字字典</span>
            </el-menu-item>
          </el-menu-item-group>
           </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import SidbarPorps from './SidbarPorps'
const data = [
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '首页',
      icon: 'personnel'
    },
    children: []
  },
  {
    path: '/user',
    redirect: '/user/manage',
    meta: {
      title: '系统管理',
      icon: 'article-create'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        meta: {
          title: '用户管理',
          icon: 'personnel-manage'
        },
        children: []
      },
      {
        path: '/user/role',
        name: 'userRole',
        meta: {
          title: '角色管理',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        meta: {
          title: '菜单管理',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    meta: {
      title: '系统工具',
      icon: 'article'
    },
    props: {
      default: false
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        meta: {
          title: '数字字典',
          icon: 'article-ranking'
        }
      }
    ]
  }
]
</script>

<style lang="scss" scoped></style>
