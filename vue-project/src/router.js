import { createWebHistory, createRouter } from "vue-router";
import Condition from "@/components/Condition.vue";
import DemoVFor from "@/components/DemoVFor.vue";
import ClassBinding from "@/components/ClassBinding.vue";
import Ex3_4Vue from "@/components/Ex3_4.vue";
import Ex1_2Vue from "./components/Ex1_2.vue";
import AccueilVue from "./components/Accueil.vue";
import Connexion from "@/components/Connexion.vue";
import Inscription from "@/components/Inscription.vue";
import MonCompteVue from "@/components/MonCompte.vue";

import {useUserStore} from "@/services/userStore";

const { user } = useUserStore();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "accueil",
            component: AccueilVue
        },
        {
            path: "/condition",
            name: "condition",
            component: Condition
        },
        {
            path: "/demovfor",
            name: "demovfor",
            component: DemoVFor,
            beforeEnter: (to, from) => {
                // reject the navigation
                // var isAuthenticated = false;
                
                // if(user.value) isAuthenticated = true;
                
                // return isAuthenticated;
                if (!user.value) return { name: "accueil" }
            }
        },
        {
            path: "/jwt",
            name: "jwt",
            component: Ex3_4Vue,
            beforeEnter: (to, from) => {
                // reject the navigation
                // var isAuthenticated = false;
                
                // if(user.value) isAuthenticated = true;
                
                // return isAuthenticated;
                if (!user.value) return { name: "accueil" }
            }
        },
        {
            path: "/form",
            name: "form",
            component: ClassBinding
        },
        {
            path: "/compteur",
            name: "compteur",
            component: Ex1_2Vue
        },
        {
            path: "/connexion",
            name: "connexion",
            component: Connexion,
            beforeEnter: (to, from) => {
                if (user.value) return { name: "accueil" }
            }
            
        },
        {
            path: "/inscription",
            name: "inscription",
            component: Inscription,
            beforeEnter: (to, from) => {
                if (user.value) return { name: "accueil" }
            }
        },
        {
            path: "/moncompte",
            name: "moncompte",
            component: MonCompteVue,
            beforeEnter: (to, from) => {
                if (!user.value) return { name: "accueil" }
            }
        }
    ]
});

export default router;







