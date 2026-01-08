import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts'

/**
 * Composable for managing ECharts instance lifecycle
 * @param {Ref} chartRef - Reference to the chart DOM element
 * @param {Object} options - Chart options (reactive)
 * @returns {Object} - Chart instance and utility methods
 */
export function useECharts(chartRef, options = {}) {
  const chart = ref(null)
  const isLoading = ref(false)

  // Initialize chart
  const initChart = () => {
    if (!chartRef.value) {
      console.warn('Chart ref is not available')
      return
    }

    try {
      // Dispose existing chart if any
      if (chart.value) {
        chart.value.dispose()
      }

      // Create new chart instance
      chart.value = echarts.init(chartRef.value)

      // Set initial options if provided
      if (options.value) {
        updateChart(options.value)
      }
    } catch (error) {
      console.error('Failed to initialize chart:', error)
    }
  }

  // Update chart with new options
  const updateChart = (newOptions) => {
    if (!chart.value) {
      console.warn('Chart instance not initialized')
      return
    }

    try {
      chart.value.setOption(newOptions, true)
    } catch (error) {
      console.error('Failed to update chart:', error)
    }
  }

  // Resize chart
  const resizeChart = () => {
    if (chart.value) {
      chart.value.resize()
    }
  }

  // Show loading
  const showLoading = () => {
    if (chart.value) {
      chart.value.showLoading()
      isLoading.value = true
    }
  }

  // Hide loading
  const hideLoading = () => {
    if (chart.value) {
      chart.value.hideLoading()
      isLoading.value = false
    }
  }

  // Dispose chart
  const disposeChart = () => {
    if (chart.value) {
      chart.value.dispose()
      chart.value = null
    }
  }

  // Clear chart
  const clearChart = () => {
    if (chart.value) {
      chart.value.clear()
    }
  }

  // Watch for options changes
  if (options.value) {
    watch(
      () => options.value,
      (newOptions) => {
        if (newOptions && chart.value) {
          updateChart(newOptions)
        }
      },
      { deep: true }
    )
  }

  // Lifecycle hooks
  onMounted(() => {
    initChart()
  })

  onBeforeUnmount(() => {
    disposeChart()
  })

  return {
    chart,
    isLoading,
    initChart,
    updateChart,
    resizeChart,
    showLoading,
    hideLoading,
    disposeChart,
    clearChart
  }
}
