<template>
  <div ref="chartRef" :style="{ width, height }"></div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useECharts } from '@/composables/useECharts'
import { useChartResize } from '@/composables/useChartResize'

const props = defineProps({
  options: {
    type: Object,
    required: true
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '300px'
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const chartRef = ref(null)
const chartOptions = computed(() => props.options)

// Initialize chart with composable
const { chart, updateChart, showLoading, hideLoading } = useECharts(chartRef, chartOptions)

// Handle resize
useChartResize(chart)

// Watch for loading state changes
watch(() => props.loading, (isLoading) => {
  if (isLoading) {
    showLoading()
  } else {
    hideLoading()
  }
})

// Watch for options changes
watch(() => props.options, (newOptions) => {
  if (newOptions && chart.value) {
    updateChart(newOptions)
  }
}, { deep: true })
</script>

<style scoped>
div {
  min-height: 200px;
}
</style>
