<template>
    <div class="card__prices">
        <router-link class="button__add" :to="{name : 'cards'}">Товары</router-link>
        <router-link class="button__add" :to="{name : 'product'}" v-if="store.login">Добавить товар</router-link>
        <router-link class="button__add" :to="{name : 'address'}">Адрес доставки</router-link>
        <router-link class="button__add" :to="{name : 'contacts'}">Получатель</router-link>
    </div>
</template>

<script setup>
const emits =defineEmits(['section-click'])
import   {useMyStore} from '@/stores/productStore.js'
const store = useMyStore()
function btn (n){  emits( 'section-click',n) }
</script>

<style scoped>
.card__image > img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Встраиваем картинку в контейнер card__image */
    transition: 0.2s;
}

/* При наведении - увеличиваем картинку */
.card__image:hover > img {
    transform: scale(1.1);
}
.card__prices {
    display: flex;
    margin-bottom: 10px;
    padding: 10px;

    flex: 0 0 50%; /* Размещаем цены равномерно в две колонки */
}
.button__add {
    display: block;
    width: 100%;
    font-weight: 400;
    font-size: 17px;
    color: #70c05b;
    padding: 10px 20px;
    text-align: center;
    border: 1px solid #70c05b;
    border-radius: 4px;
    cursor: pointer; /* Меняем курсор при наведении */
    transition: 0.2s;
    white-space: nowrap;
    margin: 3px;
}

.button__add:hover {
    border: 1px solid #ff6633;
    background-color: #ff6633;
    color: #fff;
}.button__add:focus {
    border: 1px solid rgba(255, 102, 51, 0.99);
    background-color: #ff6633;
    color: #fff;
}
</style>