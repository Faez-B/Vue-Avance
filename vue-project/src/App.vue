<script setup>
  import Ex1_2 from "@/components/Ex1_2.vue";
  import Ex3_4 from "@/components/Ex3_4.vue";

  import {ref} from "vue";
  import axios from 'axios';

  // const users = ref(null);

  // axios.get("http://localhost:8000/api/names")
  // .then( (usersData) => {
  //   users.value = usersData.data;
  // })


  let id = ref(0);

  const users = ref([
    {id : id.value++, prenom: "Alice", nom: "Smith"},
    {id : id.value++, prenom: "Bob", nom: "Stark"},
    {id : id.value++, prenom: "Charlie", nom: "Doe"}
  ]);

  const prenom = ref("");
  const nom = ref("");

  function ajouterUser() {
    if (prenom.value && nom.value) {
      users.value.push({
        id: id.value++,
        prenom : prenom.value,
        nom : nom.value
      });

      prenom.value = "";
      nom.value = "";
    }
  }

  function deleteUser(id) {
    users.value = users.value.filter( (user) => user.id != id );
  }

</script>

<template>

  <main>
    <!-- <Ex1_2 /> -->
    <!-- <Ex3_4 /> -->

    <!-- <h1>Ex Avancé : Lien entre le système d'authentification du backend et celui du frontend </h1> -->

    <!-- <p>
      {{ users }}
    </p> -->

    <ul>
      <li v-for="user in users" :key="user.id" @click="deleteUser(user.id)">
        {{ user }}
      </li>
    </ul>

    <form @submit.prevent="ajouterUser()">
      <input type="text" placeholder="Prénom" v-model="prenom">
      <input type="text" placeholder="Nom" v-model="nom">
      <button>Ajouter</button>
    </form>
  </main>

</template>

<style></style>