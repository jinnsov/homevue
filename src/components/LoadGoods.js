
// GET request using fetch with async/await
import {goodsValues} from "./LocalGoods.js";
let ret = null
try {
    const response = await fetch('https://fakestoreapi.com/products');
    ret = await response.json();
} catch (e) {
    console.error(e)
}

// есди АПИ не доступен - взять  локальные данные:
const data =  ret ? ret : goodsValues
export { data }