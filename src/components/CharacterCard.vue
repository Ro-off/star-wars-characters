<script setup lang="ts"></script>

<template>
  <div
    class="card bg-base-100 w-60 shadow-sm overflow-hidden p-3 gap-2 hover:outline-amber-400 hover:outline-2 cursor-pointer"
  >
    <h2 class="card-title w-max flex">Luke Skywalker</h2>
    <div class="card-body p-0">
      <dl
        class="text-sm space-y-1 [&_div_*]:inline [&_div_dt]:after:content-[':_'] [&_div_dt]: text-base-content"
      >
        <div>
          <dt>Height</dt>
          <dd class="after:content-['_sm']">123</dd>
        </div>
        <div>
          <dt>Mass</dt>
          <dd class="after:content-['_kg']">78</dd>
        </div>
        <div>
          <dt>Birth year</dt>
          <dd>19BBY</dd>
        </div>
        <div>
          <dt>Gender</dt>
          <dd>male</dd>
        </div>
      </dl>

      <div className="card-actions justify-end"></div>
    </div>
  </div>
</template>
