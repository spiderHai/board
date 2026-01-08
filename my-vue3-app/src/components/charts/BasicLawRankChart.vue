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
const { buildBarOptions } = useChartOptions()

const chartOptions = computed(() => {
  const data = chartDataStore.getBasicLawRankData(props.dept)
  if (!data) return {}

  const rankLabels = ['一级', '二级', '三级', '四级', '五级', '六级', '七级', '八级', '九级']

  return buildBarOptions(data, {
    xAxisData: rankLabels,
    seriesData: [data.rewards, data.punishments],
    seriesNames: ['奖励', '惩罚'],
    colors: ['#52c41a', '#f5222d'],
    showLegend: true
  })
})
</script>