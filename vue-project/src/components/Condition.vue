<script setup>
  import {ref} from "vue";

  const user = ref(null);
  const connected = ref(false);

  const connexion = () => {
    connected.value = true;
    user.value = {
      name: "John"
    };
  }

  const deconnexion = () => {
    connected.value = false;
    user.value = null;
  }

</script>

<template>

  <main>

    <h2 v-if="connected">Hello {{ user.name }}!</h2>
    <h2 v-else>Hello Anonyme</h2>

    <button v-if="!connected" @click="connexion()">Connexion</button>
    <button v-else @click="deconnexion()">Déconnexion</button>
    
  </main>

</template>

<style></style>