<script setup>

  import {ref} from "vue";

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
        prenom : prenom.value.trim(),
        nom : nom.value.trim()
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
    <ul>
      <li v-for="user in users" :key="user.id" class="m-2 mx-0">
        <button @click="deleteUser(user.id)" class="btn btn-danger">X</button>
        {{ user }}
      </li>
    </ul>

    <form @submit.prevent="ajouterUser()">
      <div class="m-2 mx-0">
        <input type="text" placeholder="Prénom" v-model="prenom">
      </div>

      <div class="m-2 mx-0">
        <input type="text" placeholder="Nom" v-model="nom">
      </div>
      
      <button class="btn btn-primary">Ajouter</button>
    </form>
  </main>

</template>

<style></style>