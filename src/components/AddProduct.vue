<template>
    <input name="title" type="text" placeholder="Заголовок" v-model="inputText">
    <input name="price" type="text" placeholder="Цена" v-model="inputText">
    <input name="description" type="text" placeholder="Описание" v-model="inputText">
    <input name="category" type="text" placeholder="Категория" v-model="inputText">
    <input name="image" type="text" placeholder="Изображение" v-model="inputText">
</template>

<script setup>
const inputText = defineModel()
function test(){}
</script>

<style scoped>
* {box-sizing: border-box;}
form {
    position: relative;
    width: 300px;
    margin: 0 auto;
}
input {
    width: 100%;
    height: 42px;
    padding-left: 10px;
    border: 2px solid #7BA7AB;
    border-radius: 5px;
    outline: none;
    background: #F9F0DA;
    color: #9E9C9C;
}
button {
    position: absolute;
    top: 0;
    right: 1px;
    width: 42px;
    height: 42px;
    border: none;
    background: #7BA7AB;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}
button:before {
    content: "\1F50D";
//font-family: FontAwesome,serif;
    font-size: 16px;
    color: #F9F0DA;
    position: relative;
}
</style>