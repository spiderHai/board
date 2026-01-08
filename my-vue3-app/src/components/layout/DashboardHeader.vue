<template>
  <div class="dashboard-header">
    <div class="nav-container">
      <h1 class="nav-title">审核质量数据看板</h1>
    </div>
  </div>
</template>

<script setup>
// No props or logic needed for now
</script>

<style scoped>
.dashboard-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: transparent;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
  width: 100%;
}

.nav-container {
  background: #001529;
  padding: 0 20px;
  height: 56px;
  display: flex;
  align-items: center;
}

.nav-title {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}
</style>
