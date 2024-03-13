<template>
  <div class="grid grid-cols-3 gap-4 mt-8">
    <div v-for="cat in allCats" :key="cat.id" class="p-4 mx-auto">
      <img class="rounded-full object-cover h-60 w-60" :src="cat.url" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Cat } from '../App.vue'
interface Props {
  allCats: Array<Cat>
}

defineProps<Props>()
</script>
