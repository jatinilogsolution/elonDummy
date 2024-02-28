<template>
  <v-card class="w-full">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab density="compact" value="one">Details</v-tab>
      <v-tab density="compact" value="two">Party Information</v-tab>
      <v-tab density="compact" value="three">Logistics</v-tab>
    </v-tabs>

    <v-card-text class="w-full border-l-2 border-r-2 border-b-2 min-h-96">
      <v-window v-model="tab">
        <v-window-item value="one">
          <DetailsItem />
          <DetailsTable />
        </v-window-item>

        <v-window-item value="two">Party Information</v-window-item>

        <v-window-item value="three">Logistics</v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DetailsTable from "./form1/DetailsTable.vue";
import DetailsItem from "./form1/DetailsItem.vue";

const tab = ref();
</script>
