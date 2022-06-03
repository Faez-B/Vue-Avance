
<script setup>
    import {ref} from "vue";
    import { useRoute, useRouter } from "vue-router";

    import { useUserStore } from '@/services/userStore';

    const { user, fakeConnection } = useUserStore();

    const name = ref("");
    const email = ref("");
    const mdp = ref("");

    const router = useRouter();
    const route = useRoute();

    const rememberMe = ref(false);

    const onSubmit = () => {
        if (email.value && name.value) {
            const userConnect = ref({
                name: name.value,
                email: email.value,
                mdp: mdp.value
            })

            fakeConnection(userConnect.value, rememberMe.value);

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
            <label for="email">Mot de passe</label>
            <input type="password" class="form-control" id="email" placeholder="Mot de passe" v-model="mdp">
        </div>

        <div class="form-group">
            <input type="checkbox" name="rememberMe" id="rememberMe" class="mx-1" v-model="rememberMe">
            <label for="rememberMe">Se souvenir de moi</label>
        </div>
        
        <div class="mt-2">
            <button type="submit" class="btn btn-success">Connexion</button>
        </div>
    </form>
</template>

<style>

</style>