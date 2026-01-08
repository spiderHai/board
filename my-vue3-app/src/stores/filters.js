import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFiltersStore = defineStore('filters', () => {
  // State - chart-specific filters
  const chartFilters = ref({
    // Quality Basic Law charts
    'chart_basiclaw_month': { dept: 'basiclaw_monthall' },
    'chart_basiclaw_BU': { month: '11' },
    'chart_basiclaw_rank': { dept: 'rank_monthall', month: '11', view: 'rank' },

    // Layered Audit charts
    'chart_LayeredProcessAudit_month': { dept: 'LayeredProcessAudit_monthall' },
    'chart_LayeredProcessAudit_BU': { month: '11' },
    'chart_LayeredProcessAudit_reviewer': { dept: 'reviewer_monthall' },
    'chart_closing_rate': { dept: 'region_monthall', view: 'region' },
    'chart_Closing_duration': { dept: 'duration_monthall' },

    // Auditor Management charts
    'chart_auditor_internal': { year: '2025', view: 'internal' },
    'chart_auditor_witness': { year: '2025', view: 'witness' },
    'chart_auditor_type': { view: 'person' },

    // Customer Audit charts
    'chart_externalaudit_month': { dept: 'exteraudit_monthall' },
    'chart_externalaudit_BU': { month: '11' },
    'chart_externalauditClosureRate_month': { dept: 'externalauditClosureRate_monthall' },
    'chart_externalauditClosureRate_BU': { month: '11' },
    'chart_exteraudit_ques': { dept: 'questprocess_monthall', month: '11', view: 'process' },
    'chart_exteraudit_severity': { dept: 'severity_monthall', month: '11' }
  })

  // Actions
  function updateChartFilter(chartId, filterKey, value) {
    if (!chartFilters.value[chartId]) {
      chartFilters.value[chartId] = {}
    }
    chartFilters.value[chartId][filterKey] = value
  }

  function getChartFilter(chartId, filterKey) {
    return chartFilters.value[chartId]?.[filterKey]
  }

  function getChartFilters(chartId) {
    return chartFilters.value[chartId] || {}
  }

  function resetChartFilters(chartId) {
    // Reset to default values based on chart type
    const defaults = {
      'chart_basiclaw_month': { dept: 'basiclaw_monthall' },
      'chart_basiclaw_BU': { month: '11' },
      'chart_basiclaw_rank': { dept: 'rank_monthall', month: '11', view: 'rank' }
      // Add more defaults as needed
    }

    if (defaults[chartId]) {
      chartFilters.value[chartId] = { ...defaults[chartId] }
    }
  }

  function resetAllFilters() {
    // Reset all chart filters to defaults
    Object.keys(chartFilters.value).forEach(chartId => {
      resetChartFilters(chartId)
    })
  }

  function syncFiltersWithGlobal(globalBU, globalMonth) {
    // Sync chart-specific filters with global filters
    // This can be called when global filters change
    Object.keys(chartFilters.value).forEach(chartId => {
      const filters = chartFilters.value[chartId]

      // Update dept filters if they exist
      if (filters.dept && globalBU !== 'all') {
        const deptPrefix = filters.dept.split('_')[0]
        filters.dept = `${deptPrefix}_${globalBU}`
      }

      // Update month filters if they exist
      if (filters.month && globalMonth) {
        const monthNum = globalMonth.split('-')[1]
        filters.month = monthNum
      }
    })
  }

  return {
    // State
    chartFilters,

    // Actions
    updateChartFilter,
    getChartFilter,
    getChartFilters,
    resetChartFilters,
    resetAllFilters,
    syncFiltersWithGlobal
  }
})
