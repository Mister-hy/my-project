<template>
  <div v-if="item && item.children <= 0">
    <el-menu-item :index="item.path">
      <el-icon>
        <svg-icon :icon="item.meta.icon"></svg-icon>
      </el-icon>
      <span> {{ item.meta.title }}</span></el-menu-item
    >
  </div>
  <!--<div v-for="el in item.children" :key="item">
    <el-sub-menu>
      <el-icon>
        <svg-icon :icon="item.meta.icon"></svg-icon>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-sub-menu>
  </div> -->
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  menuList: {
    type: Object,
    default: () => {}
  }
})
const item = props.menuList
</script>
<style lang="scss" scoped></style>
