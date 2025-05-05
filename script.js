import getPaths from "./paths.js";
import {slicePaths, printPaths} from "./utilities.js";

const start = [2, 1];
const end = [4, 3];
const paths = getPaths(start, end);

// printPaths(paths, false);
printPaths(slicePaths(paths), true);