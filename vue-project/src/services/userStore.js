import {ref} from "vue";

const user = ref(null);

/**
 * TODO : vérifier dans le localStorage qu'il n'y a pas deja un user
 */

if (localStorage.getItem("user")) {
    user.value = (localStorage.getItem("user"));
}

function fakeConnection(userObj, rememberMe) {
    // console.log("sign in");
    const userExist = localStorage.getItem("user");
    
    if (!userExist) {
        if (rememberMe) {
            localStorage.setItem("user", userObj);
        }
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