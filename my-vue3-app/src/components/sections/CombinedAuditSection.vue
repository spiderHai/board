<template>
  <div class="section">
    <div class="section-title">
      <i class="el-icon-data-analysis"></i>
      <span>体系审核管理&管理评审管理</span>
    </div>

    <div class="charts-grid">
      <!-- Chart: 内部审核方案达成率 -->
      <ChartCard title="内部审核方案达成率">
        <template #filters>
          <el-select v-model="timePeriod" size="small" style="width: 100px">
            <el-option label="月度" value="month" />
            <el-option label="季度" value="quarter" />
            <el-option label="年度" value="year" />
          </el-select>
          <el-select v-model="system" size="small" style="width: 120px">
            <el-option label="全部体系" value="" />
            <el-option label="质量体系" value="quality" />
            <el-option label="环境体系" value="environment" />
            <el-option label="安全体系" value="safety" />
          </el-select>
          <el-select v-model="bu" size="small" style="width: 120px">
            <el-option label="全部事业部" value="" />
            <el-option label="事业部A" value="bu_a" />
            <el-option label="事业部B" value="bu_b" />
            <el-option label="事业部C" value="bu_c" />
          </el-select>
        </template>
        <InternalAuditPlanAchievementChart
          :system="system"
          :bu="bu"
          :timePeriod="timePeriod"
        />
      </ChartCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChartCard from "@/components/charts/ChartCard.vue";
import InternalAuditPlanAchievementChart from "@/components/charts/InternalAuditPlanAchievementChart.vue";

const timePeriod = ref("month");
const system = ref("");
const bu = ref("");
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
  color: #722ed1;
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
