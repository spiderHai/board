export const externalAuditData = {
  externalaudit_month_Data: {
    externalaudit_monthall: {
      audit_count: [8, 6, 10, 12, 9, 11, 13, 10, 14, 12, 15, 11],
      issue_count: [45, 32, 58, 68, 52, 61, 72, 55, 78, 65, 82, 60]
    }
  },
  externalauditClosureRate_month_Data: {
    closureRate_monthall: {
      closed_count: [38, 28, 50, 60, 45, 54, 63, 48, 68, 56, 70, 52],
      closure_rate: [84, 88, 86, 88, 87, 89, 88, 87, 87, 86, 85, 87]
    }
  },
  exteraudit_quesprocess_Data: {
    process_monthall: {
      labels: ['来料检验', '制程检验', '出货检验', '组装工序', '测试工序', '包装工序', '其他'],
      values: [125, 98, 85, 142, 108, 65, 42]
    }
  },
  exteraudit_questype_Data: {
    type_monthall: {
      labels: ['质量问题', '工艺问题', '设备问题', '人员问题', '环境问题', '其他'],
      values: [245, 168, 95, 82, 58, 17]
    }
  },
  exteraudit_severity_Data: {
    severity_monthall: {
      severity_labels: ['严重', '主要', '次要', '轻微'],
      severity_count: [15, 85, 245, 320]
    }
  }
}
