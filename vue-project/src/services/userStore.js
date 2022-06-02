import {ref} from "vue";

const user = ref(null);

/**
 * TODO : vérifier dans le localStorage qu'il n'y a pas deja un user
 */

function fakeConnection() {
    console.log("sign in");
}

const deconnexion = () => {
    console.log("...");
}

export function useUserStore() {
    return {
        user,
        fakeConnection,
        deconnexion
    };
}