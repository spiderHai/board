<template>
  <BaseChart :options="chartOptions" height="100%" />
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from './BaseChart.vue'
import { useChartDataStore } from '@/stores/chartData'
import { useChartOptions } from '@/composables/useChartOptions'
import { MONTHS, BU_OPTIONS } from '@/data/constants'

const props = defineProps({
  dept: {
    type: String,
    default: 'all'
  },
  month: {
    type: Number,
    default: 10
  },
  chartType: {
    type: String,
    default: 'monthly', // 'monthly' or 'bu'
    validator: value => ['monthly', 'bu'].includes(value)
  }
})

const chartDataStore = useChartDataStore()
const { buildBarOptions } = useChartOptions()

const chartOptions = computed(() => {
  if (props.chartType === 'monthly') {
    const data = chartDataStore.getBasicLawMonthlyData(props.dept)
    if (!data) return {}

    return buildBarOptions(data, {
      xAxisData: MONTHS,
      seriesData: [data.punish_monthrate, data.reward_monthrate],
      seriesNames: ['惩罚', '奖励'],
      colors: ['#f5222d', '#52c41a'],
      stack: true,
      showLegend: true
    })
  } else {
    // BU comparison - would need to aggregate data from all BUs
    const buLabels = BU_OPTIONS.filter(bu => bu.value !== 'all').map(bu => bu.label)
    const sampleData = buLabels.map(() => Math.floor(Math.random() * 100))

    return buildBarOptions(null, {
      xAxisData: buLabels,
      seriesData: [sampleData],
      seriesNames: ['执行数量'],
      colors: ['#1890ff']
    })
  }
})
</script>