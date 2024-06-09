<template>
    <div class="goods-section">
        <search :data="goodsValues"  @data-filter="DataFilteredFromSearch" />
        <div class="cards">
            <div v-for="item in dataFiltered" :key="item.id">
                <card :item = "item"></card>
            </div>
        </div>
    </div>
</template>

<script setup>
import Card from "./Card.vue";
import Search from "./Search.vue";

import {reactive, ref} from "vue";
import {goodsValues} from "../utils/LocalGoods.js";
import Cart from "./Cart/CartButton.vue";
const dataFiltered = reactive([... goodsValues]);
function DataFilteredFromSearch (n){
    dataFiltered.length=0
    dataFiltered.push(...n);
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