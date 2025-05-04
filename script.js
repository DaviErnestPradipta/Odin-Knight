const BOARD_SIZE = 8;
const DIRECTIONS = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1]
];

const paths = knightPaths([0, 0], [6, 9]);
if (paths.length === 0) return;
else {
    console.log("Shortest paths:", paths);
    console.log("Minimum moves:", paths[0].length - 1);
}

function knightPaths(start, end) {
    if (!areValid(start, end)) {
        console.log("Invalid input");
        return [];
    }

    const result = [];
    const queue = [[start, [start]]]; 

    let minimumMoves = null;

    while (queue.length > 0) {
        const [current, path] = queue.shift();
        const [x, y] = current;

        if (minimumMoves !== null && path.length - 1 > minimumMoves) continue;

        if (x === end[0] && y === end[1]) {
            if (minimumMoves === null) minimumMoves = path.length - 1;
            result.push(path);
            continue;
        }

        for (const [dx, dy] of DIRECTIONS) {
            const newX = x + dx;
            const newY = y + dy;

            if (isValid(newX, newY) && !path.some(([px, py]) => px === newX && py === newY)) {
                queue.push([[newX, newY], [...path, [newX, newY]]]);
            }
        }
    }

    return result;
}

function areValid(start, end) {
    return isValid(start[0], start[1]) && isValid(end[0], end[1]);
}

function isValid(x, y) {
    return inBounds(x) && inBounds(y);
}

function inBounds(n) {
    return n >= 0 && n < BOARD_SIZE;
}