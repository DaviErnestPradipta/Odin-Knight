import {BOARD_SIZE} from "./constants.js";

export function isValid([x, y]) {
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
}

export function areSame([x1, y1], [x2, y2]) {
    return x1 === x2 && y1 === y2;
}