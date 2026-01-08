<template>
  <div class="section">
    <div class="section-title">
      <i class="el-icon-user"></i>
      <span>审核员管理</span>
    </div>

    <div class="charts-grid">
      <!-- Chart Pair 1: Internal/Certify Auditor -->
      <ChartCard :title="chart1View === 'internal' ? '内审员年度统计' : '认证审核员年度统计'">
        <template #filters>
          <ViewToggleButtons
            v-model="chart1View"
            :buttons="[
              { label: '内审员', value: 'internal' },
              { label: '认证审核员', value: 'certify' }
            ]"
          />
        </template>
        <BaseChart :options="chart1Options" height="300px" />
      </ChartCard>

      <!-- Chart Pair 2: Witness/Promote Auditor -->
      <ChartCard :title="chart2View === 'witness' ? '见证审核员年度统计' : '晋升审核员年度统计'">
        <template #filters>
          <ViewToggleButtons
            v-model="chart2View"
            :buttons="[
              { label: '见证审核员', value: 'witness' },
              { label: '晋升审核员', value: 'promote' }
            ]"
          />
        </template>
        <BaseChart :options="chart2Options" height="300px" />
      </ChartCard>

      <!-- Chart Pair 3: Person/System Type -->
      <ChartCard :title="chart3View === 'person' ? '审核员类型分布(人员)' : '审核员类型分布(体系)'">
        <template #filters>
          <ViewToggleButtons
            v-model="chart3View"
            :buttons="[
              { label: '人员类型', value: 'person' },
              { label: '体系类型', value: 'system' }
            ]"
          />
          <DepartmentSelect v-model="chart3Dept" :options="deptOptions" />
        </template>
        <BaseChart :options="chart3Options" height="300px" />
      </ChartCard>

      <!-- New Chart: Promotion Ratio Analysis -->
      <ChartCard title="审核员晋级通过率分析">
        <template #filters>
          <MultiDimensionFilter
            v-model="promotionFilters"
            :dimensions="[
              { key: 'system', label: '体系', options: systemOptions },
              { key: 'bu', label: '事业部', options: systemOptions },
              { key: 'dept', label: '部门', options: deptOptions },
              { key: 'year', label: '年度', options: yearOptions }
            ]"
          />
        </template>
        <PromotionRatioChart
          :system="promotionFilters.system"
          :bu="promotionFilters.bu"
          :dept="promotionFilters.dept"
          :year="promotionFilters.year"
          height="300px"
        />
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
import PromotionRatioChart from '@/components/charts/PromotionRatioChart.vue'
import MultiDimensionFilter from '@/components/filters/MultiDimensionFilter.vue'
import { useChartDataStore } from '@/stores/chartData'
import { useDashboardStore } from '@/stores/dashboard'
import { useChartOptions } from '@/composables/useChartOptions'
import { YEARS, BU_OPTIONS } from '@/data/constants'

const chartDataStore = useChartDataStore()
const dashboardStore = useDashboardStore()
const { buildBarOptions, buildComboOptions } = useChartOptions()

// Filter states
const chart1View = ref('internal')
const chart2View = ref('witness')
const chart3View = ref('person')
const chart3Dept = ref('all')

// 新增的筛选状态
const promotionFilters = ref({
  system: '',
  bu: '',
  dept: '',
  year: null
})

// 定义体系、事业部、部门选项（简化示例）
const systemOptions = [
  { value: '', label: '所有体系' },
  { value: 'VDA6.3', label: 'VDA6.3' },
  { value: 'IATF16949', label: 'IATF16949' },
  { value: 'ISO9001', label: 'ISO9001' }
]

const buOptions = [
  { value: '', label: '所有事业部' },
  { value: 'BU1', label: 'BU1' },
  { value: 'BU2', label: 'BU2' },
  { value: 'BU3', label: 'BU3' }
]

const deptOptions = [
  { value: '', label: '所有部门' },
  { value: '质量部', label: '质量部' },
  { value: '生产部', label: '生产部' },
  { value: '研发部', label: '研发部' }
]

const yearOptions = YEARS.map(year => ({ value: year, label: `${year}年` }))

// Chart 1: Internal/Certify auditor (combo chart)
const chart1Options = computed(() => {
  const dataKey = chart1View.value === 'internal' ? 'internalauditor' : 'Certifyauditor'
  const data = chartDataStore.getAuditorData(dataKey, 'all')

  if (!data) return {}

  return buildComboOptions(data, {
    xAxisData: YEARS,
    barSeriesData: [data.count || []],
    lineSeriesData: [data.growth_rate || []],
    barSeriesNames: ['审核员数量'],
    lineSeriesNames: ['增长率(%)'],
    colors: ['#1890ff', '#52c41a']
  })
})

// Chart 2: Witness/Promote auditor (combo chart)
const chart2Options = computed(() => {
  const dataKey = chart2View.value === 'witness' ? 'witnessauditor' : 'promoteauditor'
  const data = chartDataStore.getAuditorData(dataKey, 'all')

  if (!data) return {}

  return buildComboOptions(data, {
    xAxisData: YEARS,
    barSeriesData: [data.count || []],
    lineSeriesData: [data.growth_rate || []],
    barSeriesNames: ['审核员数量'],
    lineSeriesNames: ['增长率(%)'],
    colors: ['#722ed1', '#fa8c16']
  })
})

// Chart 3: Person/System type (bar chart)
const chart3Options = computed(() => {
  const dataKey = chart3View.value === 'person' ? 'personType' : 'systemType'
  const data = chartDataStore.getAuditorTypeData(dataKey, chart3Dept.value)

  if (!data) return {}

  return buildBarOptions(data, {
    xAxisData: data.labels || [],
    seriesData: [data.count || []],
    seriesNames: ['审核员数量'],
    colors: ['#13c2c2']
  })
})

// Watch for global filter changes
watch(() => dashboardStore.selectedBU, (newBU) => {
  chart3Dept.value = newBU
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
