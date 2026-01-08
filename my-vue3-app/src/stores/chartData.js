import { defineStore } from 'pinia'
import { ref } from 'vue'
import { allData } from '@/data'

export const useChartDataStore = defineStore('chartData', () => {
  // State - all chart data loaded from data files
  const data = ref(allData)

  // Actions
  function getChartData(dataKey, filters = {}) {
    // Get the data object for the specified key
    const dataObj = data.value[dataKey]

    if (!dataObj) {
      console.warn(`No data found for key: ${dataKey}`)
      return null
    }

    // If filters are provided, filter the data
    if (filters.bu && filters.bu !== 'all') {
      // Construct the filtered key based on BU
      const filteredKey = `${dataKey.split('_')[0]}_${filters.bu}`
      return dataObj[filteredKey] || dataObj[`${dataKey}_monthall`] || dataObj
    }

    // Return all data or the 'all' variant
    return dataObj[`${dataKey}_monthall`] || dataObj
  }

  function getBasicLawMonthlyData(bu = 'all') {
    const key = bu === 'all' ? 'basiclaw_monthall' : `basiclaw_month_${bu}`
    return data.value.basiclaw_month_Data?.[key] || null
  }

  function getBasicLawRankData(bu = 'all') {
    const key = bu === 'all' ? 'rank_monthall' : `rank_${bu}`
    return data.value.basiclaw_rank_Data?.[key] || null
  }

  function getBasicLawTypeData(bu = 'all') {
    const key = bu === 'all' ? 'basiclawtype_monthall' : `basiclawtype_${bu}`
    return data.value.basiclaw_type_Data?.[key] || null
  }

  function getLayeredAuditCompletionData(bu = 'all') {
    const key = bu === 'all' ? 'LayeredProcessAudit_monthall' : `LayeredProcessAudit_${bu}`
    const rawData = data.value.LayeredProcessAudit_month_Data?.[key]

    if (!rawData) return null

    // Calculate completion rate from checkdone and checkall
    const completion_rate = rawData.checkall.map((total, index) => {
      return total > 0 ? Math.round((rawData.checkdone[index] / total) * 100) : 0
    })

    return {
      ...rawData,
      completion_rate
    }
  }

  function getLayeredAuditReviewerData(bu = 'all') {
    const key = bu === 'all' ? 'reviewer_monthall' : `reviewer_${bu}`
    const rawData = data.value.LayeredProcessAudit_reviewer_Data?.[key]

    if (!rawData) return null

    // Transform data structure to match component expectations
    return {
      reviewers: rawData.label || [],
      unreviewed_count: rawData.unrevieweddata || []
    }
  }

  function getClosingRateData(bu = 'all', type = 'region') {
    const dataKey = `${type}_closing_Data`
    const itemKey = bu === 'all' ? `${type}_monthall` : `${type}_${bu}`
    const rawData = data.value[dataKey]?.[itemKey]

    if (!rawData) return null

    // Transform data structure to match component expectations
    return {
      labels: rawData.label || [],
      closing_rate: rawData.closingrate || []
    }
  }

  function getClosingDurationData(bu = 'all') {
    const key = bu === 'all' ? 'duration_monthall' : `duration_${bu}`
    return data.value.closing_duration_Data?.[key] || null
  }

  function getAuditorData(type = 'internalAuditor', bu = 'all') {
    const dataKey = `${type}_year_Data`
    const itemKey = bu === 'all' ? `${type}_yearall` : `${type}_${bu}`
    return data.value[dataKey]?.[itemKey] || null
  }

  function getAuditorTypeData(type = 'personType', bu = 'all') {
    const dataKey = `audit_${type}_Data`
    const itemKey = bu === 'all' ? `${type}_monthall` : `${type}_${bu}`
    return data.value[dataKey]?.[itemKey] || null
  }

  function getExternalAuditMonthlyData(bu = 'all') {
    const key = bu === 'all' ? 'externalaudit_monthall' : `externalaudit_${bu}`
    return data.value.externalaudit_month_Data?.[key] || null
  }

  function getExternalAuditClosureData(bu = 'all') {
    const key = bu === 'all' ? 'closureRate_monthall' : `closureRate_${bu}`
    return data.value.externalauditClosureRate_month_Data?.[key] || null
  }

  function getExternalAuditIssueData(bu = 'all', type = 'process') {
    const dataKey = type === 'process' ? 'exteraudit_quesprocess_Data' : 'exteraudit_questype_Data'
    const itemKey = bu === 'all' ? `${type}_monthall` : `${type}_${bu}`
    return data.value[dataKey]?.[itemKey] || null
  }

  function getExternalAuditSeverityData(bu = 'all') {
    const key = bu === 'all' ? 'severity_monthall' : `severity_${bu}`
    return data.value.exteraudit_severity_Data?.[key] || null
  }

  function loadStaticData() {
    // Data is already loaded from imports
    // This function can be used for future dynamic data loading
    console.log('Static data loaded')
  }

  function refreshData() {
    // Placeholder for future API integration
    console.log('Data refresh requested')
  }

  return {
    // State
    data,

    // Actions
    getChartData,
    getBasicLawMonthlyData,
    getBasicLawRankData,
    getBasicLawTypeData,
    getLayeredAuditCompletionData,
    getLayeredAuditReviewerData,
    getClosingRateData,
    getClosingDurationData,
    getAuditorData,
    getAuditorTypeData,
    getExternalAuditMonthlyData,
    getExternalAuditClosureData,
    getExternalAuditIssueData,
    getExternalAuditSeverityData,
    loadStaticData,
    refreshData
  }
})
