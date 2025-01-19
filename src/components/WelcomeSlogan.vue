<script  setup lang="ts">
import { reactive } from 'vue'

const slogan: Array<string> = reactive(['你好👋', '夜深了😴', '清晨了，您早啊🥱', '上午好👋', '事已至此，先吃饭吧🍚', '下午好👋', '晚上好👋'])
const date = new Date()
const hour = date.getUTCHours() + 8
let i = 0

if (hour < 5 || hour >= 23) {
  i = 1
}
else if (hour >= 5 && hour < 7) {
  i = 2
}
else if (hour >= 7 && hour < 11) {
  i = 3
}
else if (hour >= 11 && hour < 13) {
  i = 4
}
else if (hour >= 13 && hour < 18) {
  i = 5
}
else if (hour >= 18 && hour < 23) {
  i = 6
}
</script>

<template>
  <h1 class="text-title">
    {{ slogan[i] }}
  </h1>
</template>
