<template>
  <v-app>
    <div class="w-full flex items-center flex-col h-full px-4 py-4">
      <div
        class="flex w-full flex-col sm:flex-row sm:flex-wrap justify-between border-b-2solo-inverted px-10"
      >
        <!-- Branch -->

        <div>
          <v-autocomplete
            class="w-full h-auto min-w-[15vw] lg:max-w-[35vw]"
            label="Branch"
            :items="data"
            color="primary"
            variant="solo-filled"
            bgColor="#F5F5F5"
            density="compact"
          />
          <v-text-field
            class="w-full min-w-[15vw] lg:max-w-[35vw]"
            label="date"
            variant="solo-filled"
            density="compact"
            :model-value="date"
            bgColor="#E0E0E0"
            readonly
          />
          <v-autocomplete
            class="w-full min-w-[15vw] lg:max-w-[35vw]"
            label="Party"
            bgColor="#F5F5F5"
            density="compact"
            color="primary"
            :items="data"
            variant="solo-filled"
          />
          <v-autocomplete
            class="w-full min-w-[15vw] lg:max-w-[35vw]"
            label="Sub-Party"
            color="primary"
            density="compact"
            bgColor="#F5F5F5"
            :items="data"
            variant="solo-filled"
          />
        </div>

        <div>
          <div class="flex gap-1">
            <v-text-field
              class="w-full min-w-[8vw] lg:max-w-[35vw]"
              label="Voucher No1"
              density="compact"
              variant="solo-filled"
              bgColor="#E0E0E0"
              readonly
            />

            <v-text-field
              class="w-full min-w-[8vw] lg:max-w-[35vw]"
              density="compact"
              variant="solo-filled"
              bgColor="#E0E0E0"
              readonly
            />

            <v-text-field
              class="w-full min-w-[8vw] lg:max-w-[35vw]"
              density="compact"
              variant="solo-filled"
              bgColor="#E0E0E0"
              readonly
            />
          </div>
          <div class="flex gap-1">
            <v-text-field
              class="w-full min-w-[8vw] lg:max-w-[35vw]"
              label="Party PO No."
              density="compact"
              variant="solo-filled"
              bgColor="#E0E0E0"
            />

            <v-text-field
              class="w-full min-w-[8vw] lg:max-w-[35vw]"
              density="compact"
              variant="solo-filled"
              bgColor="#E0E0E0"
            />
          </div>
          <v-text-field
            class="w-full min-w-[15vw] lg:max-w-[35vw]"
            label="Requisition"
            variant="solo-filled"
            density="compact"
            bgColor="#F5F5F5"
          />
        </div>

        <!-- Party -->

        <div>
          <v-autocomplete
            class="w-full min-w-[15vw] lg:max-w-[35vw]"
            label="Currency"
            color="primary"
            :items="currency"
            density="compact"
            bgColor="#F5F5F5"
            variant="solo-filled"
          />
          <v-text-field
            class="w-full min-w-[15vw] lg:max-w-[35vw]"
            label="Conversion Rate"
            variant="solo-filled"
            model-value="Rs. 100000"
            density="compact"
            bgColor="#E0E0E0"
            readonly
          />
        </div>
      </div>

      <br />

      <div class="flex w-full">
        <Form1Tabs />
      </div>
      <div id="btnClick"></div>
      <div class=""></div>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import Form1Tabs from "../components/form/Form1Tabs.vue";

const date = new Date().toLocaleDateString();

// const formData = () => {};

const data: String[] = [
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
];
const currency: String[] = ["INR", "USD"];
</script>

<style scoped>
.btn {
  @apply py-2 px-4 bg-blue-400 active:bg-blue-200 rounded-md;
}
</style>
