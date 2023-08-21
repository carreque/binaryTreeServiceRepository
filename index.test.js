const { describe } = require('node:test');
const {add, substract, multiply} = require('./index');

describe("Index sample test.js", () => {
    
    test('should test add', () => { 
        expect(add(2,2)).toBe(4);
     });

     test('should test substract', () => { 
        expect(substract(2,2)).toBe(1);
     });
});