import {computed, createApp, reactive, ref} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import GreedCards from "./components/GreedCards.vue";
import ClientPerson from "./components/ClientPerson.vue";
import ClientAddress from "./components/ClientAddress.vue";
import CartList from "./components/CartList.vue";
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
            component: () => import('../src/components/AddProduct.vue')
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
        }
    ],
    scrollBehavior: () => ({ top: 0 })
})
createApp(App)
    .use(router)
    .mount('#app')