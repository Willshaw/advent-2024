// import { DigitMap } from "./interfaces";
import { countOccourancesInArray } from "../utils";

const locationIdDiff = (locations: number[][], index:number) => {
  return Math.abs(locations[0][index] - locations[1][index]);
};

const transposeLocations = (locations: number[][]) => {
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
  return transposed_locations;
}

const sortLocations = (locations: number[][]) => {
  return locations.map((location) => {
    return location.sort((a, b) => a - b);
  });
}

// transpose arrays and sort into ascending order
const transposeAndSortLocations = (locations: number[][]) => {
  return sortLocations(transposeLocations(locations));
};

// get total of all location differences
const locationDiffTotal = (locations: number[][]) => {
  const sorted_locations = transposeAndSortLocations(locations);
  return sorted_locations[0].reduce((acc, location, i) => {
    return acc + locationIdDiff(sorted_locations, i);
  }, 0);
};

// get similarity score
const similarityScore = (locations: number[][]) => {
  const transposed_locations = transposeLocations(locations);
  const left_list = transposed_locations[0];
  const right_list = transposed_locations[1];

  return left_list.reduce((acc, location_id, i) => {
    const count = countOccourancesInArray(location_id, right_list);
    return acc + (location_id * count);
  }, 0);
}

export { locationIdDiff, transposeLocations, sortLocations, transposeAndSortLocations, locationDiffTotal, similarityScore };
