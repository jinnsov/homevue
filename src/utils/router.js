import {createRouter, createWebHistory} from "vue-router";
import GreedCards from "@/components/Products/GreedCards.vue";
import ClientPerson from "@/components/Client/ClientPerson.vue";
import ClientAddress from "@/components/Client/ClientAddress.vue";
import CartList from "@/components/Cart/CartList.vue";
import Product from "@/components/Products/Product.vue";
import AuthorizationForm from "@/components/Admin/AuthorizationForm.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'cards',
            component: GreedCards,
            alias: '/home'
        },
        {
            path: '/add',
            name: 'product',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/components/Admin/AddProduct.vue'),
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
        },
    ],
    scrollBehavior: () => ({ top: 0 })
})
//  localStorage.getItem('login')
router.beforeEach(async (to) => {
    if (
        // проверка, что пользователь авторизован
        !localStorage.getItem('login')
        // ❗️ Избежать бесконечного перенаправления
        && to.name === 'product'
    ) {
        // перенаправить пользователя на страницу входа
        return { name: 'authorization' }
    }
})
router.onError((e) => {
    console.error(e.message)
})
export  default router
