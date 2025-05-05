import {check, isValid, isSame, add} from "./helper.js";
import {DIRECTIONS} from "./constants.js";

export default function getPaths(start, end) {
    try {check(start, end);} catch (error) {return [];}
    return findPaths(start, end);    
}

function findPaths(start, end) {
    const result = [];
    const queue = [[start, [start]]];
    const visited = new Set();
    visited.add(start);

    let minimumMoves = null;

    while (queue.length > 0) {
        const [current, path] = queue.shift();

        if (minimumMoves !== null && path.length > minimumMoves) break;

        if (isSame(current, end)) {
            if (minimumMoves === null) minimumMoves = path.length;
            result.push(path);
            continue;
        }

        for (const [dx, dy] of DIRECTIONS) {
            const change = [dx, dy];
            const newCoordinate = add(current, change);

            if (isValid(newCoordinate) && !visited.has(newCoordinate))
                visited.add(newCoordinate);
                queue.push([newCoordinate, [...path, newCoordinate]]);
        }
    }

    return result;
}