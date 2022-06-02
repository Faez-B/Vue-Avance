<script setup>
  import {ref} from "vue";
  import * as jose from 'jose'

  const jwt = ref("");
  const decoded = ref("");
  let show = ref(false);

  const token = ref("");


  function decode() {
    if (jwt.value) {
      try {
        decoded.value = jose.decodeJwt(jwt.value);
    
        addLocalStorage();
        
      } catch (error) {
        decoded.value = error.message;
      }
      show.value = true;
    }
  }

  function addLocalStorage() {
    // Si le token est vide
    if ( !token.value ) {
      localStorage.setItem('token', jwt.value);
      token.value = localStorage.getItem('token');
    }

  }
</script>

<template>
  <main>
    <h1>Ex 3</h1>

    <form @submit.prevent="decode();">
      <input type="text" v-model="jwt">
      <input type="submit" value="Valider" class="mx-2 btn btn-success" />
    </form>

    <p v-if="show">
      {{ decoded }}
    </p>

    <hr>

    <h1>Ex 4</h1>

    <p v-if="token">
      {{ token }}
    </p>

    <hr>
  </main>
</template>

<style>

</style>