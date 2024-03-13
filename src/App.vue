<template>
  <header>
    <div>
      <h1 class="text-4xl text-center uppercase text-zinc-700 font-bold mt-5">
        Choose the cutest cat
      </h1>
      <nav class="flex justify-center mt-8 uppercase text-zinc-700">
        <RouterLink to="/" class="mx-5">All</RouterLink>
        <RouterLink to="/vote" class="mx-5">Vote</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView v-slot="{ Component }">
    <component :is="Component" :all-cats="allCats" @getChosenCat="getChosenCat($event)" />
  </RouterView>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { onMounted, ref } from 'vue'
import axios from './services/axios'

export interface Cat {
  url: string
  id: string
}

onMounted(() => {
  getCatsList()
})

const allCats = ref<Array<Cat>>()

const getCatsList = () => {
  axios.get('/cats.json').then((res: any) => {
    allCats.value = res.data.images
  })
}

const getChosenCat = (id: string) => {
  // TODO: Create a new list of the cats that got the votes based on their ID and number of times that the were chosen by the user
}
</script>
