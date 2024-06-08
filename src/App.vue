<script setup>
import Menu from "./components/Menu.vue";
import Cart from "./components/Cart.vue";
</script>

<template>
    <div class="page">
        <cart></cart>
        <Menu class="menu"></Menu>
        <router-view></router-view>
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

.menu {
    border: 1px solid #70c05b;
    background: #f9f9f9;
}

.content {
    justify-self: stretch;
}
</style>
