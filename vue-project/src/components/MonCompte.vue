<script setup>
    import {ref} from "vue";
    import axios from 'axios';

    const token = ref("");
    const data = ref(null);

    if (localStorage.getItem("token")) {
        token.value = localStorage.getItem("token");
    }

    if (token.value){
        axios.interceptors.request.use( (config) => {
            config.headers.common["x-auth-token"] = token.value;
            console.log(config.headers);
            return config;
        });
    }
</script>

<template>
    <p>
        {{ data }}
    </p>
</template>

<style></style>