import { expect, jest, test } from '@jest/globals';
import {
    deepCopy,
    compareNumbers,
    orderNumberArray,
    getKeyByValue,
    rotateArray,
    mirrorArray,
    get2dNeighbors,
    countOccourancesInArray,
} from '../dist/utils.js';

test(`can count occourances in an array`, () => {
    expect(countOccourancesInArray(3,[4,3,5,3])).toBe(2);
});

test(`can make a deep copy`, () => {
    const a = { foo: 'bar' };
    const b = deepCopy(a);
    a.foo = 'test';
    expect(a.foo).toBe('test');
    expect(b.foo).toBe('bar');
});

test(`returns difference betwen numbers`, () => {
    expect(compareNumbers(7, 2)).toBe(5);
    expect(compareNumbers(2, 7)).toBe(-5);
    expect(compareNumbers(7, 7)).toBe(0);
});

test(`orders an array of numbers`, () => {
    const a = [4, 2, 3, 1];
    expect(orderNumberArray(a)).toEqual([1, 2, 3, 4]);
});

test(`gets the key from an object that has a certain valie`, () => {
    const a = { foo: 'bar' };
    expect(getKeyByValue(a, 'bar')).toBe('foo');
});

test(`can mirror an array`, () => {
    const a = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    const a_mirrored = [
        [3, 2, 1],
        [6, 5, 4],
        [9, 8, 7],
    ]
    expect(mirrorArray(a)).toEqual(a_mirrored);
});

test(`can rotate a square array`, () => {
    const a = [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
    ];
    const a_90 = [
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
    ];
    const a_180 = [
        [3, 2, 1],
        [3, 2, 1],
        [3, 2, 1],
    ];
    const a_270 = [
        [3, 3, 3],
        [2, 2, 2],
        [1, 1, 1],
    ];
    // simple 90/-90 rotation
    expect(rotateArray(a)).toEqual(a_90);
    expect(rotateArray(rotateArray(a))).toEqual(a_180);
    expect(rotateArray(a, 180)).toEqual(a_180);
    expect(rotateArray(a, 270)).toEqual(a_270);

});

test(`can mirror and rotate an array`, () => {
    const a = [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
    ];
    const a_transformed = [
        [3, 3, 3],
        [2, 2, 2],
        [1, 1, 1],
    ];
    expect(rotateArray(mirrorArray(a))).toEqual(a_transformed);
});

test(`can find neighbor elements`, () => {
    const map = [
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i'],
    ];

    expect(get2dNeighbors({x:1, y:1},map,false).length).toBe(4);
    expect(get2dNeighbors({x:1, y:1},map,true).length).toBe(8);
    expect(get2dNeighbors({x:0, y:0},map,false).length).toBe(2);
    expect(get2dNeighbors({x:0, y:0},map,true).length).toBe(3);
});
