import { describe, expect, it } from 'vitest';
import Search from '@/components/Search.vue'

describe('search object', () => {
    it('imports without error', () => {
        expect(typeof Search).toBe('object');
    });
});