<template>
  <BaseChart :options="chartOptions" height="100%" />
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from './BaseChart.vue'
import { useChartDataStore } from '@/stores/chartData'
import { useChartOptions } from '@/composables/useChartOptions'

const props = defineProps({
  year: { type: String, default: '' },
  bu: { type: String, default: '' },
  dept: { type: String, default: '' }
})

const chartDataStore = useChartDataStore()
const { buildBarOptions } = useChartOptions()

const chartOptions = computed(() => {
  const data = chartDataStore.getManagementReviewImprovementComparisonData({
    year: props.year,
    bu: props.bu,
    dept: props.dept
  })

  if (!data) return {}

  return buildBarOptions(null, {
    xAxisData: data.labels || [],
    seriesData: [data.count || []],
    seriesNames: ['改进项数量'],
    colors: ['#1890ff']
  })
})
</script>
