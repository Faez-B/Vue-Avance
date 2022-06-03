import {ref} from "vue";
import axios from "axios";

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
        const userObjCopy = {...userObj};

        delete userObjCopy.mdp;

        if (rememberMe) {
            localStorage.setItem("user", userObjCopy);
        }
        user.value = userObjCopy;

        axios.post("http://localhost:8000/signin", {
            email: userObj.email.value,
            password: userObj.mdp.value
        })
        .then((res) => {
            console.log(res);
        })
    }

}

const deconnexion = () => {
    // console.log("...");
    user.value = null;
    localStorage.removeItem("user");

    axios.get("http://localhost:8000/signout")
    .then(() => {
        console.log("déconnecter Node");
    })
    .catch( (err) => {
        console.log("Soucis lors de la déconnexion : " + err.message);
    })
}

export function useUserStore() {
    return {
        user,
        fakeConnection,
        deconnexion
    };
}