import {axiosPost} from "../utils/AxiosPost.js"
import { describe, expect, it, vi } from 'vitest'

vi.mock('axios', () => {
    return {
        default: {
            post: vi.fn(),
            get: vi.fn(),
            delete: vi.fn(),
            put: vi.fn(),
            create: vi.fn().mockReturnThis(),
            interceptors: {
                request: {
                    use: vi.fn(),
                    eject: vi.fn(),
                },
                response: {
                    use: vi.fn(),
                    eject: vi.fn(),
                },
            },
        },
    };
});

describe("authenticate", () => {
    it('imports without error', () => {
        expect(typeof axiosPost).toBe('function');
    });
})