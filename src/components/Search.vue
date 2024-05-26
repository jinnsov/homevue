<template>
    <form>
        <input type="text" placeholder="Искать здесь..." v-model="inputText">
        <button type="button"
                @click="filters"
        ></button>
        <slot name="search" :search="filters"></slot>
    </form>
</template>

<script setup>
import {ref} from "vue";
const inputText = defineModel()
const emit = defineEmits(['test-val', 'data-filter'])
const props = defineProps({data:Object})
function filters() {
    //фильтрация списка товаров, пустое поле - все товары
    const seek = inputText.value !== ''
    ? props.data.filter(f =>
                f.price === Number(inputText.value)
                ||
                f.title.toLowerCase().trim() === inputText.value.toLowerCase().trim()
                )
    :props.data;

    emit('data-filter', seek)
    console.log('emit.child.filters:' + seek.length);
}
function updateValue() {
    emit('test-val','emit value' )
    console.log('emit.name');
}

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