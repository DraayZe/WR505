<script setup>
import { ref } from 'vue'

const monkeys =  ref([
  { hasEyesOpen: false }
])

const addMonkey = () => {
  monkeys.value.push({ hasEyesOpen: false })
}
</script>


<template>
  <div>
  <span v-for="monkey in monkeys" :key="monkey"
        @mouseover="monkey.hasEyesOpen = true"
        @mouseleave="monkey.hasEyesOpen = false"
  >
    {{ monkey.hasEyesOpen ? '🙉' : '🙈' }}
  </span>
    <br/>
    <button @click="addMonkey">Add monkey</button>
  </div>
</template>

<style>
span { font-size: 2rem; }
</style>
