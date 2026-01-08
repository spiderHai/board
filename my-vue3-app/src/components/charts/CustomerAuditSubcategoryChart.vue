<template>
  <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import { useChartDataStore } from '@/stores/chartData'

const props = defineProps({
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
    bu: props.bu,
    timePeriod: props.timePeriod
  }

  const data = chartDataStore.getCustomerAuditSubcategoryData(filters)

  if (!data || !data.subcategories) {
    console.warn('No data available for Customer Audit Subcategory Chart')
    return
  }

  // Prepare series data for stacked bar chart
  const subcategoryNames = Object.keys(data.subcategories)
  const colors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc', '#d4a373']

  const series = subcategoryNames.map((name, index) => ({
    name: name,
    type: 'bar',
    stack: 'total',
    data: data.subcategories[name],
    itemStyle: { color: colors[index % colors.length] },
    emphasis: { focus: 'series' }
  }))

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: {
      data: subcategoryNames,
      bottom: 0,
      type: 'scroll'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.labels
    },
    yAxis: {
      type: 'value',
      name: '问题数量'
    },
    series: series
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

watch([() => props.bu, () => props.timePeriod], () => {
  updateChart()
})
</script>
