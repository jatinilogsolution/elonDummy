<script setup lang="ts">
import { ref } from "vue";
const selectedItem = ref("");
const selectedUnit = ref("");
const DetailsItemFormData = ref<Object>();

function handleDetailsItemForm(event: Event) {
  event.preventDefault();
  // const form = event.target;

  const formData = new FormData(event.target as HTMLFormElement);
  DetailsItemFormData.value = Object.fromEntries(formData.entries());
  console.log(">>>>>", DetailsItemFormData.value);
}

const data: String[] = [
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
];
</script>

<template>
  <form
    @submit="handleDetailsItemForm"
    class="flex w-full flex-wrap gap-6 items-center"
  >
    <v-autocomplete
      class="w-full min-w-[15vw] sm:max-w-[20vw]"
      label="Item"
      name="item"
      v-model="selectedItem"
      color="primary"
      bgColor="#F5F5F5"
      :items="data"
      density="compact"
      variant="solo-filled"
    />
    <v-autocomplete
      class="w-full min-w-[15vw] sm:max-w-[20vw]"
      label="Unit"
      name="unit"
      v-model="selectedUnit"
      color="primary"
      bgColor="#F5F5F5"
      :items="data"
      density="compact"
      variant="solo-filled"
    />

    <v-text-field
      class="w-full min-w-[15vw] sm:max-w-[20vw]"
      label="Quantity"
      name="qunatity"
      density="compact"
      variant="solo-filled"
      bgColor="#E0E0E0"
    />
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
    <v-btn
      variant="tonal"
      type="submit"
      class="mb-6 py-5 w-full sm:w-auto"
      bgColor="#E0E0E0"
    >
      <!-- <v-icon icon="mdi-menu" start></v-icon> -->
      Ok
    </v-btn>
  </form>
</template>
