<template>
  <div>
    <input type="range" min="0" max="40" v-model="temperature" />
    {{ temperature }} °C
    <span v-if="temperature >= 30">🥵</span>
    <span v-else-if="temperature <= 30 && temperature >=10">😀</span>
    <span v-else>🥶</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const temperature = ref(20)
</script>
