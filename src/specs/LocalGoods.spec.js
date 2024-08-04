import {goodsValues} from "../utils/LocalGoods.js";
import { describe, expect, it } from 'vitest';
describe('goodsValues object', () => {
    it('imports without error', () => {
        expect(typeof goodsValues).toBe('object');
    });
    it('goodsValues length > 0', () => {
        expect(goodsValues.length > 0).toBe(true)
    });
});