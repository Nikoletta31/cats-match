<template>
  <header>
    <div>
      <h1 class="text-4xl text-center uppercase text-cyan-700 font-bold mt-5">
        Choose the cutest cat
      </h1>
      <nav class="flex justify-center mt-8 uppercase text-zinc-700">
        <RouterLink to="/" class="mx-5">All</RouterLink>
        <RouterLink to="/about" class="mx-5">Vote</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
