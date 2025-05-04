const BOARD_SIZE = 8;
const DIRECTIONS = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1]
];

const start = [0, 0];
const end = [5, 3];
const paths = knightPaths(start, end);
const slicedPaths = sliceFirst(paths);
print(slicedPaths);

function knightPaths(start, end) {
    if (!isValid(start) || !isValid(end)) {
        console.error("Invalid input, returning empty array");
        return [];
    }

    if (areSame(start, end)) {
        console.error("Same squares, returning empty array");
        return [];
    }

    const queue = [[start]];
    const visited = new Set([start.toString()]);
    const result = [];

    while (queue.length > 0) {
        const path = queue.shift();
        const [x, y] = path[path.length - 1];

        if (areSame([x, y], end)) {
            if (result.length === 0 || path.length === result[0].length) result.push(path);
            else break;
            continue;
        }

        for (const [dx, dy] of DIRECTIONS) {
            const newX = x + dx, newY = y + dy;
            const newPos = [newX, newY];

            if (isValid(newPos) && !visited.has(newPos.toString())) {
                visited.add(newPos.toString());
                queue.push([...path, newPos]);
            }
        }
    }

    return result;
}

function isValid([x, y]) {
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
}

function areSame([x1, y1], [x2, y2]) {
    return x1 === x2 && y1 === y2;
}

function sliceFirst(paths) {
    return paths.map(path => path.slice(1));
}

function print(paths) {
    if (paths.length === 0) return;
    console.log("Shortest paths:", paths);
    console.log("Minimum moves:", paths[0].length);
}