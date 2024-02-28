<template>
  <div class="py-2">
    <v-autocomplete
      class="w-[15vw]"
      :label="label"
      :items="data"
      variant="solo-filled"
    ></v-autocomplete>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, required: true },
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
