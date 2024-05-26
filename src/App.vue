<script setup>
import GreedCards from "./components/GreedCards.vue";
import Search from "./components/Search.vue";
import {computed, reactive} from "vue";
import {data} from "./components/LoadGoods.js";
import Menu from "./components/Menu.vue";
import ClientPerson from "./components/ClientPerson.vue";
import ClientAddress from "./components/ClientAddress.vue";
 computed(data)
const dataFiltered = reactive([... data]);
 const model = defineModel()
function DataFilteredFromSearch (n){
    dataFiltered.length=0
    dataFiltered.push(...n);
    console.log('parent: ' + dataFiltered.length)
}

</script>

<template>
  <Menu></Menu>
  <search :data  @data-filter="DataFilteredFromSearch"></search>
  <greed-cards :dataFiltered></greed-cards>

<!--  <HelloWorld msg="Vite + Vue" />-->
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
