import { describe, expect, it, vi } from 'vitest'
import {mount} from "@vue/test-utils";
import Card from "@/components/Card.vue";
import { createTestingPinia } from '@pinia/testing'
// import any store you want to interact with in tests
import { useMyStore } from '../stores/productStore.js'
// you need to mock router
vi.mock('vue-router', () => ({
    resolve: vi.fn(),
}));

const wrapper = mount(Card, {
    global: {
        plugins: [
            createTestingPinia({
                createSpy: vi.fn,
            }),
        ],
        stubs: ["router-link"]
    },
    propsData: {
        item: {
            id: 1,
            title: 'String',
            price: 10,
            description: 'String',
            category: 'String',
            image: 'String',
            rating: Object, default: {
                rating: {
                    rate: 15,
                    count: 150
                }
            }
        }
    }
})
const store = useMyStore()
describe('Компонент Card', () => {
    it('Импорт компонента Card без ошибок', () => {
        expect(typeof wrapper).toBe('object');
    });
    it('Наличие текста', () => {
        expect( wrapper.text()).toContain('Добавить в корзину')
    });
    it(' Наличие кнопки ', () => {
        const button = wrapper.find('button__add')
        button.trigger('click')
        expect( typeof(button)).toBe('object')
    });
    it("Наличие пропсов в компоненте",  () => {
        expect(typeof (Card.props)).toBe('object')
    });
    it(' Расчет суммы в корзине, с изменениями количества товара ', () => {
        const item = wrapper.props('item')
        // добавить в корзину:
        store.cards.push(item)
        store.cards.push({price: 25})
        store.cards.push({price: 65})
        // Количество товаров в корзине:
        expect( store.cardsCount).toBe(3)
        // Расчет стоимости:
        expect( store.sum).toBe(100)
        //expect(store.sum).toHaveBeenCalledTimes(1)
       // expect(store.sum).toHaveBeenLastCalledWith()
    });
});