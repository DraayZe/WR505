<script setup lang="ts">
import './../assets/ghost.css';

const ghost1 = {
  anim: "joyful",
  style: "color: red"
}
const ghost2 = {
  anim: { jelly: true },
  style: { color: "green" }
}
const ghost3 = {
  isWobbly: true,
  isBlue: true
}
</script>

<template>
  <ol>
    <li :style="ghost1.style">
      <span class="ghost" :class=ghost1.anim >👻︎</span>
      I'm joyful and red
    </li>
    <li :style="ghost2.style">
      <span class="ghost" :class="ghost2.anim">👻︎</span>
      I'm jelly and green
    </li>
    <li :style="{ color: ghost3.isBlue ? 'blue' : 'black' }">
      <span class="ghost" :class="{wobbly: ghost3.isWobbly}">👻︎</span>
      I'm wobbly and blue
    </li>
  </ol>
</template>

<style scoped>

</style>
