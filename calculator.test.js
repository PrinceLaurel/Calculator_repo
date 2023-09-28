/*const {default: expect} = require("expect"); */

const {calculate } = require('./calculator');



describe('addition av 4 och 5 ska vara 9', () => {
    test('4 + 5 = 9', () => {
        expect(calculate(4, 5, 'add')).toBe(9);
    });
});
describe('subtraktion av 5 från 10 ska vara 5', () => {
    test ('10 - 5 = 5', () => {
        expect(calculate(10, 5, 'sub')).toEqual(5);
    });
});
describe('multiplikation av 3 och 4 ska vara 12', () => {
    test ('3 * 4 = 12', () => {
        expect(calculate(3, 4, 'multiply')).toEqual(12);
    });
});
describe('division av 6 från 120 ska vara 20', () => {
    test ('120 / 6 = 20', () => {
        expect(calculate(120, 6, 'divide')).toEqual(20);
    });
});
test ('3 / 0 = not defined', () => {
expect(calculate(3, 0, 'divide')).toBe("not defined");
});


