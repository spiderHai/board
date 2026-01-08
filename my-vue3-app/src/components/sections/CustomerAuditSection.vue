<template>
  <div class="section">
    <div class="section-title">
      <i class="el-icon-s-custom"></i>
      <span>客户审核管理</span>
    </div>

    <div class="charts-grid">
      <!-- Chart 1: Monthly External Audit -->
      <ChartCard title="客户审核月度统计">
        <template #filters>
          <DepartmentSelect v-model="chart1Dept" :options="deptOptions" />
        </template>
        <BaseChart :options="chart1Options" height="300px" />
      </ChartCard>

      <!-- Chart 2: External Audit by BU -->
      <ChartCard title="客户审核BU对比">
        <template #filters>
          <el-select v-model="chart2Month" size="small" style="width: 120px">
            <el-option
              v-for="(month, index) in months"
              :key="index"
              :label="month"
              :value="index"
            />
          </el-select>
        </template>
        <BaseChart :options="chart2Options" height="300px" />
      </ChartCard>

      <!-- Chart 3: Monthly Closure Rate -->
      <ChartCard title="客户审核关闭率月度趋势">
        <template #filters>
          <DepartmentSelect v-model="chart3Dept" :options="deptOptions" />
        </template>
        <BaseChart :options="chart3Options" height="300px" />
      </ChartCard>

      <!-- Chart 4: Closure Rate by BU -->
      <ChartCard title="客户审核关闭率BU对比">
        <template #filters>
          <el-select v-model="chart4Month" size="small" style="width: 120px">
            <el-option
              v-for="(month, index) in months"
              :key="index"
              :label="month"
              :value="index"
            />
          </el-select>
        </template>
        <BaseChart :options="chart4Options" height="300px" />
      </ChartCard>

      <!-- Chart 5: Issue by Process/Type -->
      <ChartCard :title="chart5View === 'process' ? '问题工序分布' : '问题类型分布'">
        <template #filters>
          <ViewToggleButtons
            v-model="chart5View"
            :buttons="[
              { label: '按工序', value: 'process' },
              { label: '按类型', value: 'type' }
            ]"
          />
          <DepartmentSelect v-model="chart5Dept" :options="deptOptions" />
        </template>
        <BaseChart :options="chart5Options" height="300px" />
      </ChartCard>

      <!-- Chart 6: Issue Severity -->
      <ChartCard title="问题严重程度分布">
        <template #filters>
          <DepartmentSelect v-model="chart6Dept" :options="deptOptions" />
          <el-select v-model="chart6Month" size="small" style="width: 120px">
            <el-option
              v-for="(month, index) in months"
              :key="index"
              :label="month"
              :value="index"
            />
          </el-select>
        </template>
        <BaseChart :options="chart6Options" height="300px" />
      </ChartCard>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import ChartCard from '@/components/charts/ChartCard.vue'
import BaseChart from '@/components/charts/BaseChart.vue'
import DepartmentSelect from '@/components/filters/DepartmentSelect.vue'
import ViewToggleButtons from '@/components/filters/ViewToggleButtons.vue'
import { useChartDataStore } from '@/stores/chartData'
import { useDashboardStore } from '@/stores/dashboard'
import { useChartOptions } from '@/composables/useChartOptions'
import { MONTHS, BU_OPTIONS } from '@/data/constants'

const chartDataStore = useChartDataStore()
const dashboardStore = useDashboardStore()
const { buildBarOptions, buildComboOptions, buildPieOptions } = useChartOptions()

// Filter states
const chart1Dept = ref('all')
const chart2Month = ref(10)
const chart3Dept = ref('all')
const chart4Month = ref(10)
const chart5View = ref('process')
const chart5Dept = ref('all')
const chart6Dept = ref('all')
const chart6Month = ref(10)

const months = MONTHS
const deptOptions = [
  { value: 'all', label: '所有BU' },
  ...BU_OPTIONS.filter(bu => bu.value !== 'all')
]

// Chart 1: Monthly external audit (combo chart)
const chart1Options = computed(() => {
  const data = chartDataStore.getExternalAuditMonthlyData(chart1Dept.value)
  if (!data) return {}

  return buildComboOptions(data, {
    xAxisData: MONTHS,
    barSeriesData: [data.audit_count || []],
    lineSeriesData: [data.issue_count || []],
    barSeriesNames: ['审核次数'],
    lineSeriesNames: ['问题数量'],
    colors: ['#1890ff', '#f5222d']
  })
})

// Chart 2: External audit by BU (bar chart)
const chart2Options = computed(() => {
  const buLabels = BU_OPTIONS.filter(bu => bu.value !== 'all').map(bu => bu.label)
  const sampleData = buLabels.map(() => Math.floor(Math.random() * 50))

  return buildBarOptions(null, {
    xAxisData: buLabels,
    seriesData: [sampleData],
    seriesNames: ['审核次数'],
    colors: ['#1890ff']
  })
})

// Chart 3: Monthly closure rate (combo chart)
const chart3Options = computed(() => {
  const data = chartDataStore.getExternalAuditClosureData(chart3Dept.value)
  if (!data) return {}

  return buildComboOptions(data, {
    xAxisData: MONTHS,
    barSeriesData: [data.closed_count || []],
    lineSeriesData: [data.closure_rate || []],
    barSeriesNames: ['关闭数量'],
    lineSeriesNames: ['关闭率(%)'],
    colors: ['#52c41a', '#1890ff']
  })
})

// Chart 4: Closure rate by BU (bar chart)
const chart4Options = computed(() => {
  const buLabels = BU_OPTIONS.filter(bu => bu.value !== 'all').map(bu => bu.label)
  const sampleData = buLabels.map(() => Math.floor(Math.random() * 100))

  return buildBarOptions(null, {
    xAxisData: buLabels,
    seriesData: [sampleData],
    seriesNames: ['关闭率(%)'],
    colors: ['#52c41a'],
    yAxisFormatter: '{value}%'
  })
})

// Chart 5: Issue by process/type (pie chart)
const chart5Options = computed(() => {
  const data = chartDataStore.getExternalAuditIssueData(chart5Dept.value, chart5View.value)
  if (!data) return {}

  const pieData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index]
  }))

  return buildPieOptions(null, {
    seriesName: chart5View.value === 'process' ? '工序分布' : '类型分布',
    pieData,
    radius: '60%'
  })
})

// Chart 6: Issue severity (bar chart)
const chart6Options = computed(() => {
  const data = chartDataStore.getExternalAuditSeverityData(chart6Dept.value)
  if (!data) return {}

  return buildBarOptions(data, {
    xAxisData: data.severity_labels || ['严重', '主要', '次要', '轻微'],
    seriesData: [data.severity_count || []],
    seriesNames: ['问题数量'],
    colors: ['#f5222d']
  })
})

// Watch for global filter changes
watch(() => dashboardStore.selectedBU, (newBU) => {
  chart1Dept.value = newBU
  chart3Dept.value = newBU
  chart5Dept.value = newBU
  chart6Dept.value = newBU
})
</script>

<style scoped>
.section {
  margin-bottom: 32px;
}

.section-title {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-left: 4px;
}

.section-title i {
  color: #1890ff;
  margin-right: 8px;
  font-size: 24px;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
}

@media (max-width: 1200px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
