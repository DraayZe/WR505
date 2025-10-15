<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSession } from "@/stores/session";
import UserService from "@/services/UserService";

const email = ref("");
const password = ref("");
const error = ref(null);

const router = useRouter();
const session = useSession();

const login = async () => {
  error.value = null;
  try {
    const response = await UserService.login({
      email: email.value,
      password: password.value
    });
    session.login({ user: response.user, token: response.token });
    router.push("/search");
  } catch (err) {
    error.value = err.toString();
  }
};

// ✅ fonction pour register via API
const register = async () => {
  error.value = null;
  try {
    const response = await UserService.register({
      email: email.value,
      password: password.value,
      firstname: "John",
      lastname: "Smith"
    });
    session.login({ user: response.user, token: response.token });
    router.push("/search");
  } catch (err) {
    error.value = err.toString();
  }
};
</script>

<template>
  <div id="login-form">
    <form @submit.prevent="login">
      <h1>Authentification</h1>
      <p>Remplissez ce formulaire pour vous connecter ou vous inscrire.</p>
      <hr />

      <label for="email"><b>Email</b></label>
      <input
        type="text"
        v-model="email"
        placeholder="Entrez votre courriel"
        id="email"
        required
      />

      <label for="psw"><b>Mot de passe</b></label>
      <input
        type="password"
        v-model="password"
        placeholder="Entrez votre mot de passe"
        id="psw"
        required
      />

      <!-- ✅ Affichage des erreurs -->
      <p v-if="error" class="text-red-500">{{ error }}</p>

      <!-- ✅ Boutons login et register côte à côte -->
      <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
        <button type="submit">Se connecter</button>
        <button type="button" @click="register">S'inscrire</button>
      </div>
    </form>
  </div>
</template>
