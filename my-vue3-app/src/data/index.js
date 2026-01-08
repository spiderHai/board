// Import all data modules
import { basicLawMonthlyData } from './qualityBasicLaw/monthlyData.js'
import { basicLawRankData, basicLawTypeData } from './qualityBasicLaw/rankData.js'
import { layeredAuditCompletionData, layeredAuditReviewerData, closingRateData, closingDurationData } from './layeredAudit/completionData.js'
import { internalAuditorData, certifyAuditorData, witnessAuditorData, promoteAuditorData, auditorTypeData } from './auditorManagement/auditorData.js'
import { promotionData } from './auditorManagement/promotionData.js'  // 新增的晋级数据
import { externalAuditData } from './customerAudit/externalAuditData.js'
import { BU_OPTIONS, MONTHS, YEARS, CHART_COLORS } from './constants.js'

// Aggregate all data
export const allData = {
  // Quality Basic Law
  basiclaw_month_Data: basicLawMonthlyData,
  basiclaw_rank_Data: basicLawRankData,
  basiclaw_type_Data: basicLawTypeData,

  // Layered Audit
  LayeredProcessAudit_month_Data: layeredAuditCompletionData,
  LayeredProcessAudit_reviewer_Data: layeredAuditReviewerData,
  ...closingRateData,
  ...closingDurationData,

  // Auditor Management
  internalAuditor_year_Data: internalAuditorData,
  certifyAuditor_year_Data: certifyAuditorData,
  witnessAuditor_year_Data: witnessAuditorData,
  promoteAuditor_year_Data: promoteAuditorData,
  ...auditorTypeData,
  // 新增的晋级数据
  ...promotionData,

  // Customer Audit
  ...externalAuditData
}

// Export constants
export { BU_OPTIONS, MONTHS, YEARS, CHART_COLORS }

// Export individual data modules for direct access
export {
  basicLawMonthlyData,
  basicLawRankData,
  basicLawTypeData,
  layeredAuditCompletionData,
  layeredAuditReviewerData,
  closingRateData,
  closingDurationData,
  internalAuditorData,
  certifyAuditorData,
  witnessAuditorData,
  promoteAuditorData,
  auditorTypeData,
  promotionData,  // 导出新的晋级数据
  externalAuditData
}