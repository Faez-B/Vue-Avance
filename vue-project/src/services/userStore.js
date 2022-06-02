import {ref} from "vue";

const user = ref(null);

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

    console.log(localStorage);
}

const deconnexion = () => {
    // console.log("...");
    user.value = null;
    localStorage.removeItem("user");
    console.log(localStorage);

}

export function useUserStore() {
    return {
        user,
        fakeConnection,
        deconnexion
    };
}