<template xmlns="http://www.w3.org/1999/html">
  <h1>UserForm</h1>
  <div class="card">
      <div>
          <div class="button__group" v-if="isLogin === false">
              <router-link class="button__add" id="cart" :to="{name : 'login'}">Вход</router-link>
              <router-link class="button__add" id="cart" :to="{name : 'useradd'}">Регистрация</router-link>
          </div>
          <div v-else>
              <router-link class="button__add" id="cart" :to="{name : 'userview'}">Просмотр</router-link>
              <div class="button__group">
                  <p>Выполнен вход в аккаунт</p>
                  <h3 style="color: darkblue">{{ user.getUserLogin }}</h3>
                  <button class="button__add" @click="removeLocalStorageContent">Выйти</button>
              </div>
          </div>
      </div>
      <div>
          <h1>{{ isLogin === undefined }}</h1>
      </div>
  </div>


</template>

<script setup>
import {onMounted, ref} from "vue";
import {useUser} from "@/stores/userStore.js";
const user = useUser();
const localStorageValue = ref('')
const isLogin = ref (user.getIsLogin)
onMounted(() => {
    showLocalStorageContent()
})

const showLocalStorageContent = () => {
    localStorageValue.value = localStorage.getItem('userLogin')
}
const removeLocalStorageContent = () => {
    localStorage.removeItem('userLogin')
    localStorageValue.value = undefined
    //user.setUserLogin('')
    isLogin.value = undefined
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
</style>