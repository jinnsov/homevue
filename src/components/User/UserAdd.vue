<template>
    <div v-if="isSubmit">
        <h2>Регистрация успешно завершена</h2>
        <router-link class="button__add" id="cart" :to="{name : 'cards'}">Ok</router-link>
    </div>
    <div v-else>
        <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ values }">
            <div class="button__group">
                <h2>Новый пользователь</h2>
                <div class="button__group">
                    <p>ФИО</p>
                    <Field name="last" type="input" style="'input'" placeholder="Фамилия"/>
                    <ErrorMessage  name="last" style="color: red"/>
                    <Field name="first" type="input" style="'input'" placeholder="Имя"/>
                    <ErrorMessage  name="first" style="color: red"/>
                    <Field name="second" type="input" style="'input'" placeholder="Отчество"/>
                    <ErrorMessage  name="second" style="color: red"/>
                    <Field name="birth" type="input" style="'input'"
                           :placeholder="'Дата рождения (' + new Date('2000/01/01').toLocaleDateString().split('T')[0] +')'" />
                    <ErrorMessage  name="birth" style="color: red"/>
                </div>
                <div class="button__group">
                    <p>Адрес</p>
                    <Field name="city" type="input" style="'input'" placeholder="Город"/>
                    <ErrorMessage  name="city" style="color: red"/>
                    <Field name="street" type="input" style="'input'" placeholder="Улица"/>
                    <ErrorMessage  name="street" style="color: red"/>
                    <Field name="house" type="input" style="'input'" placeholder="Дом"/>
                    <ErrorMessage  name="house" style="color: red"/>
                    <Field name="flat" type="input" style="'input'" placeholder="Квартира"/>
                    <ErrorMessage  name="flat" style="color: red"/>
                </div>
                <div>
                    <p>Согласие на обработку персональных данных</p>
                    <Field name="agreed" type="checkbox"></Field>
                    <p style="color: red"><ErrorMessage  name="agreed" class=""/></p>
                </div>
                <div class="button__group">
                    <p>Электронная почта и пароль</p>
                    <Field name="login" type="input" style="'input'" placeholder="login"/>
                    <ErrorMessage  name="login" style="color: red"/>
                    <Field name="password" type="input" style="'input'" placeholder="password"/>
                    <ErrorMessage  name="password" style="color: red"/>
                </div>
            </div>
            <div class="add-card">
                <button type="submit" class="button__add">Добавить</button>
                <button type="reset" class="button__add">Очистить</button>
            </div>
            <Loading :is-posting="isPosting"></Loading>
        </form>
    </div>


</template>

<script setup>
// https://vee-validate.logaretm.com/v4/examples/checkboxes-and-radio/
import {Form, Field, ErrorMessage,} from "vee-validate"
import Loading from "../Loading.vue";
import {ref} from "vue";
import {axiosPost} from "@/utils/AxiosPost.js";
import {useUser} from "@/stores/userStore.js";
const isPosting = ref(false)
const isSubmit = ref(false)
const message = ref('')
const schema = {
    last: (value) => {
        if (value && value.trim().length) {
            return true;
        }
        return 'Не заполнено поле "Фамилия"';
    },
    first: (value) => {
        if (value && value.trim().length) {
            return true;
        }
        return 'Не заполнено поле "Имя"';
    },
    second: (value) => {
        if (value) {
            return true;
        }
        return 'Не заполнено поле "Отчество"';
    },
    birth: (value) => {
        const dateReg = /^\d{2}[.-]\d{2}[.-]\d{4}$/
        if (! value ) return 'Введите дату рождения';
        if ( value.match(dateReg) === null) return 'Неправильный формат даты';
        const dateYearDiff = new Date().getFullYear() - new Date(value).getFullYear()
        if ( dateYearDiff < 0) return 'Год рждения больше текущего';
        return true
    },
    agreed: (value) => {
        if (!value) {
            return true;
        }
        return 'Подтвердите согласие на обработку персональных данных';
    },
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
    login: (value) => {
        if (value && value.trim().length) {
            if ( useUser().getUserLogin === value){
                return 'Такой логин уже занят'
            }
            return true
        }
        return 'Не заполнено поле "Логин"';
    },
    password: (value) => {
        if (value && value.trim().length) {
            return true;
        }
        return 'Не заполнено поле "Пароль"';
    },
};
async function onSubmit(values) {
    isPosting.value = true
    console.log('!')
    useUser().addPerson(values)
    message.value = await axiosPost(values)
    isPosting.value = false
    isSubmit.value = true
    //console.log(useUser().getCurrentUser());
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