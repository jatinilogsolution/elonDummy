<template>
  <div class="relative h-full w-screen overflow-hidden">
    <Navbar />
    <div class="overflow-hidden">
      <router-view />
    </div>
    <FooterBar />

    <router-view name="login" />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/global/Navbar.vue";
</script>
