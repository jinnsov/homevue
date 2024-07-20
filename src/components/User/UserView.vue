<template>
  <pre>UserView</pre>
        <div class="button__group">
            <div class="button__group">
                <p>ФИО</p>
                <p>{{currentUser?.last}}</p>
                <p>{{currentUser?.first}}</p>
                <p>{{currentUser?.second}}</p>
                <p>{{currentUser?.birth}}</p>
            </div>
            <div class="button__group">
                <p>Адрес</p>
                <p>{{currentUser?.city}}</p>
                <p>{{currentUser?.street}}</p>
                <p>{{currentUser?.house}}</p>
                <p>{{currentUser?.flat}}</p>
            </div>
            <div class="button__group">
                <p>Электронная почта и пароль</p>
                <p>{{currentUser?.login}}</p>
                <p>{{currentUser?.password}}</p>
            </div>
            <div class="add-card">
                <button type="submit" class="button__add">Добавить</button>
                <button type="reset" class="button__add">Очистить</button>
            </div>
        </div>

</template>

<script setup>
import {useUser} from "@/stores/userStore.js";
const user = useUser();
const currentUser = user.getCurrentUser
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