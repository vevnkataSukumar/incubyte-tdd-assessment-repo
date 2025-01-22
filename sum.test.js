import {sum} from './sum';

describe('Sum Function', () => {
    // test case for undefined scenario
    test('should return undefined if value is not astring', () => {
        expect(sum(1)).toBe(undefined);
    });

    // test case for empty string and returning 0
    test('add numbers in string and retun result', () => {
        expect(sum('')).toBe(0);
    });

    // test case for string with 1 number in it and returning the number
    test('add numbers in string with 1 number in it should retun as 1', () => {
        expect(sum('1')).toBe(1);
    });

    // test case for string with 2 numbers in it and returning the sum of the numbers
    test('add numbers in string with numbers 2,5 and retun result as 7', () => {
        expect(sum('2,5')).toBe(7);
    });

    // test case for string with multiple numbers in it and returning the sum of the numbers
    test('add numbers in string with numbers 2,5,6,7,8,10 and retun result as 38', () => {
        expect(sum('2,5,6,7,8,10')).toBe(38);
    });

    // test case for string with multiple numbers in it and returning the sum of the numbers and ignoring numbers greater than 1000
    test('add numbers in string with numbers 2,5,6,7,8,10001 and retun result as 28 and ignoring 10001', () => {
        expect(sum('2,5,6,7,8,10001')).toBe(28);
    });

    // test case for string with numbers in it and removing special charecters other than numbers, comma and - from it and returning the sum of the numbers
    test('add numbers in string ;\n1;2 and retun result as 3', () => {
        expect(sum(';\n1;2')).toBe(3);
    });

    // test case for string with numbers in it and removing special charecters other than numbers, comma and - from it and returning the sum of the numbers
    test('add numbers in the string "abc123!@#,45de*67?890" and retun result as 123 and ignoring 1000', () => {
        expect(sum("abc123!@#,45de*67?890")).toBe(1125);
    });

    // test case for string with numbers in it and removing special charecters other than numbers, comma and - from it and returning the sum of the numbers
    test('add numbers in string [*][%]\n1*2%3 and retun result as 3', () => {
        expect(sum('[*][%]\n1*2%3')).toBe(6);
    });

    // test case for string with negative numbers in it and removing special charecters other than numbers, comma and - from it and returning the sum of the numbers
    test('add numbers in string $$$1,23%%%,[[__))-3] and retun result as negatives not allowed', () => {
        expect(sum('$$$1,23%%%,[[__))-3]')).toBe('negatives not allowed');
    });
});


