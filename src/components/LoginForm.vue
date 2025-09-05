<!--<script setup lang="ts">-->
<!--import { ref } from 'vue';-->

<!--const quantity = ref(1);-->
<!--const flavour = ref("#5B2F00");-->
<!--const size = ref(150);-->
<!--const napkin = ref(true);-->

<!--const name = ref('')-->

<!--</script>-->

<!--<template>-->
<!--  <div id="icecream-store">-->
<!--    <form>-->
<!--      <h1>Icecream store</h1>-->

<!--      <label>Quantity: <input v-model="quantity" type="number"> {{quantity}}</label>-->

<!--      <label>Size:-->
<!--        <select v-model="size">-->
<!--          <option  value="100">Small</option>-->
<!--          <option value="150">Medium</option>-->
<!--          <option value="200">Giant</option>-->
<!--        </select>-->
<!--      </label>-->

<!--      <label>Flavour:</label>-->
<!--      <label><input type="radio" name="flavour" value="#F3E5AB" v-model="flavour">Vanilla</label>-->
<!--      <label><input type="radio" name="flavour" value="#5B2F00" v-model="flavour"/>Chocolate</label>-->
<!--      <label><input type="radio" name="flavour" value="#DE0934" v-model="flavour"/>Strawberry</label>-->

<!--      <label><input v-model="napkin"  type="checkbox"> Napkin</label>-->

<!--      <IceCreams :quantity="quantity" :flavour="flavour" :size="size" :napkin="napkin" />-->


<!--      <label>-->
<!--        What is your name ?-->
<!--        <input v-model="name"> {{name}}-->
<!--      </label>-->

<!--    </form>-->
<!--  </div>-->





<!--</template>-->

<!--<style>label { display: block }</style>-->

<template>
  <div id="login-form">
    <form>
      <h1>Authentification</h1>
      <p>Remplissez ce formulaire pour vous connecter.</p>
      <hr>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Entrez votre courriel" id="email" name="email" required>

      <label for="psw"><b>Mot de passe</b></label>
      <input type="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required>

      <p><button type="submit">Se connecter</button></p>
    </form>
  </div>

</template>
