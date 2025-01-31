/**
 * https://adventofcode.com/2024/day/1
 *
 * -- part one --
 * locations are listed not by name but by a unique number called the location ID.
 * To make sure they don't miss anything, The  * Historians split into two groups, each searching the office and trying to create their own complete list of location IDs.
 * There's just one problem: by holding the two lists up side by side (your puzzle input), it quickly becomes clear that the lists aren't very similar.
 * Maybe you can help The Historians  * reconcile their lists?
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
 * Maybe the lists are only off by a small amount! To find out, pair up the numbers and measure how far apart they are.
 * Pair up the smallest number in the left list with the smallest number in the right list,
 * then the second-smallest left number with the second-smallest right number, and so on.
 * 
 * Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances.
 * For example, if you pair up a 3 from the left list with a 7 from the right list, the distance apart is 4; 
 * if you pair up a 9 with a 3, the distance apart is 6.

 * In the example list above, the pairs and distances would be as follows:

 * The smallest number in the left list is 1, and the smallest number in the right list is 3. The distance between them is 2.
 * The second-smallest number in the left list is 2, and the second-smallest number in the right list is another 3. The distance between them is 1.
 * The third-smallest number in both lists is 3, so the distance between them is 0.
 * The next numbers to pair up are 3 and 4, a distance of 1.
 * The fifth-smallest numbers in each list are 3 and 5, a distance of 2.
 * Finally, the largest number in the left list is 4, while the largest number in the right list is 9; these are a distance 5 apart.
 * 
 * In the example above, this is 2 + 1 + 0 + 1 + 2 + 5, a  * total distance of 11!

 * Your actual left and right lists contain many location IDs. What is the total distance between your lists?
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
