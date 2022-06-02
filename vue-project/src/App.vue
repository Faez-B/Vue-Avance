<script setup>

import { useUserStore } from '@/services/userStore';

const { user, deconnexion } = useUserStore();

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
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          
          <li class="nav-item active"><RouterLink class="nav-link" to="/">Accueil</RouterLink></li>
          
          <li v-if="user" class="nav-item">
            <RouterLink class="nav-link" :to="{name:'demovfor'}">Demo v-for</RouterLink>
          </li>

          <li v-if="user" class="nav-item">
            <RouterLink class="nav-link" :to="{name:'jwt'}">Exo jwt</RouterLink>
          </li>

        </ul>

      </div>

      <ul class="navbar-nav mr-auto">
        <li v-if="!user" class="nav-item">
          <RouterLink class="nav-link btn btn-success" :to="{name:'connexion'}">Connexion</RouterLink>
        </li>

        <li v-if="!user" class="nav-item m-2 mt-0 mb-0">
          <RouterLink class="nav-link btn btn-warning" :to="{name:'inscription'}">S'inscrire</RouterLink>
        </li>

        <li v-if="user" class="nav-item m-2 mt-0 mb-0">
          <RouterLink class="nav-link btn btn-danger" :to="{name:'accueil'}" @click="deconnexion()">Déconnexion</RouterLink>
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
  nav a{
    color: white !important;
  }
</style>