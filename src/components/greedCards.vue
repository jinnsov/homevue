<template>
    <div v-for="item in items">
        <div>{{ item['id'] }}</div>
        <div><card/></div>
    </div>

</template>

<script setup>
import {reactive} from "vue";
import card from "./card.vue";
  const goods = []
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        goods.push(... data);
    });
console.log(goods)
const items = reactive(goods)
</script>

<style scoped>
.cards {
    display: grid;
    /* Автоматически заполняем на всю ширину grid-контейнера */
    grid-template-columns: repeat(auto-fill, 225px);
    width: 100%;
    max-width: 1000px; /* Ширина grid-контейнера */
    justify-content: center;
    justify-items: center; /* Размещаем карточку по центру */
    column-gap: 30px; /* Отступ между колонками */
    row-gap: 40px; /* Отступ между рядами */
    margin: 0 auto;
}
</style>