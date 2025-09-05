<script setup>
import LoginForm from "@/components/LoginForm.vue";
import Ghost from "@/components/ghost.vue";
import IceCreamStore from "@/components/IceCreamStore.vue";
import Temperature from "@/components/Temperature.vue";
import Panier from "@/components/Panier.vue";
const likesVue = false
const logo = 'https://vuejs.org/images/logo.png'
const logoWidth = 50



</script>

<template>
<LoginForm />



  <h1>
    I {{likesVue ? "love" : "hate"}}
    <img :src="logo" :style="{ width: logoWidth + 'px' }"/>

  </h1>

  <Ghost />
  <IceCreamStore />
  <Temperature/>
  <Panier/>


</template>

<style>
@import './assets/base.css';

</style>
