<template>
    <div class="">
        <div class="popup__container" id="popup_container">
            <div class="popup__item">
                <h1 class="popup__title">Оформление заказа</h1>
            </div>
            <div class="popup__item" id="popup_product_list">
                <div class="popup__product">
                    <div class="popup__product-wrap">
                        <img
                                src="../images/iphone-14-pro-max-gold.png"
                                alt="Apple IPhone 14 Pro Max 256Gb"
                                class="popup__product-image"
                        />
                        <h2 class="popup__product-title">
                            Смартфон Apple IPhone 14 Pro Max 256Gb, золотой
                        </h2>
                    </div>
                    <div class="popup__product-wrap">
                        <div class="popup__product-price">135000</div>
                        <button class="popup__product-delete">✖</button>
                    </div>
                </div>
            </div>
            <div class="popup__item">
                <div class="popup__cost">
                    <h2 class="popup__cost-title">Итого</h2>
                    <output class="popup__cost-value" id="popup_cost">150000</output>
                </div>
                <div class="popup__cost">
                    <h2 class="popup__cost-title">Скидка</h2>
                    <output class="popup__cost-value" id="popup_discount">15000</output>
                </div>
                <div class="popup__cost">
                    <h2 class="popup__cost-title">Итого со скидкой</h2>
                    <output class="popup__cost-value" id="popup_cost_discount"
                    >135000</output
                    >
                </div>
            </div>
            <button class="popup__close" id="popup_close">✖</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.33); /* Небольшое затемнение на фоне */
    z-index: 1000; /* Поверх всех окон */
    width: 100%;
    height: 100%;
    display: none; /* По умолчанию скрываем окно */
    justify-content: center;
    align-items: center;
    user-select: none;
    overflow-y: scroll;
}

/* Стилизация контейнера окна */
.popup__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Распределяем элементы внутри равномерно */
    width: 100%;
    max-width: 800px;
    min-height: 300px;
    background-color: #fff;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position: relative;
}

/* Элементы окна (заголовок, список товаров, вывод стоимости) */
.popup__item {
    border-bottom: 1px solid #ddd;
    padding: 20px;
}

.popup__item:last-of-type {
    border-bottom: none;
}

.popup__title {
    font-size: 20px;
}

/* Стили для вывода товара */
.popup__product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.popup__product-wrap {
    display: flex;
    align-items: center;
}

.popup__product-image {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: 10px;
}

.popup__product-title {
    max-width: 300px;
    font-weight: 500;
}

.popup__product-price {
    font-size: 18px;
    margin-right: 15px;
}

/* Стили для кнопки удаления товара */
.popup__product-delete {
    font-size: 12px;
    padding: 5px;
    cursor: pointer;
    color: #d62240;
}

/* Стили для вывода стоимости товаров */
.popup__cost {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 5px;
}

.popup__cost-title {
    margin-right: 15px;
    font-size: 20px;
    color: #364364;
    text-align: right;
}

.popup__cost-value {
    font-size: 20px;
}

/* Стили для кнопки закрытия окна */
.popup__close {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    padding: 20px;
    color: rgba(54, 67, 100, 0.7);
    font-size: 20px;
}

.popup__close:hover {
    color: rgb(54, 67, 100);
}

.popup--open {
    display: flex;
}
</style>