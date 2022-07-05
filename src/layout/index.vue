<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <NavBar></NavBar>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar/SidbarMenu.vue'
import NavBar from './NavBar.vue'
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .sidebar-container {
    width: 210px;
    height: 100%;
    background-color: #545c64;
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */
  }
}
</style>
