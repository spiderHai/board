# Quality Dashboard / 质量看板

A comprehensive quality management dashboard built with Vue 3, ECharts, and Element Plus.

一个使用 Vue 3、ECharts 和 Element Plus 构建的综合质量管理看板。

## Technology Stack / 技术栈

- **Vue 3** - Composition API with `<script setup>`
- **Vite** - Build tool and dev server
- **Pinia** - State management
- **ECharts 6.0.0** - Data visualization
- **Element Plus 2.13.0** - UI component library

## Project Structure / 项目结构

```
src/
├── views/
│   └── DashboardView.vue              # Main dashboard layout / 主看板布局
├── components/
│   ├── layout/                        # Layout components / 布局组件
│   │   ├── DashboardHeader.vue        # Header with title / 标题头部
│   │   ├── GlobalFilterBar.vue        # Global BU + Month filters / 全局BU和月份筛选
│   │   └── KpiCards.vue               # 6 KPI metric cards / 6个KPI指标卡片
│   ├── sections/                      # Section components / 模块组件
│   │   ├── QualityBasicLawSection.vue # Quality Basic Law / 质量基本法
│   │   ├── LayeredAuditSection.vue    # Layered Audit / 分层审核
│   │   ├── AuditorManagementSection.vue # Auditor Management / 审核员管理
│   │   ├── CustomerAuditSection.vue   # Customer Audit / 客户审核管理
│   │   └── CustomerIssueSection.vue   # Customer Issue Table / 客户问题表格
│   ├── charts/                        # Chart components / 图表组件
│   │   ├── BaseChart.vue              # ECharts wrapper / ECharts封装
│   │   └── ChartCard.vue              # Chart card with filters / 带筛选的图表卡片
│   └── filters/                       # Filter components / 筛选组件
│       ├── DepartmentSelect.vue       # BU selector / BU选择器
│       └── ViewToggleButtons.vue      # View toggle / 视图切换
├── composables/                       # Reusable logic / 可复用逻辑
│   ├── useECharts.js                  # Chart lifecycle / 图表生命周期
│   ├── useChartResize.js              # Responsive resize / 响应式调整
│   └── useChartOptions.js             # Chart option builders / 图表配置构建
├── stores/                            # Pinia stores / Pinia状态管理
│   ├── dashboard.js                   # Global state / 全局状态
│   ├── chartData.js                   # Chart data / 图表数据
│   └── filters.js                     # Chart filters / 图表筛选
└── data/                              # Static data / 静态数据
    ├── qualityBasicLaw/               # Quality Basic Law data / 质量基本法数据
    ├── layeredAudit/                  # Layered Audit data / 分层审核数据
    ├── auditorManagement/             # Auditor Management data / 审核员管理数据
    ├── customerAudit/                 # Customer Audit data / 客户审核数据
    └── constants.js                   # Constants / 常量配置
```

## Module-Chart-Data Mapping / 模块-图表-数据映射

### 1. Quality Basic Law Section / 质量基本法模块

**Component**: `QualityBasicLawSection.vue`

| Chart ID | Chart Name (EN) | Chart Name (CN) | Data Module | Data File |
|----------|----------------|----------------|-------------|-----------|
| chart_basiclaw_month | Monthly Rewards/Punishments | 月度奖惩统计 | qualityBasicLaw | monthlyData.js |
| chart_basiclaw_BU | BU Comparison | BU对比 | qualityBasicLaw | buData.js |
| chart_basiclaw_rank | Rank/Type Analysis | 排名/类型分析 | qualityBasicLaw | rankData.js |

**Data Structure / 数据结构**:
- `monthlyData.js`: Monthly reward/punishment counts by department
  - 月度奖惩数据按部门统计
- `buData.js`: BU-level comparison data by month
  - BU级别月度对比数据
- `rankData.js`: Ranking and type distribution data
  - 排名和类型分布数据

**Filters / 筛选器**:
- Department selector (部门选择器)
- Month selector (月份选择器)
- View toggle: Rank/Type (视图切换: 排名/类型)

---

### 2. Layered Audit Section / 分层审核模块

**Component**: `LayeredAuditSection.vue`

| Chart ID | Chart Name (EN) | Chart Name (CN) | Data Module | Data File |
|----------|----------------|----------------|-------------|-----------|
| chart_LayeredProcessAudit_month | Monthly Completion Rate | 月度完成率 | layeredAudit | completionData.js |
| chart_LayeredProcessAudit_BU | BU Comparison | BU对比 | layeredAudit | completionData.js |
| chart_LayeredProcessAudit_reviewer | Top 10 Reviewers | 待审核任务TOP10审核员 | layeredAudit | reviewerData.js |
| chart_closing_rate | Closing Rate Analysis | 关闭率分析 | layeredAudit | closingRateData.js |
| chart_Closing_duration | Closing Duration | 关闭时长 | layeredAudit | completionData.js |

**Data Structure / 数据结构**:
- `completionData.js`: Completion rate and duration data
  - 完成率和时长数据
  - Includes: checkdone, checkall, completion_rate, closing_duration
- `reviewerData.js`: Reviewer performance data
  - 审核员绩效数据
  - Includes: reviewer names, unreviewed task counts
- `closingRateData.js`: Closing rate by region/line/process/person
  - 按区域/产线/工序/人员的关闭率数据

**Filters / 筛选器**:
- Department selector (部门选择器)
- Month selector (月份选择器)
- View toggle: Region/Line/Process/Person (视图切换: 区域/产线/工序/人员)

---

### 3. Auditor Management Section / 审核员管理模块

**Component**: `AuditorManagementSection.vue`

| Chart ID | Chart Name (EN) | Chart Name (CN) | Data Module | Data File |
|----------|----------------|----------------|-------------|-----------|
| chart_auditor_internal | Internal Auditor | 内审员 | auditorManagement | auditorData.js |
| chart_auditor_certify | Certified Auditor | 认证审核员 | auditorManagement | auditorData.js |
| chart_auditor_witness | Witness Auditor | 见证审核员 | auditorManagement | auditorData.js |
| chart_auditor_promote | Promoted Auditor | 晋升审核员 | auditorManagement | auditorData.js |
| chart_auditor_type | Auditor Type Distribution | 审核员类型分布 | auditorManagement | auditorData.js |

**Data Structure / 数据结构**:
- `auditorData.js`: Auditor statistics by year and type
  - 按年份和类型的审核员统计数据
  - Includes: count, growth_rate for each auditor type
  - Person type vs System type distribution

**Filters / 筛选器**:
- Year selector (年份选择器)
- View toggle pairs (视图切换对):
  - Internal/Certified (内审员/认证审核员)
  - Witness/Promoted (见证审核员/晋升审核员)
  - Person Type/System Type (人员类型/体系类型)

---

### 4. Customer Audit Section / 客户审核管理模块

**Component**: `CustomerAuditSection.vue`

| Chart ID | Chart Name (EN) | Chart Name (CN) | Data Module | Data File |
|----------|----------------|----------------|-------------|-----------|
| chart_externalaudit_month | Monthly External Audits | 月度客户审核 | customerAudit | externalAuditData.js |
| chart_externalaudit_BU | BU External Audits | BU客户审核 | customerAudit | externalAuditData.js |
| chart_externalauditClosureRate_month | Monthly Closure Rate | 月度关闭率 | customerAudit | externalAuditData.js |
| chart_externalauditClosureRate_BU | BU Closure Rate | BU关闭率 | customerAudit | externalAuditData.js |
| chart_exteraudit_ques | Issue Analysis | 问题分析 | customerAudit | externalAuditData.js |
| chart_exteraudit_severity | Severity Distribution | 严重程度分布 | customerAudit | externalAuditData.js |

**Data Structure / 数据结构**:
- `externalAuditData.js`: External audit and issue data
  - 客户审核和问题数据
  - Includes: audit_count, issue_count, closure_rate
  - Issue breakdown by process/type and severity

**Filters / 筛选器**:
- Department selector (部门选择器)
- Month selector (月份选择器)
- View toggle: Process/Type (视图切换: 工序/类型)

---

### 5. Customer Issue Section / 客户问题模块

**Component**: `CustomerIssueSection.vue`

| Component Type | Name (EN) | Name (CN) | Data Module | Data File |
|---------------|-----------|-----------|-------------|-----------|
| Data Table | Customer Issue List | 客户问题清单 | customerAudit | externalAuditData.js |

**Data Structure / 数据结构**:
- `externalAuditData.js`: Customer issue details table
  - 客户问题详情表
  - Columns: BU, Customer Name, Issue Count, Closed Count, Closure Rate, Attachments, Audit Date
  - 列: BU、客户名称、问题点数、关闭数、关闭率、问题清单附件、审核日期

**Filters / 筛选器**:
- Department selector (部门选择器)
- Month range selector (月份范围选择器)
- Query/Reset buttons (查询/重置按钮)

---

## State Management / 状态管理

### Dashboard Store (`stores/dashboard.js`)

**Global State / 全局状态**:
- `selectedBU`: Current selected BU (当前选择的BU)
- `selectedMonth`: Current selected month (当前选择的月份)
- `kpiMetrics`: 6 KPI metrics (6个KPI指标)

**Actions / 操作**:
- `updateGlobalFilters()`: Update global filters (更新全局筛选)
- `resetFilters()`: Reset to defaults (重置为默认值)

### Chart Data Store (`stores/chartData.js`)

**Data Management / 数据管理**:
- Loads all chart data from data modules (从数据模块加载所有图表数据)
- Provides getter methods for each chart type (为每种图表类型提供getter方法)
- Transforms data structures to match component needs (转换数据结构以匹配组件需求)

**Key Getters / 主要Getters**:
- `getQualityBasicLawData()`: Quality basic law data (质量基本法数据)
- `getLayeredAuditCompletionData()`: Layered audit completion (分层审核完成率)
- `getLayeredAuditReviewerData()`: Reviewer performance (审核员绩效)
- `getClosingRateData()`: Closing rate analysis (关闭率分析)
- `getAuditorData()`: Auditor statistics (审核员统计)
- `getExternalAuditMonthlyData()`: External audit monthly (客户审核月度)
- `getExternalAuditClosureData()`: Closure rate data (关闭率数据)

### Filters Store (`stores/filters.js`)

**Chart-Specific Filters / 图表特定筛选**:
- Manages individual chart filter states (管理各图表筛选状态)
- Syncs with global filters when needed (需要时与全局筛选同步)

**Actions / 操作**:
- `updateChartFilter()`: Update specific chart filter (更新特定图表筛选)
- `syncFiltersWithGlobal()`: Sync with global filters (与全局筛选同步)
- `resetAllFilters()`: Reset all chart filters (重置所有图表筛选)

---

## Data Modules / 数据模块

### Constants (`data/constants.js`)

**Exports / 导出**:
- `BU_OPTIONS`: 15 business units (15个业务单元)
- `MONTHS`: 12 month labels (12个月份标签)
- `YEARS`: 2019-2024 (6 years / 6年)
- `CHART_COLORS`: Color palette (颜色配置)

### Quality Basic Law (`data/qualityBasicLaw/`)

**Files / 文件**:
- `monthlyData.js`: Monthly statistics (月度统计)
- `buData.js`: BU comparison (BU对比)
- `rankData.js`: Ranking data (排名数据)

### Layered Audit (`data/layeredAudit/`)

**Files / 文件**:
- `completionData.js`: Completion rate and duration (完成率和时长)
- `reviewerData.js`: Reviewer performance (审核员绩效)
- `closingRateData.js`: Closing rate by dimension (各维度关闭率)

### Auditor Management (`data/auditorManagement/`)

**Files / 文件**:
- `auditorData.js`: All auditor types and statistics (所有审核员类型和统计)

### Customer Audit (`data/customerAudit/`)

**Files / 文件**:
- `externalAuditData.js`: External audit and issue data (客户审核和问题数据)

---

## Composables / 可复用逻辑

### useECharts (`composables/useECharts.js`)

Manages ECharts instance lifecycle (管理ECharts实例生命周期):
- Initialize chart (初始化图表)
- Update chart options (更新图表配置)
- Dispose on unmount (卸载时销毁)

### useChartResize (`composables/useChartResize.js`)

Handles responsive chart resizing (处理响应式图表调整):
- Listen to window resize (监听窗口大小变化)
- Debounced resize handler (防抖调整处理)

### useChartOptions (`composables/useChartOptions.js`)

Builds ECharts option objects (构建ECharts配置对象):
- `buildBarOptions()`: Bar chart options (柱状图配置)
- `buildLineOptions()`: Line chart options (折线图配置)
- `buildPieOptions()`: Pie chart options (饼图配置)
- `buildComboOptions()`: Combo chart options (组合图配置)

---

## Running the Project / 运行项目

```bash
# Install dependencies / 安装依赖
npm install

# Start dev server / 启动开发服务器
npm run dev

# Build for production / 生产构建
npm run build

# Preview production build / 预览生产构建
npm run preview
```

## Key Features / 主要特性

1. **Global Filters / 全局筛选**: BU and month filters affect all charts (BU和月份筛选影响所有图表)
2. **Chart-Specific Filters / 图表特定筛选**: Individual charts have additional filters (各图表有额外筛选)
3. **View Toggles / 视图切换**: Some charts support multiple view modes (部分图表支持多种视图模式)
4. **Responsive Design / 响应式设计**: Charts resize automatically (图表自动调整大小)
5. **Interactive Charts / 交互式图表**: Hover, click, zoom interactions (悬停、点击、缩放交互)
6. **KPI Cards / KPI卡片**: 6 key metrics with trends (6个关键指标及趋势)

## Data Flow / 数据流

```
User Action (用户操作)
    ↓
Global Filter Bar (全局筛选栏)
    ↓
Dashboard Store (看板状态)
    ↓
Section Components (模块组件)
    ↓
Chart Data Store (图表数据状态)
    ↓
Data Modules (数据模块)
    ↓
Chart Components (图表组件)
    ↓
ECharts Rendering (ECharts渲染)
```

## Development Guide / 开发指南

### Adding a New Chart / 添加新图表

1. Add data to appropriate data module (在相应数据模块添加数据)
2. Add getter method in `chartData.js` store (在chartData.js状态中添加getter方法)
3. Create chart in section component (在模块组件中创建图表)
4. Use `BaseChart.vue` with computed options (使用BaseChart.vue和计算属性配置)
5. Add filters if needed (如需要添加筛选器)

### Modifying Data / 修改数据

1. Locate data file in `src/data/` (在src/data/中定位数据文件)
2. Update data structure (更新数据结构)
3. Ensure getter method transforms correctly (确保getter方法正确转换)
4. Test chart rendering (测试图表渲染)

---

## License / 许可证

MIT
