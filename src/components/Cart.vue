<template>
    <router-link class="cart" id="cart" :to="{name : 'cart'}">
        <img class="cart__image" src="../images/cart.png" alt="Cart" />
        <div class="cart__num" id="cart_num" >{{counter.cardsCount}}</div>
    </router-link>

</template>

<script setup>
import {useCounterStore} from '../stores/productStore.js'
const counter = useCounterStore()
</script>

<style scoped>
.cart {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: #364364;
    transition: 0.1s;
    cursor: pointer;
    position: fixed; /* Фиксированное расположение */
    top: 50px; /* в правом верхнем углу */
    right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    padding: 15px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Увеличиваем кнопку при наведении на нее */
.cart:hover {
    transform: scale(1.1);
}

/* Стилизуем счетчик товаров */
.cart__num {
    position: absolute;
    background-color: #d62240;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    top: -5px;
    right: -5px;
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