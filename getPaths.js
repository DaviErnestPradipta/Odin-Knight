import {isValid, areSame} from "./helper.js";
import {DIRECTIONS} from "./constants.js";

export default function getPaths(start, end) {
    if (!isValid(start) || !isValid(end)) {
        console.error("Invalid input, returning empty array");
        return [];
    }

    if (areSame(start, end)) {
        console.error("Same squares, returning empty array");
        return [];
    }

    const result = [];
    const queue = [[start, new Set([start.toString()])]];

    let minimumMoves = null;

    while (queue.length > 0) {
        const [current, pathSet] = queue.shift();
        const [x, y] = current;

        if (minimumMoves !== null && pathSet.size > minimumMoves) continue;

        if (x === end[0] && y === end[1]) {
            if (minimumMoves === null) minimumMoves = pathSet.size;
            result.push(Array.from(pathSet).map(s => s.split(',').map(Number)));
            continue;
        }

        for (const [dx, dy] of DIRECTIONS) {
            const newX = x + dx;
            const newY = y + dy;
            const newCoordinate = `${newX},${newY}`;

            if (isValid([newX, newY]) && !pathSet.has(newCoordinate)) {
                const newPathSet = new Set(pathSet);
                newPathSet.add(newCoordinate);
                queue.push([[newX, newY], newPathSet]);
            }
        }
    }

    return result;
}