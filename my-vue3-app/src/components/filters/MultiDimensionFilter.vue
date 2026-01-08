<template>
  <div class="multi-dimension-filter">
    <div
      v-for="dimension in dimensions"
      :key="dimension.key"
      class="filter-item"
    >
      <span class="filter-label">{{ dimension.label }}：</span>
      <el-select
        v-model="modelValue[dimension.key]"
        size="small"
        style="width: 120px"
        @change="handleDimensionChange"
      >
        <el-option
          v-for="option in dimension.options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
    default: () => ({
      system: "",
      bu: "",
      dept: "",
      year: null,
    }),
  },
  dimensions: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

// 处理维度变化，重置相关筛选条件
const handleDimensionChange = () => {
  emit("update:modelValue", { ...props.modelValue });
};
</script>

<style scoped>
.multi-dimension-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
}

.filter-item {
  display: flex;
  align-items: center;
}

.filter-label {
  margin-right: 5px;
  font-size: 13px;
  color: #606266;
}
</style>
