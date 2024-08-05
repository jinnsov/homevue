import {createRouter, createWebHistory} from "vue-router";
import GreedCards from "@/components/Products/GreedCards.vue";
import ClientPerson from "@/components/Client/ClientPerson.vue";
import ClientAddress from "@/components/Client/ClientAddress.vue";
import CartList from "@/components/Cart/CartList.vue";
import Product from "@/components/Products/Product.vue";
import UserForm from "@/components/User/UserForm.vue";
import UserAdd from "@/components/User/UserAdd.vue";
import UserView from "@/components/User/UserView.vue";
import UserLogin from "@/components/User/UserLogin.vue";

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
            path: '/user/',
            name: 'user',
            component: UserForm,
            alias: '/user'
        },
        {
            path: '/user/add',
            name: 'useradd',
            component: UserAdd,
            alias: '/useradd'
        },
        {
            path: '/user/view',
            name: 'userview',
            component: UserView,
            alias: '/userview'
        },
        {
            path: '/user/login',
            name: 'login',
            component: UserLogin,
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
    console.error('Ошибка:'  + e.message)
})
export  default router
