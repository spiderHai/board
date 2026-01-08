import { onMounted, onBeforeUnmount } from 'vue'

/**
 * Composable for handling chart resize on window resize
 * @param {Ref} chart - ECharts instance reference
 * @param {Number} debounceDelay - Debounce delay in milliseconds
 * @returns {Object} - Resize handler
 */
export function useChartResize(chart, debounceDelay = 300) {
  let resizeTimer = null

  // Debounced resize handler
  const handleResize = () => {
    if (resizeTimer) {
      clearTimeout(resizeTimer)
    }

    resizeTimer = setTimeout(() => {
      if (chart.value) {
        chart.value.resize()
      }
    }, debounceDelay)
  }

  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    if (resizeTimer) {
      clearTimeout(resizeTimer)
    }
  })

  return {
    handleResize
  }
}
