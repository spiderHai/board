<template>
  <BaseChart :options="chartOptions" height="100%" />
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from './BaseChart.vue'
import { useChartDataStore } from '@/stores/chartData'
import { useChartOptions } from '@/composables/useChartOptions'

const props = defineProps({
  system: {
    type: String,
    default: ''
  },
  bu: {
    type: String,
    default: ''
  },
  dept: {
    type: String,
    default: ''
  },
  year: {
    type: Number,
    default: null
  }
})

const chartDataStore = useChartDataStore()
const { buildComboOptions } = useChartOptions()

// 根据筛选条件确定数据类型
const dataType = computed(() => {
  if (props.system && props.bu) return 'system_bu'
  if (props.system) return 'system'
  if (props.bu) return 'bu'
  if (props.dept) return 'dept'
  if (props.year) return 'year'
  return 'system' // 默认维度
})

const chartOptions = computed(() => {
  const data = chartDataStore.getPromotionData(dataType.value, {
    system: props.system,
    bu: props.bu,
    dept: props.dept,
    year: props.year
  })

  if (!data) return {}

  return buildComboOptions(null, {
    xAxisData: data.labels,
    barSeriesData: [data.application_count],
    lineSeriesData: [data.pass_rate],
    barSeriesNames: ['申请人数'],
    lineSeriesNames: ['通过率(%)'],
    colors: ['#1890ff', '#52c41a']
  })
})
</script>