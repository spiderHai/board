<template>
  <div class="kpi-cards">
    <div
      v-for="(metric, key) in kpiMetrics"
      :key="key"
      class="kpi-card"
    >
      <div class="kpi-label">{{ metric.label }}</div>
      <div class="kpi-value">
        {{ metric.value }}
        <span class="kpi-unit">{{ metric.unit }}</span>
      </div>
      <div class="kpi-trend" :class="getTrendClass(metric.trend)">
        <i :class="getTrendIcon(metric.trend)"></i>
        {{ Math.abs(metric.trend) }}%
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDashboardStore } from '@/stores/dashboard'

const dashboardStore = useDashboardStore()

const kpiMetrics = computed(() => dashboardStore.kpiMetrics)

const getTrendClass = (trend) => {
  return trend >= 0 ? 'trend-up' : 'trend-down'
}

const getTrendIcon = (trend) => {
  return trend >= 0 ? 'el-icon-top' : 'el-icon-bottom'
}
</script>

<style scoped>
.kpi-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.kpi-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 20px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.kpi-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.kpi-card:nth-child(1) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.kpi-card:nth-child(2) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.kpi-card:nth-child(3) {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.kpi-card:nth-child(4) {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.kpi-card:nth-child(5) {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.kpi-card:nth-child(6) {
  background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
}

.kpi-label {
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 8px;
}

.kpi-value {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
}

.kpi-unit {
  font-size: 16px;
  font-weight: normal;
  margin-left: 4px;
}

.kpi-trend {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.trend-up {
  color: #a8ff78;
}

.trend-down {
  color: #ff6b6b;
}

.kpi-trend i {
  font-size: 16px;
}
</style>
