<template>
    <div class="popup__item" id="popup_product_list">
        <div class="popup__product" v-for="item in new Set(counter.cards)" :key="item.id">
            <div class="popup__product-wrap">
                <img
                        :src="item.image"
                        :alt="item.categories"
                        class="popup__product-image"
                />
                <!-- Ссылка-название товара -->
                <router-link class="card__title"  @click="select(item)" :to="{name : 'prod'}">{{item['title']}}</router-link>
            </div>
            <div class="popup__product-wrap">
                <div class="popup__product-price">{{ `${item.price}₽` }}</div>

                <div class="popup__product-price">{{ item.inCartCount }}</div>
                <button type="submit" class="popup__product-delete" @click="addItem(item)">+</button>
                <button type="submit" class="popup__product-delete" @click="deleteItem(item)">-</button>
            </div>
        </div>
    </div>

</template>

<script setup>
import {useCounterStore} from '../../stores/productStore.js'
const counter = useCounterStore()

function deleteItem (item) {
    counter.removeCard(item)
}
function addItem (item) {
    counter.addCard(item)
}
function select (item) {
    counter.selectCard(item)
    //$router.push({ path: '/prod' })
}
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
    margin: 15px;
}

/* Стили для кнопки удаления товара */
.popup__product-delete {
    font-size: 12px;
    padding: 5px;
    margin: 2px;
    cursor: pointer;
    color: #d62240;
    background: bisque;
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
.card__title {
    display: block;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 17px;
    line-height: 150%;
    color: #414141;
}
.card__title:hover {
    color: #ff6633;
}
</style>