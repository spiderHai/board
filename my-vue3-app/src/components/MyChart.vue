<template>
  <div ref="el" style="width: 600px; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const el = ref(null)
let chart = null

onMounted(() => {
  chart = echarts.init(el.value)
  chart.setOption({
    title: { text: 'ECharts Demo' },
    tooltip: {},
    xAxis: { data: ['A', 'B', 'C', 'D', 'E'] },
    yAxis: {},
    series: [{ type: 'bar', data: [5, 20, 36, 10, 10] }]
  })

  window.addEventListener('resize', resize)
})

function resize() {
  chart?.resize()
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  chart?.dispose()
  chart = null
})
</script>
