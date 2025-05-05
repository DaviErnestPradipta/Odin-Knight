import {startCheck, shouldSkipPath, processNode, enqueueNeighbors} from "./helper.js";

export default function getPaths(start, end) {
    try {startCheck(start, end);} catch (error) {return [];}
    return findPaths(start, end);    
}

function findPaths(start, end) {
    const result = [];
    const queue = [[start, [start]]];
    const searchState = {minimumMoves: null};
    const visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        const [current, path] = queue.shift();
        if (shouldSkipPath(path, searchState)) break;
        if (processNode(current, path, end, result, searchState)) continue;
        enqueueNeighbors(queue, current, path, visited);
    }

    return result;
}