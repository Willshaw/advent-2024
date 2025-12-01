import { expect, test } from "vitest";
import { countNumInSequence } from "../../src/1/safecracker.ts";

const examples = [
  {
    total: 3,
    input: ["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"],
  },
];

examples.forEach((example, i) => {
  test(`correct number of zeros (index ${i})`, () => {
    expect(countNumInSequence(50, 0, example.input)).toBe(example.total);
  });
});
