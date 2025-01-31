// import { DigitMap } from "./interfaces";

const locationIdDiff = (locations: number[][], index:number) => {
  return Math.abs(locations[0][index] - locations[1][index]);
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
  return sorted_locations[0].reduce((acc, location, i) => {
    return acc + locationIdDiff(sorted_locations, i);
  }, 0);
};

export { locationIdDiff, transposeAndSortLocations, locationDiffTotal };
