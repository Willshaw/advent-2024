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
 * figure out exactly how often each number from the left list appears in the right list.
 * Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.
 *
 * for the same exmaple list, here is the process of finding the similarity score:
 *
 * left[0] is 3 and appears in right three times, similarity score increases by 3 * 3 = 9.
 * left[1] is 4 and appears in right once, similarity score increases by 4 * 1 = 4.
 * left[2] is 2 and does not appear in right, so similarity score does not increase. (2 * 0 = 0)
 * left[3] is 1 and does not appear in right, so similarity score does not increase. (1 * 0 = 0)
 * left[4] is 3 and appears in right three times, similarity score increases by 3 * 3 = 9.
 * left[5] is 3 and appears in right three times, similarity score increases by 3 * 3 = 9.
 *
 * similarity score is 31 (9 + 4 + 0 + 0 + 9 + 9).
 */

import { splitFileOnNewLine } from "../utils";
import { locationDiffTotal, similarityScore } from "./locations";

const run_1 = () => {
  console.log("GO 1");

  const data: string[] = splitFileOnNewLine("../input/1.txt");
  // turn ["1   2"] into [[1, 2]]
  const locations = data.map((line) => line.replace(/\s+/g,',').split(",").map((n) => parseInt(n)));

  console.log("Part 1, diff total:", locationDiffTotal(locations));
  console.log("Part 2, similarity score:", similarityScore(locations));
};

export { run_1 };
