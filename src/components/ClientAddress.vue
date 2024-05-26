<template>
    <input type="text" placeholder="Город" v-model="inputText">
    <input type="text" placeholder="Улица" v-model="inputText">
    <input type="text" placeholder="Дом" v-model="inputText">
    <input type="text" placeholder="Квартира" v-model="inputText">
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