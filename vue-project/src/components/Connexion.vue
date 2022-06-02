
<script setup>
    import {ref} from "vue";
    import { useRoute, useRouter } from "vue-router";

    import { useUserStore } from '@/services/userStore';

    const { user, fakeConnection } = useUserStore();

    const name = ref("");
    const email = ref("");

    const router = useRouter();
    const route = useRoute();

    const onSubmit = () => {
        if (email.value && name.value) {
            const userConnect = ref({
                name: name.value,
                email: email.value,
            })

            fakeConnection(userConnect.value);

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

        <div class="mt-2">
            <button type="submit" class="btn btn-success">Connexion</button>
        </div>
    </form>
</template>

<style>

</style>