<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <NavBar></NavBar>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar/SidbarMenu.vue'
import NavBar from './NavBar.vue'
import AppMain from './AppMain.vue'
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
  .main-container {
    width: calc(100% - 210px);
    height: 100%;
    margin-left: 210px;
    position: relative;
    .fixed-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      width: calc(100% - 210px);
    }
  }
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
