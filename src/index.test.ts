import { describe, it, expect } from 'vitest';
import { main } from './index';

describe('index', () => {
    it('main, called, exit code should be 0', async () => {
        const date = new Date("2023-05-28");

        const exitCode = await main({
            date: date
        });

        expect(exitCode).toBe(0);
    });
});