// import { DigitMap } from "./interfaces";
import { countOccourancesInArray } from "../utils";

const MAX_CHANGE = 3;

const isChangeConsistent = (change_1: number, change_2: number) => {
  return !!(0 + change_1 >= 0) === !!(0 + change_2 >= 0); 
}

const getLevelChange = (level: number, prev_level: number) => {
  const value = level - prev_level;

  return {
    value,
    abs_value: Math.abs(value),
  }
}

const isReportSafe = (report: number[], tolerance: boolean = false) => {
  const is_safe = report.reduce((acc, curr, index) => {
    if(index === 0) {
      return true;
    }
    const change = getLevelChange(report[index-1], curr);
    const is_safe_level = change.abs_value >= 1 && change.abs_value <= MAX_CHANGE;

    const prev_change = getLevelChange(report[index-2], report[index-1]);
    return acc
      && is_safe_level
      && (index === 1 ? true : isChangeConsistent(change.value, prev_change.value));
  }, true);
  return is_safe || (tolerance && isToleratedReportSafe(report));
}

const isToleratedReportSafe = (report: number[]) => {
  return report
    .map((level, i) => report.toSpliced(i, 1))
    .some((reduced_report) => { return isReportSafe(reduced_report) });
}

const countSafeReports = (reports: number[][], tolerance: boolean = false) => {
  const safeReports = reports.filter((report) => { return isReportSafe(report,tolerance); });
  return safeReports.length;
}

export { isChangeConsistent, isReportSafe, isToleratedReportSafe, countSafeReports };
