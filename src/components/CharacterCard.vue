<script setup lang="ts">
import { paths } from '../router';
import type { Character } from '../stores/CharactersStore';
const { character } = defineProps<{ character: Character }>();

const urlArr = character.url.split('/');
const id = urlArr[urlArr.length - 1];
</script>

<template>
  <RouterLink
    :to="paths.details + id"
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

      <div class="card-actions justify-end"></div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #2a323c;
  color: #a6adbb;
  width: 15rem;
  height: 10rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  padding: 0.75rem;
  gap: 0.5rem;
}
.card:hover {
  outline-color: #facc15;
  outline-width: 2px;
  cursor: pointer;
}
.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  width: max-content;
  display: flex;
}
.card-body {
  padding: 0;
}
.text-sm {
  font-size: 0.875rem;
}
.space-y-1 > * + * {
  margin-top: 0.25rem;
}
.inline > * {
  display: inline;
}
.after-content-colon dt::after {
  content: ': ';
}
.after-content-sm dd::after {
  content: ' sm';
}
.after-content-kg dd::after {
  content: ' kg';
}
.card-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
