<template>
    <router-link class=" cart__num"  id="cart" :to="{name : 'authorization'}">
        <p class="" id="cart_num" v-if="counter.login">{{ counter.login }}</p>
        <p class="" id="cart_num"  v-else>Учётная запись</p>
    </router-link>
</template>

<script setup>
import {useMyStore} from '../../stores/productStore.js'
import {onMounted} from "vue";
const counter = useMyStore()
onMounted(() => {
    const ls = localStorage.getItem('login')
    console.log('login: ' + counter.login)
    if (ls) counter.setLogin(ls)
})
</script>

<style scoped>

/* Стилизуем счетчик товаров */
.cart__num {
    position: absolute;
    background-color: #225bd6;
    width: 100px;
    height: 30px;
    border-radius: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 10px;
    font-weight: 100;
    top: 5px;
    right: 5px;


}
</style>