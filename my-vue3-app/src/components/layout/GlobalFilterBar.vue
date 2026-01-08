<template>
  <div class="filter-bar">
    <div class="filter-item">
      <label>BU:</label>
      <el-select v-model="selectedBU" placeholder="选择BU" @change="handleBUChange">
        <el-option
          v-for="bu in buOptions"
          :key="bu.value"
          :label="bu.label"
          :value="bu.value"
        />
      </el-select>
    </div>

    <div class="filter-item">
      <label>月份:</label>
      <el-date-picker
        v-model="selectedMonth"
        type="month"
        placeholder="选择月份"
        format="YYYY-MM"
        value-format="YYYY-MM"
        @change="handleMonthChange"
      />
    </div>

    <div class="filter-actions">
      <el-button type="primary" @click="handleQuery">查询</el-button>
      <el-button @click="handleReset">重置</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDashboardStore } from '@/stores/dashboard'
import { useFiltersStore } from '@/stores/filters'
import { BU_OPTIONS } from '@/data/constants'

const dashboardStore = useDashboardStore()
const filtersStore = useFiltersStore()

const buOptions = BU_OPTIONS
const selectedBU = ref(dashboardStore.selectedBU)
const selectedMonth = ref(dashboardStore.selectedMonth)

const handleBUChange = () => {
  // Update will happen on query button click
}

const handleMonthChange = () => {
  // Update will happen on query button click
}

const handleQuery = () => {
  // Update global filters
  dashboardStore.updateGlobalFilters(selectedBU.value, selectedMonth.value)

  // Sync chart-specific filters with global filters
  filtersStore.syncFiltersWithGlobal(selectedBU.value, selectedMonth.value)

  // Emit event for parent components to refresh data
  console.log('Query triggered:', { bu: selectedBU.value, month: selectedMonth.value })
}

const handleReset = () => {
  selectedBU.value = 'all'
  selectedMonth.value = new Date().toISOString().slice(0, 7)
  dashboardStore.resetFilters()
  filtersStore.resetAllFilters()
}

onMounted(() => {
  // Initialize with current store values
  selectedBU.value = dashboardStore.selectedBU
  selectedMonth.value = dashboardStore.selectedMonth
})
</script>

<style scoped>
.filter-bar {
  display: flex;
  gap: 16px;
  align-items: center;
  background: #fff;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  margin-bottom: 24px;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-item label {
  font-weight: 600;
  color: #333;
  white-space: nowrap;
}

.filter-actions {
  display: flex;
  gap: 12px;
  margin-left: auto;
}
</style>
