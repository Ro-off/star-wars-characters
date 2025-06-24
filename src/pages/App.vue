<script setup lang="ts">
import CharacterCard from "../components/CharacterCard.vue";
import { useCharacterStore } from "../stores/CharactersStore";
import NavBar from "../components/NavBar.vue";

const characterStore = useCharacterStore();
</script>

<template>
  <NavBar />
  <div class="p-3 flex gap-5 flex-wrap justify-around">
    <CharacterCard
      v-if="
        !characterStore.isLoading && characterStore.filteredCharacters.length
      "
      v-for="(character, index) in characterStore.filteredCharacters"
      :key="index"
      :character="character"
    />
    <p v-else-if="!characterStore.isLoading">No results!</p>
    <div
      v-else
      v-for="index in 18"
      :key="index + 'skeleton'"
      className="skeleton h-40 card  w-60 shadow-sm overflow-hidden p-3 gap-2 "
    ></div>
  </div>
</template>
