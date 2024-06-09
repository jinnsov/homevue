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
import {useCounterStore} from '../../stores/productStore.js'
const counter = useCounterStore()
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.33); /* Небольшое затемнение на фоне */
    z-index: 1000; /* Поверх всех окон */
    width: 100%;
    height: 100%;
    display: none; /* По умолчанию скрываем окно */
    justify-content: center;
    align-items: center;
    user-select: none;
    overflow-y: scroll;
}

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

/* Стили для вывода товара */
.popup__product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.popup__product-wrap {
    display: flex;
    align-items: center;
}

.popup__product-image {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: 10px;
}

.popup__product-title {
    max-width: 300px;
    font-weight: 500;
}

.popup__product-price {
    font-size: 18px;
    margin-right: 15px;
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

.popup--open {
    display: flex;
}
.card__price--count {
    font-weight: 200;
    font-size: 19px;
    color: #414141;
    display: flex;
    flex-wrap: wrap-reverse;
}

.card__price--count::before {
    content: "Осталось";
    font-weight: 100;
    font-size: 13px;
    color: #bfbfbf;
    margin-right: 3px;
}

.card__price--cost {
    font-weight: 400;
    font-size: 17px;
    color: #606060;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;

}
</style>