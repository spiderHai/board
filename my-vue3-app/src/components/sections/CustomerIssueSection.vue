<template>
  <div class="section">
    <div class="section-title">
      <i class="el-icon-tickets"></i>
      <span>客户问题清单</span>
    </div>

    <div class="table-container">
      <!-- Filter Bar -->
      <div class="filter-bar">
        <div class="filter-group">
          <span class="filter-label">BU:</span>
          <DepartmentSelect v-model="selectedDept" :options="deptOptions" />
        </div>
        <div class="filter-group">
          <span class="filter-label">月份范围:</span>
          <el-date-picker
            v-model="dateRange"
            type="monthrange"
            range-separator="至"
            start-placeholder="开始月份"
            end-placeholder="结束月份"
            size="small"
            style="width: 280px"
          />
        </div>
        <div class="filter-actions">
          <el-button type="primary" size="small" @click="handleQuery">
            查询
          </el-button>
          <el-button size="small" @click="handleReset">
            重置
          </el-button>
        </div>
      </div>

      <!-- Data Table -->
      <el-table
        :data="filteredTableData"
        stripe
        border
        style="width: 100%"
        :header-cell-style="{ background: '#f5f7fa', color: '#333' }"
      >
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="bu" label="BU" width="180" />
        <el-table-column prop="customer" label="客户名称" width="200" />
        <el-table-column prop="issue_count" label="问题点数" width="100" align="center" />
        <el-table-column prop="closed_count" label="关闭数" width="100" align="center" />
        <el-table-column prop="closure_rate" label="关闭率" width="100" align="center">
          <template #default="scope">
            <span :style="{ color: scope.row.closure_rate >= 80 ? '#52c41a' : '#f5222d' }">
              {{ scope.row.closure_rate }}%
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="attachment" label="问题清单附件" width="150">
          <template #default="scope">
            <el-link v-if="scope.row.attachment" type="primary" :underline="false">
              查看附件
            </el-link>
            <span v-else style="color: #999">无</span>
          </template>
        </el-table-column>
        <el-table-column prop="audit_date" label="审核日期" width="120" />
      </el-table>

      <!-- Pagination -->
      <div class="pagination-container">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :total="totalCount"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import DepartmentSelect from '@/components/filters/DepartmentSelect.vue'
import { useChartDataStore } from '@/stores/chartData'
import { useDashboardStore } from '@/stores/dashboard'
import { BU_OPTIONS } from '@/data/constants'

const chartDataStore = useChartDataStore()
const dashboardStore = useDashboardStore()

// Filter states
const selectedDept = ref('all')
const dateRange = ref(null)
const currentPage = ref(1)
const pageSize = ref(20)

const deptOptions = [
  { value: 'all', label: '所有BU' },
  ...BU_OPTIONS.filter(bu => bu.value !== 'all')
]

// Sample table data
const tableData = ref([
  {
    bu: '车载镜头-南昌',
    customer: '某汽车公司A',
    issue_count: 15,
    closed_count: 12,
    closure_rate: 80,
    attachment: true,
    audit_date: '2024-11-15'
  },
  {
    bu: '车载镜头-合肥',
    customer: '某汽车公司B',
    issue_count: 8,
    closed_count: 8,
    closure_rate: 100,
    attachment: true,
    audit_date: '2024-11-10'
  },
  {
    bu: '车载模组-合肥',
    customer: '某汽车公司C',
    issue_count: 20,
    closed_count: 14,
    closure_rate: 70,
    attachment: true,
    audit_date: '2024-11-08'
  },
  {
    bu: 'CA003-南昌',
    customer: '某汽车公司D',
    issue_count: 12,
    closed_count: 10,
    closure_rate: 83,
    attachment: false,
    audit_date: '2024-11-05'
  },
  {
    bu: '手机镜头',
    customer: '某手机公司A',
    issue_count: 25,
    closed_count: 18,
    closure_rate: 72,
    attachment: true,
    audit_date: '2024-10-28'
  },
  {
    bu: '车载镜头-越南',
    customer: '某汽车公司E',
    issue_count: 10,
    closed_count: 9,
    closure_rate: 90,
    attachment: true,
    audit_date: '2024-10-20'
  },
  {
    bu: 'CA003-墨西哥',
    customer: '某汽车公司F',
    issue_count: 18,
    closed_count: 15,
    closure_rate: 83,
    attachment: true,
    audit_date: '2024-10-15'
  },
  {
    bu: '手机模组',
    customer: '某手机公司B',
    issue_count: 30,
    closed_count: 22,
    closure_rate: 73,
    attachment: true,
    audit_date: '2024-10-10'
  }
])

// Filtered data based on filters
const filteredTableData = computed(() => {
  let data = tableData.value

  // Filter by department
  if (selectedDept.value !== 'all') {
    const selectedLabel = deptOptions.find(opt => opt.value === selectedDept.value)?.label
    data = data.filter(item => item.bu === selectedLabel)
  }

  // Filter by date range (simplified - would need proper date parsing in production)
  if (dateRange.value && dateRange.value.length === 2) {
    // Date filtering logic would go here
  }

  // Pagination
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return data.slice(start, end)
})

const totalCount = computed(() => {
  let data = tableData.value

  if (selectedDept.value !== 'all') {
    const selectedLabel = deptOptions.find(opt => opt.value === selectedDept.value)?.label
    data = data.filter(item => item.bu === selectedLabel)
  }

  return data.length
})

// Handlers
const handleQuery = () => {
  currentPage.value = 1
  // Trigger data refresh
}

const handleReset = () => {
  selectedDept.value = 'all'
  dateRange.value = null
  currentPage.value = 1
}

const handleSizeChange = (val) => {
  pageSize.value = val
  currentPage.value = 1
}

const handleCurrentChange = (val) => {
  currentPage.value = val
}

// Watch for global filter changes
watch(() => dashboardStore.selectedBU, (newBU) => {
  selectedDept.value = newBU
})
</script>

<style scoped>
.section {
  margin-bottom: 32px;
}

.section-title {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-left: 4px;
}

.section-title i {
  color: #1890ff;
  margin-right: 8px;
  font-size: 24px;
}

.table-container {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.filter-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-label {
  font-size: 14px;
  color: #666;
  white-space: nowrap;
}

.filter-actions {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.pagination-container {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
