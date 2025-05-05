import getPaths from "./getPaths.js";
import {sliceFirst, print} from "./utilities.js";

const start = [0, 0];
const end = [5, 3];
const paths = getPaths(start, end);
const slicedPaths = sliceFirst(paths);
print(slicedPaths);