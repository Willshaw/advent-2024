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

    const prev_change = getLevelChange(report[index-2], report[index-1]);
    return acc
      && is_safe_level
      && (index === 1 ? true : isChangeConsistent(change.value, prev_change.value));
  }, true);  
  return is_safe;
}

const countSafeReports = (reports: number[][]) => {
  const safeReports = reports.filter((report) => { return isReportSafe(report); });
  return safeReports.length;
}

export { isChangeConsistent, isReportSafe, countSafeReports };
