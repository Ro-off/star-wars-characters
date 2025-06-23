<script setup lang="ts">
import CharacterCard from "@components/CharacterCard";
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
    />
  </nav>
  <div class="p-3 flex gap-5 flex-wrap justify-around">
    <CharacterCard />
    <CharacterCard />
    <CharacterCard />
    <CharacterCard />
    <CharacterCard />
    <CharacterCard />
  </div>
</template>
