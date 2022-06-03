<script setup>
    import {ref} from "vue";
    import { useRoute, useRouter } from "vue-router";

    // import axios from "axios";

    const name = ref("");
    const email = ref("");
    const mdp = ref("");

    const router = useRouter();
    const route = useRoute();

    function onSubmit() {
        if (name.value && email.value && mdp.value) {

            // axios.post("http://localhost:8000/signup", {
            //     email: email.value,
            //     password: mdp.value
            // })
            // .then((res) => {
            //     console.log(res);
            // })

            const userConnect = ref({
                name: name.value,
                email: email.value,
            })

            router.push("/");
        }
    }
</script>

<template>
    <form @submit.prevent="onSubmit()">
        <div class="form-group">
            <label for="nom">Nom</label>
            <input type="text" class="form-control" id="nom" placeholder="Votre nom" v-model="name">
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Votre email" v-model="email">
        </div>

        <div class="form-group">
            <label for="mdp">Mot de passe</label>
            <input type="password" class="form-control" id="mdp" placeholder="Mot de passe" v-model="mdp">
        </div>

        <div class="mt-2">
            <button type="submit" class="btn btn-success">Connexion</button>
        </div>
    </form>
</template>

<style></style>