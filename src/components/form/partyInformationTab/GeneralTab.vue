<template>
  <form class="w-full flex flex-col items-center justify-center">
    <div
      class="flex w-full flex-col md:flex-row justify-between gap-4 items-center"
    >
      <div class="w-full flex flex-col items-center">
        <v-textarea
          class="w-full min-w-[15vw] lg:max-w-[35vw]"
          label="Address"
          name="address"
          rows="2"
          variant="solo-filled"
        />

        <v-text-field
          class="w-full min-w-[15vw] lg:max-w-[35vw]"
          label="Tin No."
          variant="solo-filled"
          density="compact"
          bgColor="#E0E0E0"
        />
        <v-text-field
          class="w-full min-w-[15vw] lg:max-w-[35vw]"
          label="CST No."
          variant="solo-filled"
          density="compact"
          bgColor="#E0E0E0"
        />

        <div class="flex w-full lg:max-w-[35vw] gap-1">
          <v-text-field
            class="w-full min-w-[8vw] lg:max-w-[35vw]"
            label="GST No."
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
          label="Payment Mode"
          variant="solo-filled"
          density="compact"
          bgColor="#E0E0E0"
        />
      </div>

      <div class="w-full flex flex-col items-center justify-center">
        <v-text-field
          class="w-full min-w-[15vw] lg:max-w-[35vw]"
          label="Pickup Address"
          variant="solo-filled"
          density="compact"
          bgColor="#E0E0E0"
        />

        <v-textarea
          class="w-full h-auto min-w-[15vw] lg:max-w-[35vw]"
          label="Delivery Address"
          name="address"
          rows="2"
          variant="solo-filled"
        />
        <v-autocomplete
          class="w-full h-auto min-w-[15vw] lg:max-w-[35vw]"
          label="Contact Person"
          :items="data"
          color="primary"
          variant="solo-filled"
          bgColor="#F5F5F5"
          density="compact"
        />

        <v-text-field
          class="w-full min-w-[15vw] lg:max-w-[35vw]"
          label="Pay Terms"
          variant="solo-filled"
          density="compact"
          bgColor="#E0E0E0"
        />
        <v-autocomplete
          class="w-full h-auto min-w-[15vw] lg:max-w-[35vw]"
          label="Delivery State"
          :items="data"
          color="primary"
          name="devliveryState"
          variant="solo-filled"
          bgColor="#F5F5F5"
          density="compact"
        />
      </div>
    </div>
    <div class="flex lg:gap-10 w-full lg:w-auto flex-col lg:flex-row">
      <v-autocomplete
        class="w-full min-w-[15vw] lg:max-w-[35vw]"
        label="State Executive"
        :items="data"
        color="primary"
        variant="solo-filled"
        bgColor="#F5F5F5"
        density="compact"
      />
      <v-autocomplete
        class="w-full h-auto min-w-[15vw] lg:max-w-[35vw]"
        label="Agent"
        :items="data"
        color="primary"
        variant="solo-filled"
        bgColor="#F5F5F5"
        density="compact"
      />
      <v-text-field
        class="w-full min-w-[15vw] lg:max-w-[35vw]"
        label="Credit Days"
        variant="solo-filled"
        density="compact"
        type="number"
        model-value="0"
        bgColor="#E0E0E0"
      />
      <v-autocomplete
        class="w-full h-auto min-w-[15vw] lg:max-w-[35vw]"
        label="Print Formate"
        :items="data"
        color="primary"
        variant="solo-filled"
        bgColor="#F5F5F5"
        density="compact"
      />
    </div>
  </form>
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
