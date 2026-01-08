<template>
  <div class="dashboard-container">
    <DashboardHeader />

    <div class="dashboard-content">
      <GlobalFilterBar />
      <KpiCards />

      <!-- Quality Basic Law Section -->
      <QualityBasicLawSection />

      <!-- Layered Audit Section -->
      <LayeredAuditSection />

      <!-- Auditor Management Section -->
      <AuditorManagementSection />

      <!-- Customer Audit Section -->
      <CustomerAuditSection />

      <!-- Customer Issue Section -->
      <CustomerIssueSection />
    </div>
  </div>
</template>

<script setup>
import DashboardHeader from '@/components/layout/DashboardHeader.vue'
import GlobalFilterBar from '@/components/layout/GlobalFilterBar.vue'
import KpiCards from '@/components/layout/KpiCards.vue'
import QualityBasicLawSection from '@/components/sections/QualityBasicLawSection.vue'
import LayeredAuditSection from '@/components/sections/LayeredAuditSection.vue'
import AuditorManagementSection from '@/components/sections/AuditorManagementSection.vue'
import CustomerAuditSection from '@/components/sections/CustomerAuditSection.vue'
import CustomerIssueSection from '@/components/sections/CustomerIssueSection.vue'
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  background: #f5f7fa;
  padding-top: 56px; /* Height of fixed header */
}

.dashboard-content {
  max-width: 1600px;
  margin: 0 auto;
  padding: 24px 12px 48px 12px;
}
</style>
