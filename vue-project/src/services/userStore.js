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
    
    const userObjCopy = {...userObj};
    delete userObjCopy.mdp;
    
    if (!userExist) {
        if (rememberMe) {
            localStorage.setItem("user", userObjCopy);
        }
        user.value = userObjCopy;
        
        axios.post("http://localhost:8000/signin", {
            email: userObj.email,
            password: userObj.mdp
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
    localStorage.removeItem("token");

    axios.get("http://localhost:8000/signout")
    .then(() => {
        console.log("déconnecter Node");
        console.log(localStorage);
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