<template>
    <div v-if="isSubmit">
        <h2>Выполнен вход в аккаунт</h2>
        <router-link class="button__add" id="cart" :to="{name : 'cards'}">Ok</router-link>
    </div>
    <div v-else>
        <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ values }">
            <div class="button__group">
                <h2>Авторизация</h2>
                <Field name="login" type="input" style="'input'" placeholder="login" v-model="login" />
                <Field name="password" type="input" style="'input'" placeholder="password"/>
            </div>
            <div class="add-card">
                <button id="login" type="submit" class="button__add">Добавить</button>
                <button type="reset" class="button__add">Очистить</button>
            </div>
            <div v-for="item in schema">
                <ErrorMessage  :name="item.name" />
            </div>
            <Loading :is-posting="isPosting"></Loading>
        </Form>
    </div>

</template>

<script setup>
import   {useUser} from '@/stores/userStore.js'
const store = useUser()
import {Form, Field, ErrorMessage} from "vee-validate"
import {ref} from "vue";
import {axiosPost} from "@/utils/AxiosPost.js";
import Loading from "../Loading.vue";
const isPosting = ref(false)
const isSubmit = ref(false)
const isFoundLogin = ref(false)
const login = ref(store.getUserLogin)
const message = ref('')
const schema = {
    login: (value) => {
        isFoundLogin.value = false
        if (value && value.trim().length) {
            if ( useUser().getUserLogin !== value){
                return 'Неправильное имя пользователя'
            }
            isFoundLogin.value = true
            return true
        }
        return 'Не заполнено поле "Логин"';
    },
    password: (value) => {
        if (value && value.trim().length) {
            if ( useUser().getUserPassword !== value && isFoundLogin.value === true){
                return 'Пароль не верный!'
            }
            return true
        }
        return 'Не заполнено поле "Пароль"';
    },
};

async function onSubmit(values) {
    isPosting.value = true
    message.value = (await axiosPost(values)).data
    store.authorize()
    isSubmit.value = true
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
</style>