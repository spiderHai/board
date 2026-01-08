<template>
  <div class="section">
    <div class="section-title">
      <i class="el-icon-document"></i>
      <span>管理评审管理</span>
    </div>

    <div class="charts-grid">
      <!-- Chart 1: 管理评审计划达成率 -->
      <ChartCard title="管理评审计划达成率">
        <template #filters>
          <el-select v-model="chart1TimePeriod" size="small" style="width: 100px">
            <el-option label="月度" value="month" />
            <el-option label="季度" value="quarter" />
            <el-option label="年度" value="year" />
          </el-select>
          <el-select v-model="chart1System" size="small" style="width: 120px">
            <el-option label="全部体系" value="" />
            <el-option label="质量体系" value="quality" />
            <el-option label="环境体系" value="environment" />
            <el-option label="安全体系" value="safety" />
          </el-select>
          <el-select v-model="chart1BU" size="small" style="width: 120px">
            <el-option label="全部事业部" value="" />
            <el-option label="事业部A" value="bu_a" />
            <el-option label="事业部B" value="bu_b" />
            <el-option label="事业部C" value="bu_c" />
          </el-select>
        </template>
        <ManagementReviewPlanAchievementChart
          :system="chart1System"
          :bu="chart1BU"
          :timePeriod="chart1TimePeriod"
        />
      </ChartCard>

      <!-- Chart 2: 管理评审改进项按时关闭率 -->
      <ChartCard title="管理评审改进项按时关闭率">
        <template #filters>
          <el-select v-model="chart2TimePeriod" size="small" style="width: 100px">
            <el-option label="月度" value="month" />
            <el-option label="季度" value="quarter" />
            <el-option label="年度" value="year" />
          </el-select>
          <el-select v-model="chart2System" size="small" style="width: 120px">
            <el-option label="全部体系" value="" />
            <el-option label="质量体系" value="quality" />
            <el-option label="环境体系" value="environment" />
            <el-option label="安全体系" value="safety" />
          </el-select>
          <el-select v-model="chart2BU" size="small" style="width: 120px">
            <el-option label="全部事业部" value="" />
            <el-option label="事业部A" value="bu_a" />
            <el-option label="事业部B" value="bu_b" />
            <el-option label="事业部C" value="bu_c" />
          </el-select>
          <el-select v-model="chart2Dept" size="small" style="width: 120px">
            <el-option label="全部部门" value="" />
            <el-option label="生产部" value="production" />
            <el-option label="质量部" value="quality_dept" />
            <el-option label="技术部" value="tech" />
          </el-select>
        </template>
        <ManagementReviewImprovementClosureChart
          :system="chart2System"
          :bu="chart2BU"
          :dept="chart2Dept"
          :timePeriod="chart2TimePeriod"
        />
      </ChartCard>

      <!-- Chart 3: 管理评审改进项对比 -->
      <ChartCard title="管理评审改进项对比">
        <template #filters>
          <el-select v-model="chart3Year" size="small" style="width: 100px">
            <el-option label="2024年" value="2024" />
            <el-option label="2023年" value="2023" />
            <el-option label="2022年" value="2022" />
          </el-select>
          <el-select v-model="chart3BU" size="small" style="width: 120px">
            <el-option label="全部事业部" value="" />
            <el-option label="事业部A" value="bu_a" />
            <el-option label="事业部B" value="bu_b" />
            <el-option label="事业部C" value="bu_c" />
          </el-select>
          <el-select v-model="chart3Dept" size="small" style="width: 120px">
            <el-option label="全部部门" value="" />
            <el-option label="生产部" value="production" />
            <el-option label="质量部" value="quality_dept" />
            <el-option label="技术部" value="tech" />
          </el-select>
        </template>
        <ManagementReviewImprovementComparisonChart
          :year="chart3Year"
          :bu="chart3BU"
          :dept="chart3Dept"
        />
      </ChartCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChartCard from '@/components/charts/ChartCard.vue'
import ManagementReviewPlanAchievementChart from '@/components/charts/ManagementReviewPlanAchievementChart.vue'
import ManagementReviewImprovementClosureChart from '@/components/charts/ManagementReviewImprovementClosureChart.vue'
import ManagementReviewImprovementComparisonChart from '@/components/charts/ManagementReviewImprovementComparisonChart.vue'

// Chart 1 filters
const chart1TimePeriod = ref('month')
const chart1System = ref('')
const chart1BU = ref('')

// Chart 2 filters
const chart2TimePeriod = ref('month')
const chart2System = ref('')
const chart2BU = ref('')
const chart2Dept = ref('')

// Chart 3 filters
const chart3Year = ref('2024')
const chart3BU = ref('')
const chart3Dept = ref('')
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
  color: #52c41a;
  margin-right: 8px;
  font-size: 24px;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
}

@media (max-width: 1200px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
