// import { DigitMap } from "./interfaces";

const locationIdDiff = (locationIds: number[]) => {
  return Math.abs(locationIds[0] - locationIds[locationIds.length - 1]);
};

// get total of all location differences
const locationDiffTotal = (locations: number[][]) => {
  const total = locations.reduce((acc, location) => {
    return acc + locationIdDiff(location);
  }, 0);
};

export { locationIdDiff, locationDiffTotal };
