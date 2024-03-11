<template>
  <div class="md:hidden">
    <Transition
      enter-from-class="opacity-0"
      enter-active-class=""
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class=""
      leave-to-class="opacity-0"
    >
      <button
        aria-hidden="true"
        class="fixed inset-0 z-40 bg-white/5"
        @click="show = !show"
        v-if="!show"
      />
    </Transition>
    <button
      id="menuOffcanvas"
      class="fixed justify-center items-center p-1  font-bold text-gray-900 right-2 z-[60] flex top-1 gap-2"
      @click="show = !show"
    >
      <span>Menú</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-7 h-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <Transition
      enter-from-class="translate-x-full"
      enter-active-class=""
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-active-class=""
      leave-to-class="translate-x-full"
    >
      <div
        v-if="!show"
        class="OffcanvasNav border-l-2 border-gray-800/1  0  fixed right-0 text-center shadow-lg font-sans space-y-12 top-0 bottom-0 bg-white duration-700 w-64 p-3 z-[60] flex justify-start pt-2 flex-col"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const show = ref(true);
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.OffcanvasNav nav {
  @apply !flex-col mt-6
}
</style>
