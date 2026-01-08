<template>
  <div class="section">
    <div class="section-title">
      <i class="el-icon-document"></i>
      <span>质量基本法管理</span>
    </div>

    <div class="charts-grid">
      <!-- Chart 1: Monthly Basic Law Data -->
      <ChartCard title="质量基本法月度执行情况">
        <template #filters>
          <DepartmentSelect
            v-model="chart1Dept"
            :options="deptOptions"
          />
        </template>
        <BaseChart :options="chart1Options" height="300px" />
      </ChartCard>

      <!-- Chart 2: Basic Law by BU -->
      <ChartCard title="质量基本法BU对比">
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

      <!-- Chart 3: Rank/Type Distribution -->
      <ChartCard title="奖惩分布">
        <template #filters>
          <ViewToggleButtons
            v-model="chart3View"
            :buttons="[
              { label: '按职级', value: 'rank' },
              { label: '按类型', value: 'type' }
            ]"
          />
          <DepartmentSelect
            v-model="chart3Dept"
            :options="deptOptions"
          />
        </template>
        <BaseChart :options="chart3Options" height="300px" />
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
const { buildBarOptions, buildPieOptions } = useChartOptions()

// Filter states
const chart1Dept = ref('all')
const chart2Month = ref(10) // November (0-indexed)
const chart3View = ref('rank')
const chart3Dept = ref('all')

const months = MONTHS
const deptOptions = [
  { value: 'all', label: '所有BU' },
  ...BU_OPTIONS.filter(bu => bu.value !== 'all')
]

// Chart 1: Monthly data
const chart1Options = computed(() => {
  const data = chartDataStore.getBasicLawMonthlyData(chart1Dept.value)

  if (!data) return {}

  return buildBarOptions(data, {
    xAxisData: MONTHS,
    seriesData: [data.punish_monthrate, data.reward_monthrate],
    seriesNames: ['惩罚', '奖励'],
    colors: ['#f5222d', '#52c41a'],
    stack: true,
    showLegend: true
  })
})

// Chart 2: BU comparison (simplified - would need to aggregate data from all BUs)
const chart2Options = computed(() => {
  // This is a simplified version - in production, you'd aggregate data from all BUs
  const buLabels = BU_OPTIONS.filter(bu => bu.value !== 'all').map(bu => bu.label)
  const sampleData = buLabels.map(() => Math.floor(Math.random() * 100))

  return buildBarOptions(null, {
    xAxisData: buLabels,
    seriesData: [sampleData],
    seriesNames: ['执行数量'],
    colors: ['#1890ff']
  })
})

// Chart 3: Rank or Type distribution
const chart3Options = computed(() => {
  if (chart3View.value === 'rank') {
    const data = chartDataStore.getBasicLawRankData(chart3Dept.value)
    if (!data) return {}

    const rankLabels = ['一级', '二级', '三级', '四级', '五级', '六级', '七级', '八级', '九级']

    return buildBarOptions(data, {
      xAxisData: rankLabels,
      seriesData: [data.rewards, data.punishments],
      seriesNames: ['奖励', '惩罚'],
      colors: ['#52c41a', '#f5222d'],
      showLegend: true
    })
  } else {
    const data = chartDataStore.getBasicLawTypeData(chart3Dept.value)
    if (!data) return {}

    const pieData = data.labels.map((label, index) => ({
      name: label,
      value: data.basicdata[index]
    }))

    return buildPieOptions(null, {
      seriesName: '奖惩类型',
      pieData,
      radius: '60%'
    })
  }
})

// Watch for global filter changes
watch(() => dashboardStore.selectedBU, (newBU) => {
  if (newBU !== 'all') {
    chart1Dept.value = newBU
    chart3Dept.value = newBU
  }
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
