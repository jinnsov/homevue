<template>
    <router-link class=" cart__num"  id="user" :to="{name : 'user'}">
        <p class="" id="auto_num">Пользователь</p>
    </router-link>
</template>

<script setup>

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
    top: 50px;
    right: 5px;
}.cart__num:hover {
     background-color: #ff6633;
     color: #fff;
 }
</style>