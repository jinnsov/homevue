<template>
    <router-link class="cart__num" id="cart" :to="{name : 'authorization'}">
        <p class="" id="cart_num" >Авторизоваться</p>
        <div class="" id="cart_num" >{{counter.cardsCount}}</div>
    </router-link>
</template>

<script setup>
import {useCounterStore} from '../../stores/productStore.js'
const counter = useCounterStore()
</script>

<style scoped>


/* Увеличиваем кнопку при наведении на нее */
.cart:hover {
    transform: scale(1.1);
}

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
.cart__image{
    width: 90%; /* Ширина */
    float: left; /* Выстраиваем элементы по горизонтали */
    margin: 0 0 0 3.5%; /* Отступ слева */
//background: #f0f0f0; /* Цвет фона */
    border-radius: 5px; /* Радиус скругления */
    padding: 2%;
}
</style>