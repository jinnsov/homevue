<template>
    <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ values }">
        <div class="button__group">
            <p>Добавить товар</p>
            <Field name="title" type="input" placeholder="Заголовок"></Field>
            <Field name="price" type="input" placeholder="Цена (0.00)"></Field>
            <Field name="description" type="input" placeholder="Описание"></Field>
            <Field name="category" type="input" placeholder="Категория"></Field>
            <Field name="image" type="input" placeholder="Изображение (URL)"></Field>
        </div>
        <div class="add-card">
            <button type="submit" class="button__add">Добавить</button>
            <button type="reset" class="button__add">Очистить</button>
        </div>
        <div v-for="item in schema">
            <ErrorMessage  :name="item.name" />
        </div>
        <Loading :is-posting="isPosting"></Loading>
        <pre>{{errorMessage}}</pre>
    </form>
</template>

<script setup>
// https://vee-validate.logaretm.com/v4/examples/checkboxes-and-radio/
import {Form, Field, ErrorMessage,} from "vee-validate"
import {ref} from "vue";
import {axiosPost} from "../utils/AxiosPost.js";
import Loading from "./Loading.vue";
const schema = {
    title: (value) => {
        if (value && value.trim().length) {
            return true;
        }
        return 'Не заполнено поле "Заголовок"';
    },
    price: (value) => {
        if (! value || value.trim().length === 0) {   return 'Не заполнено поле "Цена"';   }
        if (isNaN(Number(value))) {   return 'поле "Цена" длжно бысть числом';   }
        if (parseFloat(value) < 0) {   return '"Цена" не может быть отрицательнй ';   }
        return true
    },
    description: (value) => {
        if (value) {
            return true;
        }
        return 'Не заполнено поле "Описание"';
    },
    category: (value) => {
        if (value) {
            return true;
        }
        return 'Не заполнено поле "Категория"';
    },
    image: (value) => {
        if (!value) { return 'Не заполнено поле "Изображение"';}
        const  urlRegex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
        if (value.match(urlRegex) === null) return 'Не валидный URL'
        return true;
    },
};
const isPosting = ref(false)
const errorMessage = ref('')
async function onSubmit(values) {
    isPosting.value = true
    errorMessage.value = await axiosPost(values)
    isPosting.value = false
}
</script>

<style scoped>
* {box-sizing: border-box;}
form {
    position: relative;
    width: 300px;
    margin: 0 auto;
}
input[type="input"] {
    width: 100%;
    height: 42px;
    padding-left: 10px;
    border: 2px solid #7BA7AB;
    border-radius: 5px;
    outline: none;
    background: #F9F0DA;
    color: #9E9C9C;
}
.add-card {
    width: auto;
    min-height: 50px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row; /* Размещаем элементы в колонку */
    border: 1px solid #70c05b;
    padding: 15px 20px 10px;
    margin-right: auto;
}
.button__add {
    display: block;
    width: 100%;
    font-weight: 400;
    font-size: 17px;
    color: #70c05b;
    padding: 10px;
    text-align: center;
    border: 1px solid #70c05b;
    border-radius: 4px;
    cursor: pointer; /* Меняем курсор при наведении */
    transition: 0.2s;
    margin: 2px; /* Прижимаем кнопку к низу карточки */
}
.button__add:hover {
    border: 1px solid #ff6633;
    background-color: #ff6633;
    color: #fff;
}
.button__group {
    display: block;
    width: 100%;
    font-weight: 400;
    font-size: 17px;
    color: #70c05b;
    padding: 10px;
    text-align: center;
    border: 1px solid #70c05b;
    border-radius: 4px;
    cursor: pointer; /* Меняем курсор при наведении */
    margin-top: auto; /* Прижимаем кнопку к низу карточки */
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>