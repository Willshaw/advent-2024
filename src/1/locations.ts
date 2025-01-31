// import { DigitMap } from "./interfaces";

const locationIdDiff = (locationIds: number[]) => {
  return Math.abs(locationIds[0] - locationIds[locationIds.length - 1]);
};

// transpose arrays and sort into ascending order
const transposeAndSortLocations = (locations: number[][]) => {
  const transposed_locations: number[][] = [];
  
  locations.reduce((acc, location) => {
    location.forEach((value, i) => {
      if (!acc[i]) {
        acc[i] = [];
      }
      acc[i].push(value);
    });
    return acc;
  }, transposed_locations);

  const sorted_locations = transposed_locations.map((location) => {
    return location.sort((a, b) => a - b);
  });

  return sorted_locations;
};

// get total of all location differences
const locationDiffTotal = (locations: number[][]) => {
  const sorted_locations = transposeAndSortLocations(locations);
  return sorted_locations.reduce((acc, location) => {
    const diff = locationIdDiff(location);
    console.log(diff);
    return acc + diff;
  }, 0);
};

export { locationIdDiff, transposeAndSortLocations, locationDiffTotal };
