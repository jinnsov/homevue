import {computed, createApp, reactive, ref} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import GreedCards from "./components/GreedCards.vue";
import ClientPerson from "./components/Client/ClientPerson.vue";
import ClientAddress from "./components/Client/ClientAddress.vue";
import CartList from "./components/Cart/CartList.vue";
import { createPinia } from "pinia";
import Card from "./components/Card.vue";
import Product from "./components/Product.vue";
import Authorization from "./components/Admin/AuthorizationButton.vue";
import AuthorizationForm from "./components/Admin/AuthorizationForm.vue";

const pinia = createPinia()

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'cards',
            component: GreedCards,
            alias: '/h'
        },
        {
            path: '/add',
            name: 'product',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./components/Admin/AddProduct.vue')
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ClientPerson,
            alias: '/person'
        },
        {
            path: '/address',
            name: 'address',
            component: ClientAddress,
            alias: '/person'
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartList,
            alias: '/cart'
        },
        {
            path: '/prod',
            name: 'prod',
            component: Product,
            alias: '/p'
        },
        {
            path: '/authorization',
            name: 'authorization',
            component: AuthorizationForm,
            alias: '/login'
        }
    ],
    scrollBehavior: () => ({ top: 0 })
})
createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')