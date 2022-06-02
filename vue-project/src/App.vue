<script setup>
  import {ref} from "vue";
  const compteur = ref(0);

  setInterval( () => {
    compteur.value++;
  }, 1000 )
</script>

<template>

  <main>
    <h1>Hello world</h1>

    <p>
      compteur : {{ compteur }}
    </p>

  </main>

</template>

<style></style>