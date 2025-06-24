<script setup lang="ts">
import type { Character } from '../stores/CharactersStore';

const { character } = defineProps<{ character: Character }>();
</script>

<template>
  <div
    class="card bg-base-300 w-60 h-40 shadow-sm overflow-hidden p-3 gap-2 hover:outline-amber-400 hover:outline-2 cursor-pointer"
  >
    <h2 class="card-title w-max flex">{{ character.name }}</h2>
    <div class="card-body p-0">
      <dl
        class="text-sm space-y-1 [&_div_*]:inline [&_div_dt]:after:content-[':_'] [&_div_dt]: text-base-content"
      >
        <div>
          <dt>Height</dt>
          <dd class="after:content-['_sm']">{{ character.height }}</dd>
        </div>
        <div>
          <dt>Mass</dt>
          <dd class="after:content-['_kg']">{{ character.mass }}</dd>
        </div>
        <div>
          <dt>Birth year</dt>
          <dd>{{ character.birth_year }}</dd>
        </div>
        <div>
          <dt>Gender</dt>
          <dd>{{ character.gender }}</dd>
        </div>
      </dl>

      <div className="card-actions justify-end"></div>
    </div>
  </div>
</template>
