export const layeredAuditCompletionData = {
  LayeredProcessAudit_monthall: {
    checkall: [6, 2, 2, 4, 6, 3, 5, 2, 6, 6, 5, 3],
    checkdone: [3, 2, 2, 2, 5, 2, 3, 2, 2, 4, 2, 2],
    checkno: [1, 0, 0, 0, 0, 1, 1, 0, 2, 1, 2, 1]
  },
  LayeredProcessAudit_jingtou_nc: {
    checkall: [1, 2, 0, 1, 0, 2, 10, 3, 0, 5, 1],
    checkdone: [0, 0, 0, 1, 0, 7, 0, 0, 0, 3, 1],
    checkno: [1, 0, 0, 0, 1, 1, 1, 2, 0, 2, 1]
  },
  LayeredProcessAudit_jingtou_hf: {
    checkall: [2, 2, 0, 0, 0, 2, 1, 2, 1, 2, 1, 1],
    checkdone: [1, 0, 0, 0, 0, 1, 1, 2, 0, 2, 1, 0],
    checkno: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  },
  // Add more BU data following the same pattern...
}

export const layeredAuditReviewerData = {
  reviewer_monthall: {
    label: ['姓名A', '姓名B', '姓名C', '姓名D', '姓名E', '姓名F', '姓名G', '姓名H', '姓名I', '姓名J', '姓名K', '姓名L', '姓名M', '姓名N'],
    unrevieweddata: [9, 5, 9, 8, 6, 4, 7, 6, 8, 5, 9, 8, 3, 1]
  },
  reviewer_jingtou_nc: {
    label: ['姓名F', '姓名G', '姓名A', '姓名B', '姓名C', '姓名D', '姓名E', '姓名F', '姓名G'],
    unrevieweddata: [8, 8, 8, 4, 8, 8, 9, 7, 8]
  },
  // Add more BU data following the same pattern...
}

export const closingRateData = {
  region_closing_Data: {
    region_monthall: {
      label: ['区域1', '区域2', '区域3', '区域4', '区域5', '区域6', '区域7', '区域8', '区域9', '区域10', '区域11', '区域12', '区域13'],
      closingrate: [97, 95, 99, 96, 98, 94, 96, 97, 99, 99, 95, 92, 91]
    },
    // Add more BU data...
  },
  line_closing_Data: {
    line_monthall: {
      label: ['线体1', '线体2', '线体3', '线体4', '线体5', '线体6', '线体7', '线体8', '线体9', '线体10', '线体11', '线体12', '线体13'],
      closingrate: [96, 100, 98, 95, 99, 97, 94, 99, 99, 100, 99, 94, 99]
    },
    // Add more BU data...
  },
  process_closing_Data: {
    process_monthall: {
      label: ['工序A', '工序B', '工序C', '工序D', '工序E', '工序F', '工序G', '工序H', '工序I', '工序J', '工序K', '工序L', '工序M', '工序N'],
      closingrate: [97, 95, 99, 96, 98, 94, 96, 97, 98, 96, 98, 96, 97, 100]
    },
    // Add more BU data...
  },
  person_closing_Data: {
    person_monthall: {
      label: ['姓名A', '姓名B', '姓名C', '姓名D', '姓名', '姓名F', '姓名G'],
      closingrate: [91, 99, 93, 94, 89, 94, 96]
    },
    // Add more BU data...
  }
}

export const closingDurationData = {
  closing_duration_Data: {
    duration_monthall: {
      categories: ['0-3天', '4-7天', '8-14天', '15-30天', '30天以上'],
      duration: [45, 128, 85, 42, 15]
    }
  }
}
