<template>
  <div class="toggle-buttons">
    <el-button
      v-for="button in buttons"
      :key="button.value"
      :type="modelValue === button.value ? 'primary' : 'default'"
      size="small"
      @click="$emit('update:modelValue', button.value)"
    >
      {{ button.label }}
    </el-button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  buttons: {
    type: Array,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.toggle-buttons {
  display: flex;
  gap: 8px;
}
</style>
