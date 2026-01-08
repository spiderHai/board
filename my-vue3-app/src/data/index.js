// Import all data modules
import { basicLawMonthlyData } from './qualityBasicLaw/monthlyData.js'
import { basicLawRankData, basicLawTypeData } from './qualityBasicLaw/rankData.js'
import { layeredAuditCompletionData, layeredAuditReviewerData, closingRateData, closingDurationData } from './layeredAudit/completionData.js'
import { internalAuditorData, certifyAuditorData, witnessAuditorData, promoteAuditorData, auditorTypeData } from './auditorManagement/auditorData.js'
import { promotionData } from './auditorManagement/promotionData.js'
import { externalAuditData } from './customerAudit/externalAuditData.js'
import { customerAuditSubcategoryData } from './customerAudit/subcategoryData.js'
import { systemAuditPlanAchievementData, systemAuditNonconformityClosureData, systemAuditNonconformityComparisonData } from './systemAudit/systemAuditData.js'
import { managementReviewPlanAchievementData, managementReviewImprovementClosureData, managementReviewImprovementComparisonData } from './managementReview/managementReviewData.js'
import { internalAuditPlanAchievementData } from './combinedAudit/internalAuditPlanData.js'
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
  ...promotionData,

  // Customer Audit
  ...externalAuditData,
  customeraudit_subcategory_Data: customerAuditSubcategoryData,

  // System Audit Management
  systemaudit_plan_achievement_Data: systemAuditPlanAchievementData,
  systemaudit_nonconformity_closure_Data: systemAuditNonconformityClosureData,
  systemaudit_nonconformity_comparison_Data: systemAuditNonconformityComparisonData,

  // Management Review
  managementreview_plan_achievement_Data: managementReviewPlanAchievementData,
  managementreview_improvement_closure_Data: managementReviewImprovementClosureData,
  managementreview_improvement_comparison_Data: managementReviewImprovementComparisonData,

  // Combined Audit (System Audit & Management Review)
  internalaudit_plan_achievement_Data: internalAuditPlanAchievementData
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
  promotionData,
  externalAuditData,
  customerAuditSubcategoryData,
  systemAuditPlanAchievementData,
  systemAuditNonconformityClosureData,
  systemAuditNonconformityComparisonData,
  managementReviewPlanAchievementData,
  managementReviewImprovementClosureData,
  managementReviewImprovementComparisonData,
  internalAuditPlanAchievementData
}