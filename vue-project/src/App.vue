<script setup>

import { useUserStore } from '@/services/userStore';

const { user } = useUserStore();

</script>

<template>

  <main class="container">
    <!-- <nav>
      <ul>
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li v-if="user"><RouterLink :to="{name:'demovfor'}">Demo v-for</RouterLink></li>
        <li><RouterLink :to="{name:'condition'}">Exo condition</RouterLink></li>
        <li><RouterLink :to="{name:'compteur'}">Exo compteur</RouterLink></li>
        <li v-if="user"><RouterLink :to="{name:'jwt'}">Exo jwt</RouterLink></li>
        <li><RouterLink :to="{name:'form'}">Exo class binding</RouterLink></li>

      </ul>

    </nav> -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul class="navbar-nav mr-auto">
          
          <li class="nav-item active"><RouterLink class="nav-link" to="/">Accueil</RouterLink></li>
          
          <li v-if="user" class="nav-item">
            <RouterLink class="nav-link" :to="{name:'demovfor'}">Demo v-for</RouterLink>
          </li>

          <li v-if="user" class="nav-item">
            <RouterLink :to="{name:'jwt'}">Exo jwt</RouterLink>
          </li>

          <li v-if="!user" class="nav-item">
            <RouterLink class="nav-link" :to="{name:'connexion'}">Connexion</RouterLink>
          </li>

          <li v-if="!user" class="nav-item">
            <RouterLink class="nav-link" :to="{name:'inscription'}">S'inscrire</RouterLink>
          </li>
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