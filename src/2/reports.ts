// import { DigitMap } from "./interfaces";
import { countOccourancesInArray } from "../utils";

const isLevelChangeSafe = (level_1: number, level_2: number) => {
  const diff = Math.abs(level_1 - level_2);
  return diff >= 1 && diff <= 3;
}

const isReportSafe = (report: number[]) => {

  return false;
}

const countSafeReports = (reports: number[][]) => {
  const safeReports = reports.filter((report) => isReportSafe);
  return safeReports.length;
}

export { isLevelChangeSafe, isReportSafe, countSafeReports };
