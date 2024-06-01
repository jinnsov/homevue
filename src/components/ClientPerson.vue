<template>
    <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ values }">
        <div class="button__group">
            <p>Персональные данные получателя</p>
            <Field name="last" type="input" style="'input'" placeholder="Фамилия"/>
            <ErrorMessage  name="last" style="color: red"/>
            <Field name="first" type="input" style="'input'" placeholder="Имя"/>
            <ErrorMessage  name="first" style="color: red"/>
            <Field name="second" type="input" style="'input'" placeholder="Отчество"/>
            <ErrorMessage  name="second" style="color: red"/>
            <Field name="birth" type="input" style="'input'"
                   :placeholder="'Дата рождения (' + new Date('2000/01/01').toLocaleDateString().split('T')[0] +')'" />
            <ErrorMessage  name="birth" style="color: red"/>
        <div class="button__group">
            <p>Реквизиты банковской карты</p>
            <Field name="num" type="input" style="'input'" placeholder="Номер (0000-0000-0000-0000)"/>
            <ErrorMessage  name="num"  style="color: red"/>
            <Field name="cvv" type="input" style="'input'" placeholder="CVV (000)"/>
            <ErrorMessage  name="cvv"  style="color: red"/>
        </div>
            <div>
                <p>Согласие на обработку персональных данных</p>
                <Field name="agreed" type="checkbox"></Field>
                <p style="color: red"><ErrorMessage  name="agreed" class=""/></p>
            </div>
        </div>
        <div class="add-card">
                <button type="submit" class="button__add">Добавить</button>
                <button type="reset" class="button__add">Очистить</button>
        </div>
<!--                    <p>Values</p>
            <pre>{{ values }}</pre>-->
        <Loading :is-posting="isPosting"></Loading>
        <pre>{{errorMessage}}</pre>
    </form>

</template>

<script setup>
// https://vee-validate.logaretm.com/v4/examples/checkboxes-and-radio/
import {Form, Field, ErrorMessage,} from "vee-validate"
import Loading from "./Loading.vue";
import {ref} from "vue";
import {axiosPost} from "../utils/AxiosPost.js";
const isPosting = ref(false)
const errorMessage = ref('')
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
    num: (value) => {
        if (! value) {
            return 'Введите номер карты';
        }
        if(value
            .replace(/\D/g , '')
            .match(/^\d{16}$/)){return true}

            return 'Неправильный номер карты'
    },
    cvv: (value) => {
        if (! value) {
            return 'Введите cvv-код карты';
        }
        if(value
            .match(/^\d{3}$/)){return true}
            return 'Не правильный cvv-код карты'
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
.agreed {
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    display: block;
    border: 1px solid #70c05b;
    padding: 10px 10px 10px;
    height: 40px ;
}
</style>