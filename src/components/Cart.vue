<template>
    <router-link   class="cart" id="cart" :to="{name : 'cart'}">
        <img class="cart__image" src="../images/cart.png" alt="Cart" />
        <div class="cart__num" id="cart_num" >{{props.data}}</div>
    </router-link>

</template>

<script setup>
const props = defineProps(['data'])
function load(){
    console.log('cart^ ' + props.data);
    return props.data
}
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
</style>