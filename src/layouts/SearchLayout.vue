<script setup lang="ts">
import { useCharacterStore } from "../stores/CharactersStore";

const characterStore = useCharacterStore();
</script>
<template>
  <nav
    class="blur-progressive fixed z-10 flex w-full items-center justify-between p-3 pt-10 pb-6 pl-6"
  >
    <h1
      class="font-starwrs pl- text-2xl font-bold text-amber-400 md:text-3xl lg:text-4xl"
    >
      Star Wars characters
    </h1>
    <input
      type="text"
      placeholder="Search..."
      class="input input-ghost w-32 text-amber-400 placeholder:text-amber-400 focus:bg-transparent focus:outline-0 md:w-40 lg:w-60"
      v-model="characterStore.filter"
    />
  </nav>
  <div class="h-30"></div>
  <slot />
</template>

<style>
.blur-progressive {
  overflow: hidden;
}
.blur-progressive::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  mask-image: linear-gradient(black, black, rgba(0, 0, 0, 0.814), transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.blur-progressive > * {
  position: relative;
  z-index: 1;
}
</style>
