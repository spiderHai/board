// 管理评审管理数据
export const managementReviewPlanAchievementData = {
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
  }
}

export const managementReviewImprovementClosureData = {
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
  }
}

export const managementReviewImprovementComparisonData = {
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
  }
}
