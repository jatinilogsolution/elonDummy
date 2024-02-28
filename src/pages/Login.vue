<template>
  <div
    class="bg_img w-screen h-screen flex flex-col justify-between lg:object-contain object-fit"
  >
    <!-- Header -->
    <div class="flex justify-center md:justify-start">
      <img :src="logo" alt="Logo" class="h-36 w-auto" />
    </div>

    <!-- Form -->
    <div id="loginDiv" class="w-full flex justify-center px-4 py-20">
      <form
        @submit.prevent="handleSubmitButton"
        class="flex flex-col gap-3 shadow-2xl bg-white shadow-indigo-500 border-2 border-blue-100 w-[450px] rounded-lg font-serif p-[20px] md:p-12"
      >
        <div class="text-center">
          <h2 class="font-bold text-[28px]">Login Here</h2>
        </div>
        <div class="flex-column">
          <label for="email">Username/Email </label>
        </div>
        <div class="inputForm">
          <svg
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_3" data-name="Layer 3">
              <path
                d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
              ></path>
            </g>
          </svg>
          <input
            id="email"
            type="text"
            class="input"
            placeholder="Enter your Username or Email"
            v-model="username"
          />
        </div>

        <div class="flex-column">
          <label for="password">Password </label>
        </div>
        <div class="inputForm">
          <svg
            height="20"
            viewBox="-64 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
            ></path>
            <path
              d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
            ></path>
          </svg>
          <input
            id="password"
            :type="showPass ? 'text' : 'password'"
            class="input"
            placeholder="Enter your Password"
            v-model="password"
          />
          <button class="w-[10%] px-1 h-full" @click="handlePasswordVisiblity">
            <svg
              v-if="showPass"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
              />
            </svg>
          </button>
        </div>

        <div class="flex items-center justify-between gap-[10px]">
          <a
            href="#"
            class="text-[14px] ml-[5px] text-[#2d79f3] hover:underline active:text-[#2d79ff] font-semibold cursor-pointer"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          class="mt-[20px] mb-[10px] bg-[#151717] text-white border-none text-[16px] font-medium rounded-[10px] h-[50px] w-full cursor-pointer hover:bg-[#252727]"
        >
          Sign In
        </button>
      </form>
    </div>

    <!-- Footer -->
    <div class="py-2 text-center text-gray-700 w-full bg-white">
      Copyright © elanpro.net 2022. All rights reserved.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from "../assets/logo.png";

const showPass = ref<boolean>(false);
const username = ref<string>("");
const password = ref<string>("");

// Password visiblity
const handlePasswordVisiblity = () => {
  showPass.value = !showPass.value;
};

// submition validation
const handleSubmitButton = () => {
  // email formate
  var mailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (username.value?.match(mailValidation)) {
    // correct mail format
    return alert(`email: ${username.value}`);
  } else {
    // incorrect structure
    return alert(`username: ${username.value}`);
  }
};
</script>

<style scoped>
.bg_img {
  background-image: url("../assets/bgSvgLogin.svg");
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.form {
  @apply flex flex-col gap-[10px]  p-[30px] w-[450px] rounded-md font-serif;
}

.form button {
  @apply self-end;
}

.flex-column > label {
  @apply text-[#151717] font-semibold;
}

.inputForm {
  @apply border-2 border-[#ecedec] rounded-md h-[50px] flex items-center pl-[10px] transition-all;
}

.input {
  @apply ml-[10px] rounded-md border-none w-full h-full focus:outline-none bg-inherit placeholder:text-gray-500;
}

.inputForm:focus-within {
  border: 2px solid #2d79f3;
}
</style>
