<script setup lang="ts">
import { watch } from "vue";
import CharacterCard from "../components/CharacterCard.vue";
import { useCharacterStore } from "../stores/CharactersStore";

const characterStore = useCharacterStore();

watch(
  () => characterStore.$state.filter,
  async (newFilter2) => {
    console.log("🚀 ~ newFilter2:", newFilter2);
  }
);
</script>

<template>
  <nav
    class="flex justify-between p-3 pt-10 pb-6 items-center pl-6 bg-gradient-to-b from-base-100 to-transparent"
  >
    <h1
      class="font-starwrs font-bold text-2xl md:text-3xl lg:text-4xl pl- text-amber-400"
    >
      Star Wars characters
    </h1>
    <input
      type=" text"
      placeholder="Search..."
      className="input input-ghost text-amber-400 placeholder:text-amber-400"
      v-model="characterStore.filter"
    />
  </nav>
  <div class="p-3 flex gap-5 flex-wrap justify-around">
    <CharacterCard
      v-for="(character, index) in characterStore.getCharacters"
      :key="index"
      :character="character"
    />
  </div>
</template>
