import { expect, test } from '@jest/globals';
import {
  isChangeConsistent,
  isReportSafe,
  isToleratedReportSafe,
  countSafeReports,
} from "../../dist/2/reports.js";

const examples = [
  {
    total_safe_reports: 2,
    total_safe_reports_tolerance_1: 4,
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
  expect(isChangeConsistent(-1,-1)).toBe(true);
  expect(isChangeConsistent(-1,-3)).toBe(true);
  expect(isChangeConsistent(-1,3)).toBe(false);
  expect(isChangeConsistent(1,-3)).toBe(false);
})

test(`is a report safe`, () => {
  expect(isReportSafe([1,2,3])).toBe(true);
  expect(isReportSafe(([1,7,5]))).toBe(false);
});

test(`is a report safe with tolerance of 1`, () => {
  expect(isReportSafe([1,2,3],true)).toBe(true);
  expect(isReportSafe([1,7,3],true)).toBe(true);
  expect(isReportSafe([-5,-4],true)).toBe(true);

  expect(isReportSafe([5,1,9],true)).toBe(false);
  expect(isReportSafe([-5,9,-4,10],true)).toBe(false);
});

examples.forEach((example, i) => {
  test(`correct number of safer reports (index ${i})`, () => {
    expect(countSafeReports(example.input)).toBe(example.total_safe_reports);
  });

  test(`correct number of safer reports with a tolerance of 1 (index ${i})`, () => {
    expect(countSafeReports(example.input,true)).toBe(example.total_safe_reports_tolerance_1);
  });
});
