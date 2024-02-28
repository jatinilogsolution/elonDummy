<template>
  <div class="flex w-full flex-wrap gap-6 items-center">
    <v-autocomplete
      class="w-full min-w-[15vw] sm:max-w-[20vw]"
      label="Item"
      color="primary"
      bgColor="#F5F5F5"
      :items="data"
      density="compact"
      variant="solo-filled"
    ></v-autocomplete>
    <v-autocomplete
      class="w-full min-w-[15vw] sm:max-w-[20vw]"
      label="Unit"
      color="primary"
      bgColor="#F5F5F5"
      :items="data"
      density="compact"
      variant="solo-filled"
    ></v-autocomplete>

    <v-text-field
      class="w-full min-w-[15vw] sm:max-w-[20vw]"
      label="Quantity"
      density="compact"
      variant="solo-filled"
      bgColor="#E0E0E0"
    ></v-text-field>
    <v-text-field
      class="w-full min-w-[15vw] sm:max-w-[20vw]"
      label="Rate"
      variant="solo-filled"
      model-value="Rs. 1000"
      bgColor="#E0E0E0"
      density="compact"
      readonly
    ></v-text-field>
    <v-text-field
      class="w-full min-w-[15vw] sm:max-w-[20vw]"
      label="Amount"
      variant="solo-filled"
      model-value="Rs. 100000"
      bgColor="#E0E0E0"
      density="compact"
      readonly
    ></v-text-field>
    <v-btn variant="tonal" class="mb-6 py-5 w-full sm:w-auto" bgColor="#E0E0E0">
      <!-- <v-icon icon="mdi-menu" start></v-icon> -->
      Ok
    </v-btn>
  </div>
</template>

<script setup lang="ts">
const data: String[] = [
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
];
</script>
