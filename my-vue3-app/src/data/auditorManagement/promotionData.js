export const promotionData = {
  // 按体系维度
  promotion_system_Data: {
    system_monthall: {
      labels: ['VDA6.3', 'IATF16949', 'ISO9001', 'ISO14001', 'ISO45001', '其他'],
      application_count: [85, 120, 95, 45, 38, 22],
      pass_count: [75, 105, 82, 38, 32, 18]
    }
  },

  // 按事业部维度
  promotion_bu_Data: {
    bu_monthall: {
      labels: ['BU1', 'BU2', 'BU3', 'BU4', 'BU5'],
      application_count: [120, 95, 145, 78, 110],
      pass_count: [102, 85, 125, 68, 95]
    }
  },

  // 按部门维度
  promotion_dept_Data: {
    dept_monthall: {
      labels: ['质量部', '生产部', '研发部', '采购部', '物流部'],
      application_count: [75, 110, 65, 95, 85],
      pass_count: [65, 95, 58, 82, 75]
    }
  },

  // 按年度维度
  promotion_year_Data: {
    year_monthall: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      application_count: [280, 310, 350, 380, 420],
      pass_count: [245, 270, 305, 330, 360]
    }
  },

  // 组合维度示例（体系+事业部）
  promotion_system_bu_Data: {
    system_bu_monthall: {
      system_labels: ['VDA6.3', 'IATF16949', 'ISO9001'],
      bu_labels: ['BU1', 'BU2', 'BU3'],
      application_matrix: [
        [35, 28, 42],
        [45, 38, 52],
        [32, 25, 38]
      ],
      pass_matrix: [
        [30, 24, 36],
        [38, 32, 45],
        [28, 22, 33]
      ]
    }
  }
}