<template>
  <v-card class="w-full">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab density="compact" value="details">Details</v-tab>
      <v-tab density="compact" value="party_information"
        >Party Information</v-tab
      >
      <v-tab density="compact" value="logistics">Logistics</v-tab>
    </v-tabs>

    <v-card-text class="w-full border-l-2 border-r-2 border-b-2 min-h-96">
      <v-window v-model="tab">
        <v-window-item value="details">
          <DetailsItem />
          <DetailsTable />
        </v-window-item>

        <v-window-item value="party_information">
          <PartyInfoTab />
        </v-window-item>

        <v-window-item value="logistics">
          <LogisticsTabs />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PartyInfoTab from "./partyInformationTab/PartyInfoTab.vue";
import DetailsTable from "./detailsTab/DetailsTable.vue";
import DetailsItem from "./detailsTab/DetailsItem.vue";
import LogisticsTabs from "./logisticsTab/LogisticsTabs.vue";

const tab = ref();
</script>
