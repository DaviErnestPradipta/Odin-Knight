export function sliceFirst(paths) {
    return paths.map(path => path.slice(1));
}

export function print(paths) {
    if (paths.length === 0) return;

    console.log("Shortest paths:", paths);
    console.log("Minimum moves:", paths[0].length);
}