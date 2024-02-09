import validateNumber from "../app";

describe('test func', () => {
    test('11 symbols for Russia', () => {
        const num = validateNumber('+7 968 000 00 00');
        expect(num).toBe('+79680000000');
    })
    test('10 symbols for rus add +7', () => {
        const num = validateNumber(' (927) 000-00-00');
        expect(num).toBe('+79270000000');
    })
    test('12 symbols for China', () => {
        const num = validateNumber('+86 000 000 0000');
        expect(num).toBe('+860000000000');
    })
    test('less 10 symbols', () => {
        expect(() => validateNumber('+86 000 000 ')).toThrow('Uncorrect number phone');
    })
})