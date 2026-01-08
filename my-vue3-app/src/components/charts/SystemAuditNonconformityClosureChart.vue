<template>
  <BaseChart :options="chartOptions" height="100%" />
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from './BaseChart.vue'
import { useChartDataStore } from '@/stores/chartData'
import { useChartOptions } from '@/composables/useChartOptions'

const props = defineProps({
  system: { type: String, default: '' },
  bu: { type: String, default: '' },
  dept: { type: String, default: '' },
  timePeriod: { type: String, default: 'month' }
})

const chartDataStore = useChartDataStore()
const { buildComboOptions } = useChartOptions()

const chartOptions = computed(() => {
  const data = chartDataStore.getSystemAuditNonconformityClosureData({
    system: props.system,
    bu: props.bu,
    dept: props.dept,
    timePeriod: props.timePeriod
  })

  if (!data) return {}

  return buildComboOptions(null, {
    xAxisData: data.labels,
    barSeriesData: [data.total_count, data.closed_count],
    lineSeriesData: [data.closure_rate],
    barSeriesNames: ['不符合项总数', '已关闭数'],
    lineSeriesNames: ['关闭率(%)'],
    colors: ['#ff4d4f', '#52c41a', '#faad14']
  })
})
</script>
