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
  timePeriod: { type: String, default: 'month' }
})

const chartDataStore = useChartDataStore()
const { buildComboOptions } = useChartOptions()

const chartOptions = computed(() => {
  const data = chartDataStore.getSystemAuditPlanAchievementData({
    system: props.system,
    bu: props.bu,
    timePeriod: props.timePeriod
  })

  if (!data) return {}

  return buildComboOptions(null, {
    xAxisData: data.labels,
    barSeriesData: [data.planned_count, data.completed_count],
    lineSeriesData: [data.achievement_rate],
    barSeriesNames: ['计划数', '完成数'],
    lineSeriesNames: ['达成率(%)'],
    colors: ['#1890ff', '#52c41a', '#faad14']
  })
})
</script>
