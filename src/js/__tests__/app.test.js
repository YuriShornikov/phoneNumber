import validateNumber from "../app";

describe('test func', () => {
    test('test number with 11 symbols for Russia', () => {
        const num = validateNumber('+7 968 000 00 00');
        expect(num).toBe('+79680000000');
    })
    test('test number with 10 symbols for mistake', () => {
        const num = validateNumber(' (927) 000-00-00');
        expect(num).toBe('+79270000000');
    })
    test('test number with 12 symbols for China', () => {
        const num = validateNumber('+86 000 000 0000');
        expect(num).toBe('+860000000000');
    })
    test('test number with less 10 symbols', () => {
        expect(() => validateNumber('+86 000 000 ')).toThrow('Uncorrect number phone');
    })
})