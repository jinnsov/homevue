<template xmlns="http://www.w3.org/1999/html">
  <div class="card">
      <div class="button__group">
          <h2>Учётная запись</h2>
          <div class="button__group" v-if="!usersStore.isLogin">
              <router-link class="button__add" :to="{name : 'login'}">Вход</router-link>
              <router-link class="button__add" :to="{name : 'useradd'}">Регистрация</router-link>
          </div>
          <div v-else>
              <div class="button__group">
                  <p>Выполнен вход в аккаунт</p>
                  <h3 style="color: darkblue">{{ usersStore.getUserLogin }}</h3>
                  <router-link class="button__add " :to="{name : 'userview'}">Просмотр</router-link>
                  <router-link class="button__add" @click="leaveAccount" :to="{name : 'user'}">Выйти</router-link>
              </div>
                  <router-link class="button__add" :to="{name : 'cards'}">Ok</router-link>
          </div>
      </div>
  </div>


</template>

<script setup>
import { onMounted, ref} from "vue";
import {useUser} from "@/stores/userStore.js";
const usersStore = useUser();
const isLogin = ref (false)

onMounted(() => {
    isLogin.value = usersStore.isLogin
})
function leaveAccount(){
    isLogin.value = useUser().logout()
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