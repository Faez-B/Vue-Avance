import {ref} from "vue";

const user = ref(null);
localStorage.removeItem("user");

/**
 * TODO : vérifier dans le localStorage qu'il n'y a pas deja un user
 */

function fakeConnection(userObj) {
    // console.log("sign in");
    const userExist = localStorage.getItem("user");
    
    if (!userExist) {
        localStorage.setItem("user", userObj);
        user.value = userObj;
    }

}

const deconnexion = () => {
    // console.log("...");
    user.value = null;
    localStorage.removeItem("user");

}

export function useUserStore() {
    return {
        user,
        fakeConnection,
        deconnexion
    };
}