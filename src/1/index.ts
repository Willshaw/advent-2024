/**
 * https://adventofcode.com/2024/day/1
 *
 * -- part one --
 * take the two lists of location IDs, sort them in ASC order, and total the diff between the items at each index
 * 
 * For example:
 * 
 * 3   4
 * 4   3
 * 2   5
 * 1   3
 * 3   9
 * 3   3 
 * 
 * In the example list above, once sorted it would look like this:
 * 
 * 1   3
 * 2   3
 * 3   3
 * 3   4
 * 3   5
 * 4   9
 * 
 * the pairs and distances would be as follows:
 * 
 * 1 and 3, diff 2.
 * 2 and 3, diff 1.
 * 3 and 3, diff 0.
 * 3 and 4, diff 1.
 * 3 and 5, diff 2.
 * 4 and 9, diff 5.
 * 
 * therefore 2+1+1+2+5 = 11
 * 
 * --- Part Two ---
 */

import { splitFileOnNewLine } from "../utils";
import { locationDiffTotal } from "./locations";

const run_1 = () => {
  console.log("GO 1");

  const data: string[] = splitFileOnNewLine("../input/1.txt");
  // turn ["1   2"] into [[1, 2]]
  const locations = data.map((line) => line.replace(/\s+/g,',').split(",").map((n) => parseInt(n)));

  const diff_total = locationDiffTotal(locations);
  console.log("Part 1, diff total:", diff_total);
  // const sum_digits = calibrationSum(data, true);
  // console.log("Part 2, calibration sum with digits:", sum_digits);
};

export { run_1 };
