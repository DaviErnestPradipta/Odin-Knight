import {BOARD_SIZE} from "./constants.js";

export function check(start, end) {
    if (!isValid(start) || !isValid(end)) {
        console.error("Invalid: Outside board");
        throw new Error("Invalid input");
    }

    if (isSame(start, end)) {
        console.error("Invalid: Same squares");
        throw new Error("Same squares");
    }
}

export function isValid([x, y]) {
    return (x >= 0 && x < BOARD_SIZE) && (y >= 0 && y < BOARD_SIZE);
}

export function isSame([x1, y1], [x2, y2]) {
    return (x1 === x2) && (y1 === y2);
}

export function add(array1, array2) {
    return array1.map((v, i) => v + array2[i]);
}