<template>
    <!-- Карточка товара -->
    <div class="card" :id="id">
        <!-- Верхняя часть -->
        <div class="card__description">{{description}}</div>
        <div class="card__top">
            <!-- Изображение-ссылка товара -->
            <a href="#" class="card__image">
                <img :src="image" :alt="category" />
            </a>
            <!-- Рэйтинг на товар -->
            <div class="card__label">{{rating.rate}}</div>
        </div>
        <!-- Нижняя часть -->
        <div class="menu__bottom">
            <!-- Цены на товар (с учетом скидки и без)-->
            <div class="card__prices">
                <div class="card__price card__price--cost">{{price}}</div>
                <div class="card__price card__price--count">{{rating.count}}</div>
            </div>
            <!-- Ссылка-название товара -->
            <a href="#" class="card__title">
                {{title}}
            </a>
            <!-- Кнопка добавить в корзину -->
            <button class="button__add" @click="btn(id)">В корзину</button>
        </div>
    </div>
</template>

<script setup>
const emits =defineEmits(['product-click'])
function btn (id) {  emits( 'product-click',id) }

/*const data = defineProps({
    data: {
        type: Object,
        default() {
            return {
                id: 0,
                title: 'заголовок',
                price: 500,
                description: 'пусто',
                category:'нет',
                image:'нет',
                rating: {
                    rate:0,
                    count:0
                }
            }
        }
    },
});*/
defineProps(
    {id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: Object ,default:{
            rating: {
                rate:0,
                count:0
            }
        }
    },
)
</script>

<style scoped>
.card {
    width: 225px;
    min-height: 350px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column; /* Размещаем элементы в колонку */
    border-radius: 4px;
    transition: 0.2s;
    position: relative;
}

/* При наведении на карточку - меняем цвет тени */
.card:hover {
    box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.2);
}

.card__top {
    flex: 0 0 220px; /* Задаем высоту 220px, запрещаем расширение и сужение по высоте */
    position: relative;
    overflow: hidden; /* Скрываем, что выходит за пределы */
}

/* Контейнер для картинки */
.card__image {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

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

/* Размещаем скидку на товар относительно изображения */
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
}.card__description {
    background: #ffffff;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    color: #151414;
}

.menu__bottom {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto; /* Занимаем всю оставшуюся высоту карточки */
    padding: 10px;
}

.card__prices {
    display: flex;
    margin-bottom: 10px;
    padding: 10px;

    flex: 0 0 50%; /* Размещаем цены равномерно в две колонки */
}

.card__price::after {
    margin-left: 4px;
    position: relative;
}

.card__price--count {
    font-weight: 200;
    font-size: 19px;
    color: #414141;
    display: flex;
    flex-wrap: wrap-reverse;
}

.card__price--count::before {
    content: "Осталось";
    font-weight: 100;
    font-size: 13px;
    color: #bfbfbf;
    margin-right: 3px;
}

.card__price--cost {
    font-weight: 400;
    font-size: 17px;
    color: #606060;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;

}

.card__price--cost::before {
    content: "Цена";
    font-weight: 200;
    font-size: 13px;
    color: #bfbfbf;
    margin-right: 3px;
}.card__price--cost::after {
     content: "₽";
     margin-right: 5px;
}

.card__title {
    display: block;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 17px;
    line-height: 150%;
    color: #414141;
}

.card__title:hover {
    color: #ff6633;
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
    margin-top: auto; /* Прижимаем кнопку к низу карточки */
}

.button__add:hover {
    border: 1px solid #ff6633;
    background-color: #ff6633;
    color: #fff;
}
</style>