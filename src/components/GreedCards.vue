<template>
    <cart :data="select"></cart>
    <div class="goods-section">
        <search :data="goodsValues"  @data-filter="DataFilteredFromSearch" />
        <div class="cards">
            <div v-for="item in dataFiltered" :key="item.id">
                <card @product-click="selected"
                        :id = "item.id"
                        :price = "item.price"
                        :title = "item.title"
                        :image = "item.image"
                        :rating = "item.rating"
                        :description="item.description"
                ></card>
            </div>
        </div>
    </div>
</template>

<script setup>
import Card from "./Card.vue";
import Search from "./Search.vue";

import {reactive, ref} from "vue";
import {goodsValues} from "../utils/LocalGoods.js";
import Cart from "./Cart.vue";
const dataFiltered = reactive([... goodsValues]);
const select = ref(0);
function selected(value){
    console.log('selected' + value);
    select.value = value;
}
function DataFilteredFromSearch (n){
    dataFiltered.length=0
    dataFiltered.push(...n);
    //console.log('parent: ' + dataFiltered.length)
}
</script>

<style scoped>
.goods-section {
    display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.cards {
    display: grid;
    /* Автоматически заполняем на всю ширину grid-контейнера */
    grid-template-columns: repeat(auto-fill, 225px);
    width: 100%;
    max-width: 800px; /* Ширина grid-контейнера */
    justify-content: center;
    justify-items: center; /* Размещаем карточку по центру */
    column-gap: 30px; /* Отступ между колонками */
    row-gap: 40px; /* Отступ между рядами */
    margin: 0 auto;
}
</style>