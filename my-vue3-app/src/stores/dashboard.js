import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDashboardStore = defineStore('dashboard', () => {
  // State
  const selectedBU = ref('all')
  const selectedMonth = ref('2025-11')

  // KPI Metrics
  const kpiMetrics = ref({
    basicLawExecution: {
      value: 81,
      trend: 2.1,
      unit: '条',
      label: '质量基本法执行'
    },
    auditCompletionRate: {
      value: 100,
      trend: 1.0,
      unit: '%',
      label: '审核完成率'
    },
    layeredAuditCompletion: {
      value: 95,
      trend: -0.5,
      unit: '%',
      label: '分层审核完成'
    },
    customerAuditScore: {
      value: 92,
      trend: 3.2,
      unit: '分',
      label: '客户审核得分'
    },
    issueClosureRate: {
      value: 97,
      trend: 1.5,
      unit: '%',
      label: '问题关闭率'
    },
    auditorCertificationRate: {
      value: 88,
      trend: 2.8,
      unit: '%',
      label: '审核员认证率'
    }
  })

  // Getters
  const currentBULabel = computed(() => {
    const buOptions = [
      { value: 'all', label: '所有BU' },
      { value: 'jingtou_nc', label: '车载镜头-南昌' },
      { value: 'jingtou_hf', label: '车载镜头-合肥' },
      { value: 'jingtou_yn', label: '车载镜头-越南' },
      { value: 'mozu_hf', label: '车载模组-合肥' },
      { value: 'ca003_nc', label: 'CA003-南昌' },
      { value: 'ca003_mxg', label: 'CA003-墨西哥' },
      { value: 'jingtou_shouji', label: '手机镜头' },
      { value: 'mozu_shouji', label: '手机模组' },
      { value: 'fuzhou', label: '抚州恒泰' },
      { value: 'jingtou_gaoqing', label: '高清广角镜头' },
      { value: 'mozu_gaoqing', label: '高清广角模组' },
      { value: 'glass', label: '玻璃镜片' },
      { value: 'element', label: '精密元件' },
      { value: 'light', label: '光学研究院' }
    ]
    const bu = buOptions.find(b => b.value === selectedBU.value)
    return bu ? bu.label : '所有BU'
  })

  // Actions
  function updateGlobalFilters(bu, month) {
    if (bu !== undefined) selectedBU.value = bu
    if (month !== undefined) selectedMonth.value = month
  }

  function updateKpiMetrics(metrics) {
    kpiMetrics.value = { ...kpiMetrics.value, ...metrics }
  }

  function resetFilters() {
    selectedBU.value = 'all'
    selectedMonth.value = new Date().toISOString().slice(0, 7)
  }

  return {
    // State
    selectedBU,
    selectedMonth,
    kpiMetrics,

    // Getters
    currentBULabel,

    // Actions
    updateGlobalFilters,
    updateKpiMetrics,
    resetFilters
  }
})
