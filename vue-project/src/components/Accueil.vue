
<script setup>
    import {ref} from 'vue';
    import axios from 'axios';

    const requeteAxios = ref("");

    function clickAxios() {
        axios.get("http://localhost:8000/")
        .then((res) => {
            requeteAxios.value = res.data.message;
            // console.log(res.data.message);
        })
        .catch((err) => {
            requeteAxios.value = err.message;
        })
        ;
    }

</script>

<template>
    <h1 class="text-center">
        Hello world
    </h1>

    <button class="btn btn-success" @click="clickAxios()">
        Axios
    </button>

    <h1 v-if="requeteAxios">
        {{ requeteAxios }}
    </h1>
</template>

<style>

</style>