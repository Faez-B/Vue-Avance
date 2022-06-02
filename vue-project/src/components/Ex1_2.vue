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
</main>
</template>

<style>

</style>