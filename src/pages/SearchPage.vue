<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import CharacterCard from '../components/CharacterCard.vue';
import { useCharacterStore } from '../stores/CharactersStore';

const { filteredCharacters } = useCharacterStore();
const route = useRoute();

// Check if we're on a details page (child route)
const isDetailsOpen = computed(() => route.path.includes('/details'));
</script>

<template>
  <div
    :class="[
      'p-3 flex gap-5 flex-wrap justify-around relative',
      { 'scroll-locked': isDetailsOpen },
    ]"
  >
    <CharacterCard
      v-if="!filteredCharacters.isLoading && filteredCharacters.value.length"
      v-for="(character, index) in filteredCharacters.value"
      :key="index"
      :character="character"
    />
    <p v-else-if="!filteredCharacters.isLoading">No results!</p>
    <div
      v-else
      v-for="index in 48"
      :key="index + 'skeleton'"
      className="skeleton h-40 card  w-60 shadow-sm overflow-hidden p-3 gap-2 "
    ></div>
  </div>
  <RouterView v-slot="{ Component }">
    <Transition name="slide-bottom" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
