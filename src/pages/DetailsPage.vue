<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { Character } from '../stores/CharactersStore';
import { useCharacterStore } from '../stores/CharactersStore';

const { currentCharacter } = useCharacterStore();
const route = useRoute();
const router = useRouter();
const character = ref<Character | null>(null);
console.log('🚀 ~ character:', character.value);

const formatDate = (dateStr?: string) => {
  if (!dateStr) return 'unknown';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return 'unknown';
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

onMounted(async () => {
  const userId = route.params.id;
  if (typeof userId === 'string') {
    character.value = await currentCharacter.getAllCharacterData(userId);
  } else {
    router.push('/');
  }
});
</script>

<template>
  <div class="blur-progressive-bottom h-10/12 w-full fixed bottom-0 -z-10 bg-transparent" />
  <main class="text-gray-100 px-4 py-12 overflow-hidden">
    <div class="max-w-4xl mx-auto">
      <router-link to="/" class="text-amber-400 hover:underline text-sm mb-6 inline-block">
        ← Back to list
      </router-link>

      <div class="p-6">
        <div class="">
          <h1
            :class="[
              'text-2xl font-bold text-amber-300 mb-6',
              currentCharacter.isLoading && 'skeleton text-transparent w-max',
            ]"
          >
            {{ character?.name ?? 'Unknown character' }}
          </h1>
        </div>
        <dl
          :class="[
            'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm',
            '[&_div_*]:w-max ',
            currentCharacter.isLoading
              ? '[&_div]:skeleton [&_div_*]:text-transparent'
              : '[&_div_dt]:text-amber-400 ',
          ]"
        >
          <div>
            <dt>Height:</dt>
            <dd>{{ character?.height ? character.height + ' cm' : 'unknown' }}</dd>
          </div>
          <div>
            <dt>Mass:</dt>
            <dd>{{ character?.mass ? character.mass + ' kg' : 'unknown' }}</dd>
          </div>
          <div>
            <dt>Hair Color:</dt>
            <dd>{{ character?.hair_color ?? 'unknown' }}</dd>
          </div>
          <div>
            <dt>Skin Color:</dt>
            <dd>{{ character?.skin_color ?? 'unknown' }}</dd>
          </div>
          <div>
            <dt>Eye Color:</dt>
            <dd>{{ character?.eye_color ?? 'unknown' }}</dd>
          </div>
          <div>
            <dt>Birth Year:</dt>
            <dd>{{ character?.birth_year ?? 'unknown' }}</dd>
          </div>
          <div>
            <dt>Gender:</dt>
            <dd>{{ character?.gender ?? 'unknown' }}</dd>
          </div>
          <div>
            <dt>Homeworld:</dt>
            <dd>{{ character?.homeworld ?? 'unknown' }}</dd>
          </div>
          <div>
            <dt>Created:</dt>
            <dd>{{ formatDate(character?.created) ?? 'unknown' }}</dd>
          </div>
          <div>
            <dt>Edited:</dt>
            <dd>{{ formatDate(character?.edited) ?? 'unknown' }}</dd>
          </div>
        </dl>

        <div
          :class="[
            'mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4',
            currentCharacter.isLoading &&
              '[&_div]:skeleton [&_div]:h-30 [&_div_*]:text-transparent',
          ]"
        >
          <div>
            <h2 class="text-lg font-semibold text-amber-300 mb-2">Films</h2>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li v-if="character?.films.length" v-for="film in character?.films" :key="film">
                {{ film }}
              </li>
              <p v-else>No data</p>
            </ul>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-amber-300 mb-2">Species</h2>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li
                v-if="character?.species.length"
                v-for="species in character?.species"
                :key="species"
              >
                {{ species }}
              </li>
              <p v-else>No data</p>
            </ul>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-amber-300 mb-2">Vehicles</h2>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li
                v-if="character?.vehicles.length"
                v-for="vehicle in character?.vehicles"
                :key="vehicle"
              >
                {{ vehicle }}
              </li>
              <p v-else>No data</p>
            </ul>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-amber-300 mb-2">Starships</h2>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li
                v-if="character?.starships.length"
                v-for="ship in character?.starships"
                :key="ship"
              >
                {{ ship }}
              </li>
              <p v-else>No data</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.blur-progressive-bottom {
  overflow: hidden;
}
.blur-progressive-bottom::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  mask-image: linear-gradient(transparent, rgba(0, 0, 0, 0.814), black, black);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.blur-progressive-bottom > * {
  position: relative;
  z-index: 1;
}
</style>
