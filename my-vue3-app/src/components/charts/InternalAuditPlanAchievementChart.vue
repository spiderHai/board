<template>
  <div ref="chartRef" style="width: 100%; height: 280px"></div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import { useChartDataStore } from '@/stores/chartData'

const props = defineProps({
  system: { type: String, default: '' },
  bu: { type: String, default: '' },
  timePeriod: { type: String, default: 'month' }
})

const chartRef = ref(null)
let chartInstance = null
const chartDataStore = useChartDataStore()

const initChart = () => {
  if (!chartRef.value) return

  if (chartInstance) {
    chartInstance.dispose()
  }

  chartInstance = echarts.init(chartRef.value)
  updateChart()
}

const updateChart = () => {
  if (!chartInstance) return

  const filters = {
    system: props.system,
    bu: props.bu,
    timePeriod: props.timePeriod
  }

  const data = chartDataStore.getInternalAuditPlanAchievementData(filters)

  if (!data) {
    console.warn('No data available for Internal Audit Plan Achievement Chart')
    return
  }

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross', crossStyle: { color: '#999' } }
    },
    legend: {
      data: ['计划数', '完成数', '达成率'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.labels,
      axisPointer: { type: 'shadow' }
    },
    yAxis: [
      {
        type: 'value',
        name: '数量',
        axisLabel: { formatter: '{value}' }
      },
      {
        type: 'value',
        name: '达成率',
        axisLabel: { formatter: '{value}%' }
      }
    ],
    series: [
      {
        name: '计划数',
        type: 'bar',
        data: data.planned_count,
        itemStyle: { color: '#5470c6' }
      },
      {
        name: '完成数',
        type: 'bar',
        data: data.completed_count,
        itemStyle: { color: '#91cc75' }
      },
      {
        name: '达成率',
        type: 'line',
        yAxisIndex: 1,
        data: data.achievement_rate,
        itemStyle: { color: '#fac858' },
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%'
        }
      }
    ]
  }

  chartInstance.setOption(option)
}

onMounted(() => {
  nextTick(() => {
    initChart()
  })

  window.addEventListener('resize', () => {
    chartInstance?.resize()
  })
})

watch([() => props.system, () => props.bu, () => props.timePeriod], () => {
  updateChart()
})
</script>
