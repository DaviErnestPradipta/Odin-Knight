export function slice(paths) {
    return paths.map(path => path.slice(1));
}

export function print(paths, sliced) {
    if (paths.length === 0) return;

    const formattedPaths = paths.map(path => 
        `[${path.map(subPath => `[${subPath.join(', ')}]`).join(', ')}]`
    ).join(',\n');

    const minimumMoves = sliced ? paths[0].length : paths[0].length - 1;

    console.log("Minimum moves:", minimumMoves);
    console.log("Shortest paths:", `[\n${formattedPaths}\n]`);
}