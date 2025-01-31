import fs from 'fs';
import path from 'path';
import { Coord } from './utils.interface';

const combinations = (array: number[], length: number): number[] => {
    return array.flatMap((v, i) => length > 1
        ? combinations(array.slice(i + 1), length - 1).map(w => w + v)
        : v
    );
};

// pass simple file of numbers
const parseNumbers = (path_to_file: string) => {
    const commands_file = fs.readFileSync(path.resolve(__dirname, path_to_file), 'utf-8');
    const numbers: number[] = commands_file
        .split(/\r?\n/)
        .map((n) => parseInt(n));

    return numbers;
}

// return array of arrays, splitting on blank lines, splitting based on sections
const splitFileOnBlankLine = (path_to_file: string, file_section_labels?: RegExp) => {
    const input_file = fs.readFileSync(path.resolve(__dirname, path_to_file), 'utf-8');
    const lines: string[] = input_file
        .split(/\r?\n/);

    // loop the file, adding items to the array
    const file: string[][] = [];
    let file_index = 0;
    file[file_index] = [];
    lines.forEach((line) => {
        // skip any file_section_labels if supplied
        if (file_section_labels && line.match(file_section_labels)) {
            return;
        }
        if (line === '') {
            file_index = file_index + 1;
            file[file_index] = [];
        } else {
            file[file_index].push(line)
        }
    });

    return file;
}

// return array of lines, splitting on a new line
const splitFileOnNewLine = (path_to_file: string) => {
    const input_file = fs.readFileSync(path.resolve(__dirname, path_to_file), 'utf-8');
    const lines: string[] = input_file.split(/\r?\n/);

    return lines;
}

const compareNumbers = (a: number, b: number) => {
    return a - b;
}

const orderNumberArray = (a: number[]) => {
    return a.slice().sort(compareNumbers);
}

const deepCopy = (o: any) => {
    return JSON.parse(JSON.stringify(o));
}

const getKeyByValue = (object: any, value: any) => {
    return Object.keys(object).find(key => object[key] === value);
}

const rotateArray90 = (a: any[], negative: boolean = false) => {
    const rows = a.length;
    const cols = a[0].length;
    const rotated = [];
    for (let i = 0; i < cols; i++) {
        const newRow = [];
        if (negative) {
            for (let j = 0; j < rows; j++) {
                newRow.push(a[rows - j - 1][i]);
            }
        } else {
            for (let j = rows - 1; j >= 0; j--) {
                newRow.push(a[j][i]);
            }
        }

        rotated.push(newRow);
    }
    return rotated;
}

const rotateArray = (a: any[], degrees: number = 90) => {
    switch (degrees) {
        case 90:
            return rotateArray90(a);
        case 180:
            return mirrorArray(a.reverse());
        case 270:
            return rotateArray90(a, true);
        case 0:
        case 360:
            return a;
        default:
            throw 'invalid rotation, must be: 0, 90, 180, 270, 360';
    }
}

const mirrorArray = (a: any[]) => {
    return a.map((item) => {
        return item.reverse();
    });
}

const onlyUnique = (value: any, index: number, array: any[]) => {
    return array.indexOf(value) === index;
}

// find the least common multiple of an array of numbers
const leastCommonMultiple = (numbers: number[]) => {
    const gcd = (a: number, b: number): number => {
        return b === 0 ? a : gcd(b, a % b);
    };

    const lcm = (a: number, b: number): number => {
        return Math.abs(a * b) / gcd(a, b);
    };

    return numbers.reduce(lcm);
}

// get the neighbor elements from a 2d array
const get2dNeighbors = (coord: Coord, map: any[][], include_diagonals = true) => {
    const neighbors = [];
    for(let y = (coord.y - 1); y <= coord.y + 1; y++) {
        if(typeof map[y] === 'undefined') {
            // skip rows before 0 and after end
            continue;
        }
        for(let x = coord.x - 1; x <= coord.x + 1; x++) {
            if(
                // skip undefined entries
                typeof map[y][x] === 'undefined'
                // skip diagonals
                || (
                    !include_diagonals
                    && x !== coord.x
                    && y !== coord.y
                )
                // skip the target coord
                || (
                    x === coord.x
                    && y === coord.y
                )
            ) {
                continue;
            }
            neighbors.push(map[y][x]);
        }   
    }

    // get rid of any undefined
    return neighbors.filter((n) => typeof n !== 'undefined');
}

export {
    deepCopy,
    parseNumbers,
    combinations,
    compareNumbers,
    orderNumberArray,
    splitFileOnBlankLine,
    splitFileOnNewLine,
    getKeyByValue,
    rotateArray,
    mirrorArray,
    onlyUnique,
    leastCommonMultiple,
    get2dNeighbors,
}
