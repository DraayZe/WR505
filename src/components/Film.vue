<script setup >
import { defineProps } from 'vue';
const props = defineProps({
  film: {
    type: Object,
    required: true
  }
});

const afficheMetascore = function(film){
  return'⭐'.repeat(Math.ceil(film.metascore / 20));
  // if (film.metascore >= 80) {
  //   return '⭐⭐⭐⭐⭐'
  // } else if (film.metascore >= 60) {
  //   return '⭐⭐⭐⭐'
  // } else if (film.metascore >= 40) {
  //   return '⭐⭐⭐'
  // } else if (film.metascore >= 20) {
  //   return '⭐⭐'
  // } else {
  //   return ''
  // }
}

</script>

<template>
  <li class="film card">
    <h2>
      {{ film.title }}
      {{ afficheMetascore(film) }}
    </h2>
    <img :src="film.poster" :alt="`Poster of the movie ${film.title}`" />
    <p><strong>Released:</strong> {{ film.released }}</p>
    <p><strong>Director:</strong> {{ film.director }}</p>
    <p><strong>Actors:</strong> {{ film.actors }}</p>
    <p><strong>Plot:</strong> {{ film.plot }}</p>
    <p><strong>Metascore:</strong> {{ film.metascore }}</p>
  </li>
</template>

<style scoped>

</style>
