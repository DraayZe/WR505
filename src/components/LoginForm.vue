<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = () => {
  if (email.value && password.value) {
    router.push("/search");
  }
};
</script>

<template>
  <div id="login-form">
    <form @submit.prevent="login">
      <h1>Authentification</h1>
      <p>Remplissez ce formulaire pour vous connecter.</p>
      <hr />

      <label for="email"><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Entrez votre courriel" id="email" required />

      <label for="psw"><b>Mot de passe</b></label>
      <input type="password" v-model="password" placeholder="Entrez votre mot de passe" id="psw" required />

      <p><button type="submit">Se connecter</button></p>
    </form>
  </div>
</template>
