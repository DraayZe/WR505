<script setup>
</script>

<template>
  <header>
    Mon header
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
