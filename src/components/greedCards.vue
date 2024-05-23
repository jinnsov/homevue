<template>
  <!-- Сетка карточек товаров -->
        <!-- Карточка товара -->
<!--    <div class="cards">
        <div class="card"> <card/> </div>
    </div>-->
    <div v-for="item in items">
        <div>{{ item['id'] }}</div>
        <div>{{ item['title'] }}</div>
        <div>{{ item['price'] }}</div>
        <div>{{ item['description'] }}</div>
        <div>{{ item['category'] }}</div>
        <div>{{ item['image'] }}</div>
        <div>{{ item['rating'].rate }}</div>
        <div>{{ item['rating'].count }}</div>
    </div>
  }
</template>

<script setup>
import {reactive, ref} from "vue";
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