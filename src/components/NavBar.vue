<script setup lang="ts">
import { useCharacterStore } from "../stores/CharactersStore";

const characterStore = useCharacterStore();
</script>
<template>
  <nav
    class="flex justify-between p-3 pt-10 pb-6 items-center pl-6 fixed z-10 blur-progresive w-full"
  >
    <h1
      class="font-starwrs font-bold text-2xl md:text-3xl lg:text-4xl pl- text-amber-400"
    >
      Star Wars characters
    </h1>
    <input
      type="text"
      placeholder="Search..."
      class="input input-ghost text-amber-400 placeholder:text-amber-400 focus:bg-transparent focus:outline-0 w-32 md:w-40 lg:w-60"
      v-model="characterStore.filter"
    />
  </nav>
  <div class="h-30"></div>
</template>

<style>
.blur-progresive {
  overflow: hidden;
}
.blur-progresive::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  mask-image: linear-gradient(black, black, rgba(0, 0, 0, 0.814), transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.blur-progresive > * {
  position: relative;
  z-index: 1;
}
</style>
