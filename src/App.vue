<script setup>
import HelloWorld from './components/HelloWorld.vue';
import { reactive } from "vue";
import {goodsValues} from "./components/GoodsValues.js";
import Card from "./components/card.vue";
const items = reactive(goodsValues)
console.log(items)

</script>

<template>
    <hello-world :msg="'Список товаров'"></hello-world>
    <div v-for="item of items" key="id">
<!--        <div>{{ item.id }}</div>-->
        <div><card
                :price = "item.price"
                :title = "item.title"
                :image = "item.image"
                :rating = "item.rating"
        ></card></div>

    </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
