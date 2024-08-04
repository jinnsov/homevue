import { describe, expect, it, vi } from 'vitest'
import {mount} from "@vue/test-utils";
import AuthorizationForm from "../components/Admin/AuthorizationForm.vue";
import {createTestingPinia} from "@pinia/testing";
vi.mock('vue-router', () => ({
    resolve: vi.fn(),
}));
let url = ''
let body = {}
let mockError = false
vi.mock("axios", () => ({
    post: (_url, _body) => {
        return new Promise((resolve) => {
            if (mockError)
                throw Error("Mock error")
            url = _url
            body = _body
            resolve(true)
        })
    }
}))
const wrapper = mount(AuthorizationForm, {
    global: {
        plugins: [
            createTestingPinia({
                createSpy: vi.fn,
            }),
        ],
        stubs: ["router-link"]
    },
})
describe('AuthorizationForm object', () => {
    it('imports without error', () => {
        expect(typeof wrapper).toBe('object');
    });
    it('include text "Добавить"', () => {
        expect( wrapper.text()).toContain('Добавить')
    });
    it('include text "Очистить"', () => {
        expect( wrapper.text()).toContain('Очистить')
    });
});