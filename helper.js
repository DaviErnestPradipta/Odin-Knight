import {BOARD_SIZE, DIRECTIONS} from "./constants.js";

export function startCheck(start, end) {
    if (!isValid(start) || !isValid(end)) {
        console.error("Invalid: Outside board");
        throw new Error("Invalid input");
    }

    if (isSame(start, end)) {
        console.error("Invalid: Same squares");
        throw new Error("Same squares");
    }
}

export function shouldSkipPath(path, searchState) {
    return searchState.minimumMoves !== null && path.length > searchState.minimumMoves;
}

export function processNode(current, path, end, result, searchState) {
    if (isSame(current, end)) {
        if (searchState.minimumMoves === null) searchState.minimumMoves = path.length;
        result.push(path);
        return true;
    }

    return false
}

export function enqueueNeighbors(queue, current, path, visited) {
    for (const [dx, dy] of DIRECTIONS) {
        const change = [dx, dy];
        const newCoordinate = addArray(current, change);

        if (isValid(newCoordinate) && !visited.has(newCoordinate)) {
            visited.add(newCoordinate);
            queue.push([newCoordinate, [...path, newCoordinate]]);
        }
    }
}

function isSame([x1, y1], [x2, y2]) {
    return (x1 === x2) && (y1 === y2);
}

function isValid([x, y]) {
    return (x >= 0 && x < BOARD_SIZE) && (y >= 0 && y < BOARD_SIZE);
}

function addArray(array1, array2) {
    return array1.map((v, i) => v + array2[i]);
}