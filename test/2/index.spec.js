import { expect, test } from '@jest/globals';
import {
  countSafeReports,
} from "../../dist/2/reports.js";

const examples = [
  {
    total_safe_reports: 2,
    input: [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ]
  },
];

// test(`difference is calculated correctly`, () => {
//   expect(locationIdDiff([[1],[7]],0)).toBe(6);
//   expect(locationIdDiff([[9],[2]],0)).toBe(7);
//   expect(locationIdDiff([[0,-3],[0,12]],1)).toBe(15);
// });

// test(`arrays can be transposed`, () => {
//   const input = [
//     [1,12],
//     [3,2],
//   ];
//   const expected = [
//     [1,3],
//     [12,2],
//   ];
//   expect(transposeLocations(input)).toEqual(expected);
// });

// test(`arrays can be sorted`, () => {
//   const input = [
//     [1,12],
//     [3,2],
//   ];
//   const expected = [
//     [1,12],
//     [2,3],
//   ];
//   expect(sortLocations(input)).toEqual(expected);
// });

// test(`arrays can be transposed and sorted`, () => {
//   const input = [
//     [1,12],
//     [3,2],
//   ];
//   const expected = [
//     [1,3],
//     [2,12],
//   ];
//   expect(transposeAndSortLocations(input)).toEqual(expected);
// });

examples.forEach((example, i) => {
  test(`correct number of safer reports (index ${i})`, () => {
    expect(countSafeReports(example.input)).toBe(example.total_safe_reports);
  });

  // test(`similarity score from input (index ${i})`, () => {
  //   expect(similarityScore(example.input)).toBe(example.similarity);
  // });
});
