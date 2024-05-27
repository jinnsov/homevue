<script setup>
import Menu from "./components/Menu.vue";
import {ref} from "vue";
import GreedCards from "./components/GreedCards.vue";
import ClientPerson from "./components/ClientPerson.vue";
import ClientAddress from "./components/ClientAddress.vue";
import AddProduct from "./components/AddProduct.vue";

const sections = [GreedCards, AddProduct, ClientAddress, ClientPerson ]
let selectedComponent = ref(GreedCards)

function SelectedMethod (n){
    selectedComponent.value = sections[n]
}
</script>

<template>
    <div class="page">
        <Menu @section-click="SelectedMethod" class="menu"></Menu>
        <component :is="selectedComponent" class="content"></component>
    </div>
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
html, body {
margin: 0;
    padding: 0;
}

.page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.menu {}

.content {
    justify-self: stretch;
}
</style>
