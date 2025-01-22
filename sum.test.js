import {sum} from './sum';

describe('Sum Function', () => {
    test('should return undefined if value is not astring', () => {
        expect(sum(1)).toBe(undefined);
    });
    test('add numbers in string and retun result', () => {
        expect(sum('')).toBe(0);
    });

    test('add numbers in string with 1 number in it should retun as 1', () => {
        expect(sum('1')).toBe(1);
    });

    test('add numbers in string with numbers 2,5 and retun result as 7', () => {
        expect(sum('2,5')).toBe(7);
    });

    test('add numbers in string with numbers 2,5,6,7,8,10 and retun result as 38', () => {
        expect(sum('2,5,6,7,8,10')).toBe(38);
    });
});


