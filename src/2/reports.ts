// import { DigitMap } from "./interfaces";
import { countOccourancesInArray } from "../utils";

const isChangeConsistent = (change_1, change_2) => {
  return !!(0 + change_1 >= 0) === !!(0 + change_2 >= 0); 
}

const getLevelChange = (level_1, level_2) => {
  const change = level_1 - level_2,
  return {
    change,
    abs_change: Math.abs(change),
  }
}

const isReportSafe = (report: number[]) => {
  const is_safe = report.reduce((curr, acc, index) => {
    if(index === 0) {
      return true;
    }
    const change = getLevelChange(report[index-1], curr);
    const is_safe_level = change.abs_change >= 1 && change.abs_change <= 3;

    // the can't have been a change in direction yet, so we only care about the level
    if(index === 1) {
      return is_safe_level;
    }

    const prev_change = getLevelChange(report[index-2], report[index-1]);

    const is_safe_direction = false;
  }, true);  
  return false;
}

const countSafeReports = (reports: number[][]) => {
  const safeReports = reports.filter((report) => isReportSafe);
  return safeReports.length;
}

export { isChangeConsistent, isReportSafe, countSafeReports };
