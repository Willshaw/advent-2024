import { expect, test } from '@jest/globals';
import {
  locationIdDiff,
  locationDiffTotal,
} from "../../dist/1/locations.js";

const examples = [
  {
    total: 21,
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
  expect(locationIdDiff([1,7])).toBe(6);
  expect(locationIdDiff([9,2])).toBe(7);
  expect(locationIdDiff([-3,12])).toBe(15);
});

// examples.forEach((example, i) => {
//   test(`correct sum from input (index ${i})`, () => {
//     const example = examples[i];
//     expect(calibrationSum(example.input, example.include_words)).toBe(
//       example.sum
//     );
//   });
// });
