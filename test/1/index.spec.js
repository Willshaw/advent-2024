import { expect, test } from '@jest/globals';
import {
  locationIdDiff,
  sortLocations,
  transposeLocations,
  transposeAndSortLocations,
  locationDiffTotal,
} from "../../dist/1/locations.js";

const examples = [
  {
    total: 11,
    input: [
      [3,4],
      [4,3],
      [2,5],
      [1,3],
      [3,9],
      [3,3],
    ]
  },
];

test(`difference is calculated correctly`, () => {
  expect(locationIdDiff([[1],[7]],0)).toBe(6);
  expect(locationIdDiff([[9],[2]],0)).toBe(7);
  expect(locationIdDiff([[0,-3],[0,12]],1)).toBe(15);
});

test(`arrays can be transposed`, () => {
  const input = [
    [1,12],
    [3,2],
  ];
  const expected = [
    [1,3],
    [12,2],
  ];
  expect(transposeLocations(input)).toEqual(expected);
});

test(`arrays can be sorted`, () => {
  const input = [
    [1,12],
    [3,2],
  ];
  const expected = [
    [1,12],
    [2,3],
  ];
  expect(sortLocations(input)).toEqual(expected);
});

test(`arrays can be transposed and sorted`, () => {
  const input = [
    [1,12],
    [3,2],
  ];
  const expected = [
    [1,3],
    [2,12],
  ];
  expect(transposeAndSortLocations(input)).toEqual(expected);
});

examples.forEach((example, i) => {
  test(`correct total from input (index ${i})`, () => {
    const example = examples[i];
    expect(locationDiffTotal(example.input)).toBe(example.total);
  });
});
