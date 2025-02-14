import { expect, test } from '@jest/globals';
import {
  isChangeConsistent,
  isReportSafe,
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

test(`is a change positive`, () => {
  expect(isChangeConsistent(1,3)).toBe(true);
  expect(isChangeConsistent(-1,-3)).toBe(true);
  expect(isChangeConsistent(-1,3)).toBe(false);
  expect(isChangeConsistent(1,-3)).toBe(false);
})

test(`is a report safe`, () => {
  expect(isReportSafe([1,2,3])).toBe(true);
  expect(isReportSafe((1,7,5))).toBe(false);
});

examples.forEach((example, i) => {
  test(`correct number of safer reports (index ${i})`, () => {
    expect(countSafeReports(example.input)).toBe(example.total_safe_reports);
  });

  // test(`similarity score from input (index ${i})`, () => {
  //   expect(similarityScore(example.input)).toBe(example.similarity);
  // });
});
