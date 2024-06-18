<template>
    <router-link class=" cart__num"  id="cart" :to="{name : 'authorization'}">
        <p class="" id="auto_num" v-if="store.login">{{ store.login }}</p>
        <p class="" id="auto_num"  v-else>Учётная запись</p>
    </router-link>
</template>

<script setup>
import {useMyStore} from '@/stores/productStore.js'
import {onMounted} from "vue";
const store = useMyStore()
onMounted(() => {
    const ls = localStorage.getItem('login')
    if (ls) store.setLogin(ls)
})
</script>

<style scoped>

/* Стилизуем счетчик товаров */
.cart__num {
    position: absolute;
    width: 100px;
    height: 30px;
    border-radius: 1%;
    border: 1px solid #70c05b;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #70c05b;
    font-size: 10px;
    font-weight: 100;
    top: 5px;
    right: 5px;
}.cart__num:hover {
        background-color: #ff6633;
         color: #fff;
}
</style>