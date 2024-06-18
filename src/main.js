import { createApp, } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import GreedCards from "./components/GreedCards.vue";
import ClientPerson from "./components/Client/ClientPerson.vue";
import ClientAddress from "./components/Client/ClientAddress.vue";
import CartList from "./components/Cart/CartList.vue";
import { createPinia } from "pinia";
import Product from "./components/Product.vue";
import AuthorizationForm from "./components/Admin/AuthorizationForm.vue";
import router from "@/utils/router.js";
const pinia = createPinia()


createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')