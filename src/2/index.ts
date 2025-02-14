/**
 * https://adventofcode.com/2024/day/2
 *
 * -- part two --
 * find all safe lists, which are
 * 
 * 
 * For example:
 * 
 * 7 6 4 2 1
 * 1 2 7 8 9
 * 9 7 6 2 1
 * 1 3 2 4 5
 * 8 6 4 4 1
 * 1 3 6 7 9
 * 
 * the pairs and distances would be as follows:
 * 
 * 7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
 * 1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
 * 9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
 * 1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
 * 8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
 * 1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.
 * 
 * 2 safe reports
 * 
 */

import { splitFileOnNewLine } from "../utils";
import { countSafeReports } from "./reports";

const run = () => {
  const data: string[] = splitFileOnNewLine("../input/2.txt");
  // turn ["1   2"] into [[1, 2]]
  const reports = data.map((line) => line.replace(/\s+/g,',').split(",").map((n) => parseInt(n)));

  console.log("Part 1, safe reports total:", countSafeReports(reports));
  // console.log("Part 2, similarity score:", similarityScore(reports));
};

export { run };
