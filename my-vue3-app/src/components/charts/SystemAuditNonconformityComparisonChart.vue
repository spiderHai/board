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
  year: { type: String, default: '' },
  clause: { type: String, default: '' }
})

const chartDataStore = useChartDataStore()
const { buildBarOptions } = useChartOptions()

const chartOptions = computed(() => {
  const data = chartDataStore.getSystemAuditNonconformityComparisonData({
    system: props.system,
    bu: props.bu,
    dept: props.dept,
    year: props.year,
    clause: props.clause
  })

  if (!data) return {}

  return buildBarOptions(null, {
    xAxisData: data.labels || [],
    seriesData: [data.count || []],
    seriesNames: ['不符合项数量'],
    colors: ['#ff4d4f']
  })
})
</script>
