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
      v-for="(character, index) in characterStore.getCharacters"
      :key="index"
      :character="character"
    />
  </div>
</template>
