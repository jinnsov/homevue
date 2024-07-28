<script setup>
import Menu from "./components/Menu.vue";
import Cart from "./components/Cart/CartButton.vue";
import StoreTitle from "@/components/StoreTitle.vue";
import LoginButton from "@/components/User/LoginButton.vue";
</script>

<template>
    <div class="page">
<!--        <authorization></authorization>-->
        <login-button></login-button>
        <cart></cart>
        <StoreTitle class="menu"></StoreTitle>
        <router-view></router-view>
    </div>
</template>

<style scoped>
html, body {
margin: 0;
    padding: 0;
}

.page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.menu {
    border: 1px solid #70c05b;
    background: #f9f9f9;
}

.content {
    justify-self: stretch;
}
</style>
