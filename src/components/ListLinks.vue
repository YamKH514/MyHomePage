<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  list: {
    text: string
    description?: string
    icon?: string
    href: string
  }[]
}>()

const defaultImage = ref('/default.png')
</script>

<template>
  <ul grid="~ cols-1 sm:cols-2 gap-4">
    <template v-if="!list || list.length === 0">
      <div py10 opacity-50 text-lg>
        nothing here yet.
      </div>
    </template>
    <li v-for="link in list" :key="link.text" container-link w-full flex items-center rd-2>
      <a flex items-center target="_blank" :href="link.href" :aria-label="link.text">
        <div ml-2 mr-4 pt-2>
          <img :src="link.icon || defaultImage" alt="Icon" style="width: 4rem; display: inline-block;">
        </div>
        <div font-normal lh-tight>
          <div text-lg hover:text-main>{{ link.text }}</div>
          <div opacity-50 text-sm>{{ link.description }}</div>
        </div>
      </a>
    </li>
  </ul>
</template>
