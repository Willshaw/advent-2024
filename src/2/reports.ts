// import { DigitMap } from "./interfaces";
import { countOccourancesInArray } from "../utils";

const isChangeConsistent = (change_1, change_2) => {
  return !!(0 + change_1 >= 0) === !!(0 + change_2 >= 0); 
}

const getLevelChange = (level, prev_level) => {
  const value = level - prev_level,
  return {
    value,
    abs_value: Math.abs(value),
  }
}

const isReportSafe = (report: number[]) => {
  const is_safe = report.reduce((acc, curr, index) => {
    if(index === 0) {
      return true;
    }
    const change = getLevelChange(report[index-1], curr);
    const is_safe_level = change.abs_value >= 1 && change.abs_value <= 3;

    // there can't have been a change in direction yet, so we only care about the level
    if(index === 1) {
      return is_safe_level;
    }

    const prev_change = getLevelChange(report[index-2], report[index-1]);
    return acc && isChangeConsistent(change.value, prev_change.value);
  }, true);  
  return is_safe;
}

const countSafeReports = (reports: number[][]) => {
  const safeReports = reports.filter((report) => isReportSafe);
  return safeReports.length;
}

export { isChangeConsistent, isReportSafe, countSafeReports };
