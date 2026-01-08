// 体系审核管理和管理评审管理模块的示例数据结构
// 将这些数据添加到你的 allData 对象中

export const systemAuditAndManagementReviewData = {
  // 1. 体系内审方案实施达成率
  systemaudit_plan_achievement_Data: {
    monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      planned_count: [10, 12, 15, 13, 14, 16, 15, 17, 14, 16, 15, 18],
      completed_count: [9, 11, 14, 12, 13, 15, 14, 16, 13, 15, 14, 17]
    },
    bu_monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      planned_count: [5, 6, 7, 6, 7, 8, 7, 8, 7, 8, 7, 9],
      completed_count: [4, 5, 6, 5, 6, 7, 6, 7, 6, 7, 6, 8]
    },
    system_monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      planned_count: [8, 9, 10, 9, 10, 11, 10, 12, 10, 11, 10, 13],
      completed_count: [7, 8, 9, 8, 9, 10, 9, 11, 9, 10, 9, 12]
    },
    bu_quarterall: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      planned_count: [18, 21, 22, 24],
      completed_count: [16, 19, 20, 22]
    },
    bu_yearall: {
      labels: ['2022', '2023', '2024'],
      planned_count: [80, 85, 90],
      completed_count: [75, 80, 85]
    }
  },

  // 2. 体系审核不符合项关闭率
  systemaudit_nonconformity_closure_Data: {
    monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      total_count: [25, 30, 28, 32, 29, 35, 31, 33, 30, 34, 32, 36],
      closed_count: [20, 25, 23, 27, 24, 30, 26, 28, 25, 29, 27, 31]
    },
    bu_monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      total_count: [12, 15, 14, 16, 14, 17, 15, 16, 15, 17, 16, 18],
      closed_count: [10, 12, 11, 13, 11, 14, 12, 13, 12, 14, 13, 15]
    },
    dept_monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      total_count: [8, 10, 9, 11, 10, 12, 10, 11, 10, 12, 11, 13],
      closed_count: [6, 8, 7, 9, 8, 10, 8, 9, 8, 10, 9, 11]
    },
    system_monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      total_count: [15, 18, 17, 19, 17, 20, 18, 19, 18, 20, 19, 21],
      closed_count: [12, 15, 14, 16, 14, 17, 15, 16, 15, 17, 16, 18]
    }
  },

  // 3. 体系审核不符合项对比
  systemaudit_nonconformity_comparison_Data: {
    yearall: {
      labels: ['事业部A', '事业部B', '事业部C', '事业部D'],
      count: [45, 38, 52, 41]
    },
    bu_yearall: {
      labels: ['生产部', '质量部', '技术部', '采购部', '物流部'],
      count: [28, 15, 22, 18, 12]
    },
    dept_yearall: {
      labels: ['条款4', '条款5', '条款6', '条款7', '条款8', '条款9'],
      count: [18, 25, 32, 28, 22, 15]
    },
    clause_yearall: {
      labels: ['4.1', '4.2', '4.3', '4.4', '5.1', '5.2', '5.3'],
      count: [8, 12, 15, 10, 14, 18, 11]
    }
  },

  // 4. 管理评审计划达成率
  managementreview_plan_achievement_Data: {
    monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      planned_count: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      completed_count: [2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2]
    },
    bu_monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      planned_count: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      completed_count: [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1]
    },
    system_monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      planned_count: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      completed_count: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    bu_quarterall: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      planned_count: [3, 3, 3, 3],
      completed_count: [3, 3, 2, 3]
    }
  },

  // 5. 管理评审改进项按时关闭率
  managementreview_improvement_closure_Data: {
    monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      total_count: [15, 18, 16, 20, 17, 22, 19, 21, 18, 23, 20, 25],
      ontime_closed_count: [12, 15, 13, 17, 14, 19, 16, 18, 15, 20, 17, 22]
    },
    bu_monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      total_count: [8, 9, 8, 10, 9, 11, 10, 11, 9, 12, 10, 13],
      ontime_closed_count: [6, 7, 6, 8, 7, 9, 8, 9, 7, 10, 8, 11]
    },
    dept_monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      total_count: [5, 6, 5, 7, 6, 8, 7, 8, 6, 9, 7, 10],
      ontime_closed_count: [4, 5, 4, 6, 5, 7, 6, 7, 5, 8, 6, 9]
    },
    system_monthall: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      total_count: [10, 12, 11, 13, 11, 15, 13, 14, 12, 16, 13, 17],
      ontime_closed_count: [8, 10, 9, 11, 9, 13, 11, 12, 10, 14, 11, 15]
    }
  },

  // 6. 管理评审改进项对比
  managementreview_improvement_comparison_Data: {
    yearall: {
      labels: ['事业部A', '事业部B', '事业部C', '事业部D'],
      count: [65, 58, 72, 61]
    },
    bu_yearall: {
      labels: ['生产部', '质量部', '技术部', '采购部', '物流部'],
      count: [38, 25, 32, 28, 22]
    },
    dept_yearall: {
      labels: ['2022', '2023', '2024'],
      count: [180, 195, 210]
    },
    year_yearall: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      count: [45, 52, 48, 65]
    }
  }
}

// 使用说明：
// 1. 将上述数据合并到你的 allData 对象中
// 2. 数据结构说明：
//    - labels: X轴标签（月份、季度、年份、部门等）
//    - planned_count: 计划数量
//    - completed_count: 完成数量
//    - total_count: 总数
//    - closed_count: 已关闭数
//    - ontime_closed_count: 按时关闭数
//    - count: 数量（用于对比图表）
// 3. 达成率和关闭率会自动计算，无需在数据中提供
