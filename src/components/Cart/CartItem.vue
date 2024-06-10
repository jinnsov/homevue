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
import {useMyStore} from '../../stores/productStore.js'
const counter = useMyStore()

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
/* Элементы окна (заголовок, список товаров, вывод стоимости) */
.popup__item {
    border-bottom: 1px solid #ddd;
    padding: 20px;
}

.popup__item:last-of-type {
    border-bottom: none;
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