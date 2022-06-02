<script setup>
  import {ref} from "vue";
  const compteur = ref(0);

  setInterval( () => {
    compteur.value++;
  }, 1000 )

  function resetCompteur() {
    compteur.value = 0;
  }
</script>

<template>

  <main>
    <h1>Hello world</h1>

    <p>
      compteur : {{ compteur }}
    </p>

    <div>
      <button @click="resetCompteur()">Reset compteur</button>

      <input type="number" v-model="compteur">
    </div>

  </main>

</template>

<style></style>