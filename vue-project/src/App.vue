<script setup>

import {ref} from "vue";

</script>

<template>

  <main>
    <nav>
      <ul>
        <li><RouterLink to="/">Accueil</RouterLink></li>

        <li>
          <RouterLink :to="{name:'demovfor'}">Demo v-for</RouterLink>
        </li>

        <li><RouterLink :to="{name:'compteur'}">Exo compteur</RouterLink></li>
        <li><RouterLink :to="{name:'jwt'}">Exo jwt</RouterLink></li>
        <li><RouterLink :to="{name:'form'}">Exo class binding</RouterLink></li>

      </ul>

    </nav>

    <RouterView />
    <!-- <=> -->
    <!-- <router-view></router-view> -->
    <!-- <=> -->
    <!-- <router-view/> -->
  </main>

</template>

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
</style>