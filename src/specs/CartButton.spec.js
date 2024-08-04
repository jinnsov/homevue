import { describe, expect, it, vi } from 'vitest'
import {mount} from "@vue/test-utils";
import CartButton from "../components/Cart/CartButton.vue";
import { createTestingPinia } from '@pinia/testing'
const wrapper = mount(CartButton, {
    global: {
        plugins: [
            createTestingPinia({
                createSpy: vi.fn,
            }),
        ],
        stubs: ["router-link"],
    },
})
    describe('CartButton object', () => {
        it('imports without error', () => {
            expect(typeof wrapper).toBe('object');
        });
        it('include attributes', () => {
            expect(wrapper.attributes('id')).toBe('cart')
        });
    });