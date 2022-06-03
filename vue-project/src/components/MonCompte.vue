<script setup>
    import {ref} from "vue";
    import axios from 'axios';

    const token = ref("");
    const data = ref(null);

    if (localStorage.getItem("token")) {
        token.value = localStorage.getItem("token");
    }

    if (token.value){
        axios.get("http://localhost:8000/moncompte", {
            headers: { 
                "x-auth-token": token.value 
            }
        })
        .then((res) => {
            data.value = res.data;
        })
        .catch((err) => {
            data.value = err.message;
        })
        ;
    }
</script>

<template>
    <p>
        {{ data }}
    </p>
</template>

<style></style>