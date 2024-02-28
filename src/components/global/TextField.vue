<template>
  <v-text-field
    :label="label"
    variant="solo-filled"
    :model-value="data"
    :disabled="isDisabled"
  >
  </v-text-field>
</template>
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  data: {
    type: String,
    default: null,
  },
});
</script>
