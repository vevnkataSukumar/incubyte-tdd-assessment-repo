import {sum} from './sum';

describe('Sum Function', () => {
    test('should return undefined if value is not astring', () => {
        expect(sum(1)).toBe(undefined);
    });
    test('add numbers in string and retun result', () => {
        expect(sum('')).toBe(0);
    });
});


