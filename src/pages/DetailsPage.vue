<script setup lang="ts">
import type { Character } from '../stores/CharactersStore';

const character: Character = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.info/api/planets/1',
  films: [
    'https://swapi.info/api/films/1',
    'https://swapi.info/api/films/2',
    'https://swapi.info/api/films/3',
    'https://swapi.info/api/films/6',
  ],
  species: [],
  vehicles: ['https://swapi.info/api/vehicles/14', 'https://swapi.info/api/vehicles/30'],
  starships: ['https://swapi.info/api/starships/12', 'https://swapi.info/api/starships/22'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.info/api/people/1',
};
</script>

<template>
  <div class="blur-progressive-bottom h-10/12 w-full fixed bottom-0 -z-10" />
  <main class="text-gray-100 px-4 py-12 overflow-hidden">
    <div class="max-w-4xl mx-auto">
      <router-link to="/" class="text-amber-400 hover:underline text-sm mb-6 inline-block">
        ← Back to list
      </router-link>

      <div class="p-6">
        <h1 class="text-2xl font-bold text-amber-300 mb-6">
          {{ character?.name ?? 'Unknown Character' }}
        </h1>

        <dl class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <dt class="text-amber-400">Height:</dt>
            <dd>{{ character?.height }} cm</dd>
          </div>
          <div>
            <dt class="text-amber-400">Mass:</dt>
            <dd>{{ character?.mass }} kg</dd>
          </div>
          <div>
            <dt class="text-amber-400">Hair Color:</dt>
            <dd>{{ character?.hair_color }}</dd>
          </div>
          <div>
            <dt class="text-amber-400">Skin Color:</dt>
            <dd>{{ character?.skin_color }}</dd>
          </div>
          <div>
            <dt class="text-amber-400">Eye Color:</dt>
            <dd>{{ character?.eye_color }}</dd>
          </div>
          <div>
            <dt class="text-amber-400">Birth Year:</dt>
            <dd>{{ character?.birth_year }}</dd>
          </div>
          <div>
            <dt class="text-amber-400">Gender:</dt>
            <dd>{{ character?.gender }}</dd>
          </div>
          <div>
            <dt class="text-amber-400">Homeworld:</dt>
            <dd>{{ character?.homeworld }}</dd>
          </div>
          <div>
            <dt class="text-amber-400">Created:</dt>
            <dd>{{ character?.created }}</dd>
          </div>
          <div>
            <dt class="text-amber-400">Edited:</dt>
            <dd>{{ character?.edited }}</dd>
          </div>
          <div>
            <dt class="text-amber-400">URL:</dt>
            <dd>
              <a :href="character?.url" class="text-blue-400 underline">{{ character?.url }}</a>
            </dd>
          </div>
        </dl>

        <div class="mt-8">
          <h2 class="text-lg font-semibold text-amber-300 mb-2">Films</h2>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li v-for="film in character?.films" :key="film">{{ film }}</li>
          </ul>
        </div>

        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h2 class="text-lg font-semibold text-amber-300 mb-2">Species</h2>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li v-for="species in character?.species" :key="species">{{ species }}</li>
            </ul>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-amber-300 mb-2">Vehicles</h2>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li v-for="vehicle in character?.vehicles" :key="vehicle">{{ vehicle }}</li>
            </ul>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-amber-300 mb-2">Starships</h2>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li v-for="ship in character?.starships" :key="ship">{{ ship }}</li>
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
