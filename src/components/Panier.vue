<template>
  <div id="basket">
    <h1>In my basket:</h1>
    <ul>
      <li v-for="item in basket" :key="item.type">
        <input type="number" v-model="item.quantity">
        <span v-for="i in item.quantity">{{item.type}}</span>
      </li>

    </ul>
  </div>
</template>

<style>
li { list-style: none; font-size: 2rem; }
</style>

<script setup>
import { ref } from 'vue'
const basket = ref([
  { type: '🍌', quantity: 2 },
  { type: '🍎', quantity: 4 },
  { type: '🍒', quantity: 6 },
  { type: '🍉', quantity: 1 },
])
</script>
