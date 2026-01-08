// Internal Audit Plan Achievement Rate Data (Combined System Audit & Management Review)
// 内部审核方案达成率数据

export const internalAuditPlanAchievementData = {
  // Monthly data by system
  monthall: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    planned_count: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    completed_count: [11, 12, 11, 12, 11, 12, 12, 11, 12, 11, 12, 11]
  },
  monthquality: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    planned_count: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    completed_count: [5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 4]
  },
  monthenvironment: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    planned_count: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    completed_count: [3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4]
  },
  monthsafety: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    planned_count: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    completed_count: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  },

  // Quarterly data by system
  quarterall: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    planned_count: [36, 36, 36, 36],
    completed_count: [34, 35, 35, 34]
  },
  quarterquality: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    planned_count: [15, 15, 15, 15],
    completed_count: [14, 15, 14, 14]
  },
  quarterenvironment: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    planned_count: [12, 12, 12, 12],
    completed_count: [11, 11, 12, 11]
  },
  quartersafety: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    planned_count: [9, 9, 9, 9],
    completed_count: [9, 9, 9, 9]
  },

  // Yearly data by system
  yearall: {
    labels: ['2022', '2023', '2024'],
    planned_count: [140, 144, 144],
    completed_count: [132, 138, 138]
  },
  yearquality: {
    labels: ['2022', '2023', '2024'],
    planned_count: [58, 60, 60],
    completed_count: [55, 57, 57]
  },
  yearenvironment: {
    labels: ['2022', '2023', '2024'],
    planned_count: [46, 48, 48],
    completed_count: [43, 45, 45]
  },
  yearsafety: {
    labels: ['2022', '2023', '2024'],
    planned_count: [36, 36, 36],
    completed_count: [34, 36, 36]
  },

  // Monthly data by BU
  monthbu_a: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    planned_count: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    completed_count: [5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5]
  },
  monthbu_b: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    planned_count: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    completed_count: [3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 3]
  },
  monthbu_c: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    planned_count: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    completed_count: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  },

  // Quarterly data by BU
  quarterbu_a: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    planned_count: [15, 15, 15, 15],
    completed_count: [14, 15, 14, 15]
  },
  quarterbu_b: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    planned_count: [12, 12, 12, 12],
    completed_count: [11, 11, 12, 10]
  },
  quarterbu_c: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    planned_count: [9, 9, 9, 9],
    completed_count: [9, 9, 9, 9]
  },

  // Yearly data by BU
  yearbu_a: {
    labels: ['2022', '2023', '2024'],
    planned_count: [58, 60, 60],
    completed_count: [55, 57, 58]
  },
  yearbu_b: {
    labels: ['2022', '2023', '2024'],
    planned_count: [46, 48, 48],
    completed_count: [43, 45, 44]
  },
  yearbu_c: {
    labels: ['2022', '2023', '2024'],
    planned_count: [36, 36, 36],
    completed_count: [34, 36, 36]
  },

  // Combined: System + BU + Time Period (examples)
  monthquality_bu_a: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    planned_count: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    completed_count: [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2]
  },
  monthquality_bu_b: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    planned_count: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    completed_count: [2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1]
  },
  monthquality_bu_c: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    planned_count: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    completed_count: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },

  yearquality_bu_a: {
    labels: ['2022', '2023', '2024'],
    planned_count: [24, 24, 24],
    completed_count: [23, 23, 23]
  },
  yearquality_bu_b: {
    labels: ['2022', '2023', '2024'],
    planned_count: [20, 24, 24],
    completed_count: [19, 22, 22]
  },
  yearquality_bu_c: {
    labels: ['2022', '2023', '2024'],
    planned_count: [14, 12, 12],
    completed_count: [13, 12, 12]
  }
}
