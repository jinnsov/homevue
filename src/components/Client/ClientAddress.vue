<template>
    <div id="app">
        <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ values }">
            <div class="button__group">
                <p>Адрес доставки</p>
                <Field name="city" type="input" style="'input'" placeholder="Город"/>
                <Field name="street" type="input" style="'input'" placeholder="Улица"/>
                <Field name="house" type="input" style="'input'" placeholder="Дом"/>
                <Field name="flat" type="input" style="'input'" placeholder="Квартира"/>
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
        </Form>
    </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from "vee-validate"
import {ref} from "vue";
import {axiosPost} from "../../utils/AxiosPost.js";
import Loading from "../Loading.vue";
const isPosting = ref(false)
const errorMessage = ref('')
const schema = {
    city: (value) => {
        if (value && value.trim().length) {
            return true;
        }
        return 'Не заполнено поле "Город"';
    },
    street: (value) => {
        if (value && value.trim().length) {
            return true;
        }
        return 'Не заполнено поле "Улица"';
    },
    house: (value) => {
        if (value && value.trim().length) {
            return true;
        }
        return 'Не заполнено поле "Дом"';
    },
    flat: (value) => {
        if (value && value.trim().length) {
            return true;
        }
        return 'Не заполнено поле "Квартира"';
    },
};
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
.card__label {
    padding: 4px 8px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: #ff6633;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
}
</style>