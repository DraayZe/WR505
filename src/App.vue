<script setup>
import { useSession } from "@/stores/session";
import { useRouter } from "vue-router";

const session = useSession();
const router = useRouter();

function handleLogout() {
  session.logout();
  router.push("/");
}
</script>

<template>
  <header>
    <div class="header-content">
      <h1>Mon header</h1>

      <div v-if="session.loggedIn" class="user-info">
        <span>👋 Bonjour, {{ session.user?.firstname }}</span>
        <button @click="handleLogout">Se déconnecter</button>
      </div>
    </div>
  </header>

  <transition name="slide-left" mode="out-in">
    <router-view />
  </transition>

  <footer>
    Mon footer
  </footer>
</template>

<style>
@import './assets/base.css';

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
