<script setup>
  import Ex1_2 from "@/components/Ex1_2.vue";
  import Ex3_4 from "@/components/Ex3_4.vue";

  import {ref} from "vue";
  import axios from 'axios';

  const users = ref(null);

  axios.get("http://localhost:8000/api/names")
  .then( (usersData) => {
    users.value = usersData.data;
  })

</script>

<template>

  <main>
    <Ex1_2 />
    <Ex3_4 />

    <h1>Ex Avancé : Lien entre le système d'authentification du backend et celui du frontend </h1>

    <p>
      {{ users }}
    </p>
  </main>

</template>

<style></style>