<template>
    <div class="">
        <div class="popup__container" id="popup_container">
            <div class="popup__item">
                <h1 class="popup__title">Оформление заказа</h1>
            </div>
            <cart-item v-if="counter.cards.length >0"></cart-item>
            <h3 v-else>Корзина пуста</h3>
            <div class="popup__item">
                <div class="popup__cost">
                    <h4 class="popup__cost-title">Итого</h4>
                    <output class="popup__cost-value" id="popup_cost">{{ counter.sum.toFixed(2) }}</output>
                </div>
                <div class="popup__cost">
                    <button type="button" class="popup__product-delete" @click="counter.removeAllCard">Очистить карзину</button>
                </div>
            </div>
            <button class="popup__close" id="popup__item" @click="$router.go(-1)">✖</button>
        </div>
    </div>
</template>

<script setup>
import CartItem from "./CartItem.vue";
import {useMyStore} from '../../stores/productStore.js'
const counter = useMyStore()
</script>

<style scoped>
/* Стилизация контейнера окна */
.popup__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Распределяем элементы внутри равномерно */
    width: 100%;
    max-width: 800px;
    min-height: 300px;
    min-width: 350px;
    background-color: #fff;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position: relative;
}

/* Элементы окна (заголовок, список товаров, вывод стоимости) */
.popup__item {
    border-bottom: 1px solid #ddd;
    padding: 20px;
}

.popup__item:last-of-type {
    border-bottom: none;
}

.popup__title {
    font-size: 20px;
}
/* Стили для кнопки удаления товара */
.popup__product-delete {
    font-size: 12px;
    padding: 5px;
    cursor: pointer;
    color: #d62240;
}

/* Стили для вывода стоимости товаров */
.popup__cost {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 5px;
}

.popup__cost-title {
    margin-right: 15px;
    font-size: 20px;
    color: #364364;
    text-align: right;
}

.popup__cost-value {
    font-size: 20px;
}

/* Стили для кнопки закрытия окна */
.popup__close {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    padding: 20px;
    color: rgba(54, 67, 100, 0.7);
    font-size: 20px;
}

.popup__close:hover {
    color: rgb(54, 67, 100);
}
</style>