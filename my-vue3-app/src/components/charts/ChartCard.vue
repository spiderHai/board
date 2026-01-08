<template>
  <div class="chart-card">
    <div class="chart-header">
      <h3 class="chart-title">
        <span class="title-icon"></span>
        {{ title }}
      </h3>
      <div class="chart-filters">
        <slot name="filters"></slot>
      </div>
    </div>
    <div class="chart-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.chart-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 18px;
  min-height: 340px;
  margin-bottom: 20px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
}

.chart-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
}

.title-icon {
  display: inline-block;
  width: 4px;
  height: 18px;
  background-color: #1890ff;
  margin-right: 8px;
  border-radius: 2px;
}

.chart-filters {
  display: flex;
  gap: 12px;
  align-items: center;
}

.chart-body {
  min-height: 280px;
}
</style>
