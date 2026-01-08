<template>
  <BaseChart :options="chartOptions" height="100%" />
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from './BaseChart.vue'
import { useChartDataStore } from '@/stores/chartData'
import { useChartOptions } from '@/composables/useChartOptions'

const props = defineProps({
  dept: {
    type: String,
    default: 'all'
  }
})

const chartDataStore = useChartDataStore()
const { buildPieOptions } = useChartOptions()

const chartOptions = computed(() => {
  const data = chartDataStore.getBasicLawTypeData(props.dept)
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
})
</script>