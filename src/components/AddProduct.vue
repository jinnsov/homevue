<template>
    <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ values }">
        <div class="button__group">
            <p>Добавить товар</p>
            <Field name="title" type="input" placeholder="Заголовок"></Field>
            <Field name="price" type="input" placeholder="Цена"></Field>
            <Field name="description" type="input" placeholder="Описание"></Field>
            <Field name="category" type="input" placeholder="Категория"></Field>
            <Field name="image" type="input" placeholder="Изображение"></Field>
        </div>
        <div class="add-card">
            <button type="submit" class="button__add">Добавить</button>
            <button type="reset" class="button__add">Очистить</button>
        </div>
        <div>
            <ErrorMessage  name="title" />
            <ErrorMessage  name="price" />
            <ErrorMessage  name="description" />
            <ErrorMessage  name="category" />
            <ErrorMessage  name="image" />
        </div>
<!--            <p>Values</p>
            <pre>{{ values }}</pre>-->
        <pre class="agreed">{{isPostComplete ? 'Загрузка...' : '' }}</pre>
        <pre style="color: red">{{postStatusError}}</pre>
    </form>
</template>

<script setup>
// https://vee-validate.logaretm.com/v4/examples/checkboxes-and-radio/
import {Form, Field, ErrorMessage,} from "vee-validate"
import axios from 'axios'
import {ref} from "vue";
const schema = {
    title: (value) => {
        if (value && value.trim().length) {
            return true;
        }
        return 'Не заполнено поле "Заголовок"';
    },
    price: (value) => {
        if (value && value.trim().length) {
            return true;
        }
        return 'Не заполнено поле "Цена"';
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
        if (value) {
            return true;
        }
        return 'Не заполнено поле "Изображение"';
    },
};
function onSubmit(values) {
    //alert(values.birth)
    ///console.log(JSON.stringify(values, null, 2));
    axiosPost()
}
const isPostComplete = ref(false)
const postStatusError = ref(undefined)
function axiosPost(values){
    isPostComplete.value = true
    axios.post('https://httpbin.org/post', {values}).then((response) => {
        // handle response
        // console.log('response: '  + JSON.stringify(response.data, null, 2))
        isPostComplete.value = false
        postStatusError.value = undefined
    }).catch((reject) => {
        postStatusError.value = reject.message
        console.error(reject.message)

    })

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