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

function knightPaths(startSquare, endSquare) {
    const isValid = (x, y) => (x >= 0 && x < BOARD_SIZE) && (y >= 0 && y < BOARD_SIZE);
    if (!isValid(startSquare[0], startSquare[1]) || !isValid(endSquare[0], endSquare[1])) {
        console.log("Invalid input");
        return [];
    }

    const result = [];
    const queue = [[startSquare, [startSquare]]]; 

    let minimumMoves = null;

    while (queue.length > 0) {
        const [current, path] = queue.shift();
        const [x, y] = current;

        if (minimumMoves !== null && path.length - 1 > minimumMoves) continue;

        if (x === endSquare[0] && y === endSquare[1]) {
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

const paths = knightPaths([0, 0], [6, 7]);
if (paths.length === 0) return;
else {
    console.log("Shortest paths:", paths);
    console.log("Minimum moves:", paths[0].length - 1);
}