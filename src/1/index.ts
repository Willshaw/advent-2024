/**
 * https://adventofcode.com/2025/day/1
 *
 *  safe has a dial with only an arrow on it; around the dial are the numbers 0 through 99
 * in order. As you turn the dial, it makes a small click noise as it reaches each number
 *
 * if the dial were pointing at 11, a rotation of R8 would cause the dial to point at 19.
 * After that, a rotation of L19 would cause it to point at 0.
 * Because the dial is a circle, turning the dial left from 0 one click makes it point at
 * 99. Similarly, turning the dial right from 99 one click makes it point at 0.
 *
 * The dial starts by pointing at 50.
 *
 * The actual password is the number of times the dial is left pointing at 0
 *
 * For example, suppose the attached document contained the following rotations:
 *
 * L68
 * L30
 * R48
 * L5
 * R60
 * L55
 * L1
 * L99
 * R14
 * L82
 *
 * Following these rotations would cause the dial to move as follows:
 *
 * The dial starts by pointing at 50.
 * The dial is rotated L68 to point at 82.
 * The dial is rotated L30 to point at 52.
 * The dial is rotated R48 to point at 0.
 * The dial is rotated L5 to point at 95.
 * The dial is rotated R60 to point at 55.
 * The dial is rotated L55 to point at 0.
 * The dial is rotated L1 to point at 99.
 * The dial is rotated L99 to point at 0.
 * The dial is rotated R14 to point at 14.
 * The dial is rotated L82 to point at 32.
 *
 * Because the dial points at 0 a total of three times during this process,
 * the password in this example is 3.
 *
 * Analyze the rotations in your attached document.
 * What's the actual password to open the door?
 */

import { splitFileOnNewLine } from "../utils.ts";
import { countNumInSequence } from "./safecracker.ts";

export const run = () => {
  const data: string[] = splitFileOnNewLine("../input/1.txt");
  // turn ["1   2"] into [[1, 2]]
  // const locations = data.map((line) => line.replace(/\s+/g,',').split(",").map((n) => parseInt(n)));

  const pw = countNumInSequence(50, 0, data);

  console.log("Part 1, diff total:", pw);
  // console.log("Part 2, similarity score:", similarityScore(locations));
};
