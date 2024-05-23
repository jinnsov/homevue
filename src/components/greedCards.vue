<template>
        <div class="cards">
            <div v-for="item of items" key="id">
            <card
                :price = "item.price"
                :title = "item.title"
                :image = "item.image"
                :rating = "item.rating"
                :description="item.description"
            ></card>
        </div>
    </div>

</template>

<script setup>
import {reactive} from "vue";
import Card from "./card.vue";
import {goodsValues} from "./GoodsValues.js";
const items = reactive(goodsValues)
</script>

<style scoped>
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