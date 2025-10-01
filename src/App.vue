<script setup>
</script>

<template>
  <header>
    Mon header
  </header>

  <!-- Ici s'affichera LoginForm ou SearchFilm selon la route -->
  <router-view />

  <footer>
    Mon footer
  </footer>
</template>

<style>
@import './assets/base.css';
</style>
