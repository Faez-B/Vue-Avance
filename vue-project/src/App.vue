<script setup>
  import {ref} from "vue";
  import * as jose from 'jose'

  const compteur = ref(0);
  const jwt = ref("");
  const decoded = ref("");
  let show = ref(false);
  // console.log(jose);

  setInterval( () => {
    compteur.value++;
  }, 1000 )

  function resetCompteur() {
    compteur.value = 0;
  }

  function decode() {
    // event.preventDefault();
    decoded.value = jose.decodeJwt(jwt.value);
    show.value = true;
  }

</script>

<template>

  <main>
    <h1>Ex 1</h1>

    <p>
      compteur : {{ compteur }}
    </p>

    <hr>

    <h1>Ex 2</h1>

    <div>
      <button @click="resetCompteur()">Reset compteur</button>

      <input type="number" v-model="compteur">
    </div>

    <hr>

    <h1>Ex 3</h1>

    <form @submit.prevent="decode();">
      <input type="text" v-model="jwt">
      <input type="submit" value="Valider" />
    </form>

    <p v-if="show">
      {{ decoded }}
    </p>
  </main>

</template>

<style></style>