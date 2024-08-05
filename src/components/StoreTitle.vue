<template>
    <router-link class="card__image" :to="{name : 'cards'}"><h1>Интернет - магазин "OTUS"</h1></router-link>
</template>

<script setup>
const emits =defineEmits(['section-click'])
import   {useMyStore} from '@/stores/cartStore.js'
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
</style>