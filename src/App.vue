<script setup>
import { ref } from "vue";
import LoginForm from "@/components/LoginForm.vue";
import SearchFilm from "@/components/SearchFilm.vue";

const loggedIn = ref(false);

const handleLogin = () => {
  loggedIn.value = true;
};
</script>

<template>
  <header>
    Mon header
  </header>

  <router-view />

<!--  Si pas connecté, formulaire -->
  <LoginForm v-if="!loggedIn" @logged="handleLogin" />

  <!-- Si connecté, recherche de films -->
  <SearchFilm v-else />

  <footer>
    Mon footer
  </footer>
</template>

<style>
@import './assets/base.css';
</style>
