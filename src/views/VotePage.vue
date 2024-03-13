<template>
  <div>
    <div class="flex justify-center mt-24">
      <div
        v-for="cat in twoRandomCats"
        :key="cat.id"
        class="mx-8 cursor-pointer"
        @click="chooseCat(cat.id)"
      >
        <img
          class="rounded-full object-cover h-60 w-60"
          :src="cat.url"
          :class="[{ 'border-teal-500 border-8': successMessage && chosenCatId === cat.id }]"
        />
      </div>
    </div>
    <div v-if="successMessage" class="text-center">
      <h2 class="font-bold mt-16">Your vote has been accepted!</h2>
      <button
        class="w-1/6 mt-8 rounded-md bg-amber-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="getRandomCats()"
      >
        Vote again!
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import type { Cat } from '../App.vue'
interface Props {
  allCats: Array<Cat>
}

const props = defineProps<Props>()
const emit = defineEmits(['getChosenCat'])

const successMessage = ref<boolean>(false)
const chosenCatId = ref('')
const twoRandomCats = ref()

onMounted(() => {
  getRandomCats()
})

const getRandomCats = () => {
  successMessage.value = false
  const newCatsArray = [...props.allCats]
  const randomCats: Cat[] = []

  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * newCatsArray.length)
    randomCats.push(newCatsArray[randomIndex])
    newCatsArray.splice(randomIndex, 1)
  }

  twoRandomCats.value = randomCats
}

const chooseCat = (id: string) => {
  successMessage.value = true
  chosenCatId.value = id
  emit('getChosenCat', id)
}
</script>
