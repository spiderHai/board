import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { allData } from "@/data";

import { useDashboardStore } from "@/stores/dashboard";
export const useChartDataStore = defineStore("chartData", () => {
  // State - all chart data loaded from data files
  const data = ref(allData);
  const dashboardStore = useDashboardStore();
  // Actions
  function getChartData(dataKey, filters = {}) {
    // Get the data object for the specified key
    const dataObj = data.value[dataKey];

    if (!dataObj) {
      console.warn(`No data found for key: ${dataKey}`);
      return null;
    }

    // If filters are provided, filter the data
    if (filters.bu && filters.bu !== "all") {
      // Construct the filtered key based on BU
      const filteredKey = `${dataKey.split("_")[0]}_${filters.bu}`;
      return dataObj[filteredKey] || dataObj[`${dataKey}_monthall`] || dataObj;
    }

    // Return all data or the 'all' variant
    return dataObj[`${dataKey}_monthall`] || dataObj;
  }

  function getBasicLawMonthlyData(bu = "all") {
    const key = bu === "all" ? "basiclaw_monthall" : `basiclaw_month_${bu}`;
    return data.value.basiclaw_month_Data?.[key] || null;
  }

  function getBasicLawRankData(bu = "all") {
    const key = bu === "all" ? "rank_monthall" : `rank_${bu}`;
    return data.value.basiclaw_rank_Data?.[key] || null;
  }

  function getBasicLawTypeData(bu = "all") {
    const key = bu === "all" ? "basiclawtype_monthall" : `basiclawtype_${bu}`;
    return data.value.basiclaw_type_Data?.[key] || null;
  }

  function getLayeredAuditCompletionData(bu = "all") {
    const key =
      bu === "all"
        ? "LayeredProcessAudit_monthall"
        : `LayeredProcessAudit_${bu}`;
    const rawData = data.value.LayeredProcessAudit_month_Data?.[key];

    if (!rawData) return null;

    // Calculate completion rate from checkdone and checkall
    const completion_rate = rawData.checkall.map((total, index) => {
      return total > 0
        ? Math.round((rawData.checkdone[index] / total) * 100)
        : 0;
    });

    return {
      ...rawData,
      completion_rate,
    };
  }

  function getLayeredAuditReviewerData(bu = "all") {
    const key = bu === "all" ? "reviewer_monthall" : `reviewer_${bu}`;
    const rawData = data.value.LayeredProcessAudit_reviewer_Data?.[key];

    if (!rawData) return null;

    // Transform data structure to match component expectations
    return {
      reviewers: rawData.label || [],
      unreviewed_count: rawData.unrevieweddata || [],
    };
  }

  function getClosingRateData(bu = "all", type = "region") {
    const dataKey = `${type}_closing_Data`;
    const itemKey = bu === "all" ? `${type}_monthall` : `${type}_${bu}`;
    const rawData = data.value[dataKey]?.[itemKey];

    if (!rawData) return null;

    // Transform data structure to match component expectations
    return {
      labels: rawData.label || [],
      closing_rate: rawData.closingrate || [],
    };
  }

  function getClosingDurationData(bu = "all") {
    const key = bu === "all" ? "duration_monthall" : `duration_${bu}`;
    return data.value.closing_duration_Data?.[key] || null;
  }

  function getAuditorData(type = "internalAuditor", bu = "all") {
    const dataKey = `${type}_year_Data`;
    const itemKey = bu === "all" ? `${type}_yearall` : `${type}_${bu}`;
    return data.value[dataKey]?.[itemKey] || null;
  }

  function getAuditorTypeData(type = "personType", bu = "all") {
    const dataKey = `audit_${type}_Data`;
    const itemKey = bu === "all" ? `${type}_monthall` : `${type}_${bu}`;
    return data.value[dataKey]?.[itemKey] || null;
  }

  function getExternalAuditMonthlyData(bu = "all") {
    const key = bu === "all" ? "externalaudit_monthall" : `externalaudit_${bu}`;
    return data.value.externalaudit_month_Data?.[key] || null;
  }

  function getExternalAuditClosureData(bu = "all") {
    const key = bu === "all" ? "closureRate_monthall" : `closureRate_${bu}`;
    return data.value.externalauditClosureRate_month_Data?.[key] || null;
  }

  function getExternalAuditIssueData(bu = "all", type = "process") {
    const dataKey =
      type === "process"
        ? "exteraudit_quesprocess_Data"
        : "exteraudit_questype_Data";
    const itemKey = bu === "all" ? `${type}_monthall` : `${type}_${bu}`;
    return data.value[dataKey]?.[itemKey] || null;
  }

  function getExternalAuditSeverityData(bu = "all") {
    const key = bu === "all" ? "severity_monthall" : `severity_${bu}`;
    return data.value.exteraudit_severity_Data?.[key] || null;
  }

  function loadStaticData() {
    // Data is already loaded from imports
    // This function can be used for future dynamic data loading
    console.log("Static data loaded");
  }

  function refreshData() {
    // Placeholder for future API integration
    console.log("Data refresh requested");
  }

  function getPromotionData(type, filters = {}) {
    // 构建数据键
    let dataKey = `promotion_${type}_Data`;
    let itemKey = `${type}_monthall`;

    // 根据筛选条件构建itemKey
    if (filters.system && filters.bu) {
      dataKey = "promotion_system_bu_Data";
      itemKey = "system_bu_monthall";
    } else if (filters.system) {
      dataKey = "promotion_system_Data";
      itemKey = "system_monthall";
    } else if (filters.bu) {
      dataKey = "promotion_bu_Data";
      itemKey = "bu_monthall";
    } else if (filters.dept) {
      dataKey = "promotion_dept_Data";
      itemKey = "dept_monthall";
    } else if (filters.year) {
      dataKey = "promotion_year_Data";
      itemKey = "year_monthall";
    }

    const rawData = data.value[dataKey]?.[itemKey];

    if (!rawData) return null;

    // 计算通过率
    const passRate = rawData.application_count.map((appCount, index) => {
      return appCount > 0
        ? Math.round((rawData.pass_count[index] / appCount) * 100)
        : 0;
    });

    return {
      labels: rawData.labels || [],
      application_count: rawData.application_count || [],
      pass_count: rawData.pass_count || [],
      pass_rate: passRate,
    };
  }

  // 体系审核管理模块
  function getSystemAuditPlanAchievementData(filters = {}) {
    let dataKey = "systemaudit_plan_achievement_Data";
    let itemKey = "monthall";

    if (filters.system && filters.bu) {
      itemKey = `system_bu_${filters.timePeriod || "month"}all`;
    } else if (filters.system) {
      itemKey = `system_${filters.timePeriod || "month"}all`;
    } else if (filters.bu) {
      itemKey = `bu_${filters.timePeriod || "month"}all`;
    }

    const rawData = data.value[dataKey]?.[itemKey];
    if (!rawData) return null;

    const achievementRate = rawData.planned_count?.map((planned, index) => {
      return planned > 0
        ? Math.round((rawData.completed_count[index] / planned) * 100)
        : 0;
    });

    return {
      labels: rawData.labels || [],
      planned_count: rawData.planned_count || [],
      completed_count: rawData.completed_count || [],
      achievement_rate: achievementRate || [],
    };
  }

  function getSystemAuditNonconformityClosureData(filters = {}) {
    let dataKey = "systemaudit_nonconformity_closure_Data";
    let itemKey = "monthall";

    if (filters.dept) {
      itemKey = `dept_${filters.timePeriod || "month"}all`;
    } else if (filters.bu) {
      itemKey = `bu_${filters.timePeriod || "month"}all`;
    } else if (filters.system) {
      itemKey = `system_${filters.timePeriod || "month"}all`;
    }

    const rawData = data.value[dataKey]?.[itemKey];
    if (!rawData) return null;

    const closureRate = rawData.total_count?.map((total, index) => {
      return total > 0
        ? Math.round((rawData.closed_count[index] / total) * 100)
        : 0;
    });

    return {
      labels: rawData.labels || [],
      total_count: rawData.total_count || [],
      closed_count: rawData.closed_count || [],
      closure_rate: closureRate || [],
    };
  }

  function getSystemAuditNonconformityComparisonData(filters = {}) {
    let dataKey = "systemaudit_nonconformity_comparison_Data";
    let itemKey = "yearall";

    if (filters.clause) {
      itemKey = `clause_${filters.year || "year"}all`;
    } else if (filters.dept) {
      itemKey = `dept_${filters.year || "year"}all`;
    } else if (filters.bu) {
      itemKey = `bu_${filters.year || "year"}all`;
    } else if (filters.system) {
      itemKey = `system_${filters.year || "year"}all`;
    }

    return data.value[dataKey]?.[itemKey] || null;
  }

  // 管理评审管理模块
  function getManagementReviewPlanAchievementData(filters = {}) {
    let dataKey = "managementreview_plan_achievement_Data";
    let itemKey = "monthall";

    if (filters.system && filters.bu) {
      itemKey = `system_bu_${filters.timePeriod || "month"}all`;
    } else if (filters.system) {
      itemKey = `system_${filters.timePeriod || "month"}all`;
    } else if (filters.bu) {
      itemKey = `bu_${filters.timePeriod || "month"}all`;
    }

    const rawData = data.value[dataKey]?.[itemKey];
    if (!rawData) return null;

    const achievementRate = rawData.planned_count?.map((planned, index) => {
      return planned > 0
        ? Math.round((rawData.completed_count[index] / planned) * 100)
        : 0;
    });

    return {
      labels: rawData.labels || [],
      planned_count: rawData.planned_count || [],
      completed_count: rawData.completed_count || [],
      achievement_rate: achievementRate || [],
    };
  }

  function getManagementReviewImprovementClosureData(filters = {}) {
    let dataKey = "managementreview_improvement_closure_Data";
    let itemKey = "monthall";

    if (filters.dept) {
      itemKey = `dept_${filters.timePeriod || "month"}all`;
    } else if (filters.bu) {
      itemKey = `bu_${filters.timePeriod || "month"}all`;
    } else if (filters.system) {
      itemKey = `system_${filters.timePeriod || "month"}all`;
    }

    const rawData = data.value[dataKey]?.[itemKey];
    if (!rawData) return null;

    const ontimeClosureRate = rawData.total_count?.map((total, index) => {
      return total > 0
        ? Math.round((rawData.ontime_closed_count[index] / total) * 100)
        : 0;
    });

    return {
      labels: rawData.labels || [],
      total_count: rawData.total_count || [],
      ontime_closed_count: rawData.ontime_closed_count || [],
      ontime_closure_rate: ontimeClosureRate || [],
    };
  }

  function getManagementReviewImprovementComparisonData(filters = {}) {
    let dataKey = "managementreview_improvement_comparison_Data";
    let itemKey = "yearall";

    if (filters.dept) {
      itemKey = `dept_${filters.year || "year"}all`;
    } else if (filters.bu) {
      itemKey = `bu_${filters.year || "year"}all`;
    } else if (filters.year) {
      itemKey = `year_${filters.year || "year"}all`;
    }

    return data.value[dataKey]?.[itemKey] || null;
  }

  // 内部审核方案达成率（体系审核&管理评审组合模块）
  function getInternalAuditPlanAchievementData(filters = {}) {
    let dataKey = "internalaudit_plan_achievement_Data";
    let itemKey = `${filters.timePeriod || "month"}all`;

    // 组合筛选：体系 + 事业部
    if (filters.system && filters.bu) {
      itemKey = `${filters.timePeriod || "month"}${filters.system}_${filters.bu}`;
    } else if (filters.system) {
      itemKey = `${filters.timePeriod || "month"}${filters.system}`;
    } else if (filters.bu) {
      itemKey = `${filters.timePeriod || "month"}${filters.bu}`;
    }

    const rawData = data.value[dataKey]?.[itemKey];
    if (!rawData) return null;

    const achievementRate = rawData.planned_count?.map((planned, index) => {
      return planned > 0
        ? Math.round((rawData.completed_count[index] / planned) * 100)
        : 0;
    });

    return {
      labels: rawData.labels || [],
      planned_count: rawData.planned_count || [],
      completed_count: rawData.completed_count || [],
      achievement_rate: achievementRate || [],
    };
  }

  // 客户审核问题小类统计
  function getCustomerAuditSubcategoryData(filters = {}) {
    let dataKey = "customeraudit_subcategory_Data";
    let itemKey = `${filters.timePeriod || "month"}all`;

    if (filters.bu) {
      itemKey = `${filters.timePeriod || "month"}${filters.bu}`;
    }

    const rawData = data.value[dataKey]?.[itemKey];
    if (!rawData) return null;

    return {
      labels: rawData.labels || [],
      subcategories: rawData.subcategories || {},
    };
  }

  // Watch for global filter changes
  watch(
    () => dashboardStore.selectedBU,
    (newBU) => {
      console.log("Selected BU changed:", newBU);
    }
  );

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
    refreshData,
    getPromotionData,
    getSystemAuditPlanAchievementData,
    getSystemAuditNonconformityClosureData,
    getSystemAuditNonconformityComparisonData,
    getManagementReviewPlanAchievementData,
    getManagementReviewImprovementClosureData,
    getManagementReviewImprovementComparisonData,
    getInternalAuditPlanAchievementData,
    getCustomerAuditSubcategoryData,
  };
});
