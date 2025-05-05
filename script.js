import getPaths from "./getPaths.js";
import {slice, print} from "./utilities.js";

const start = [1, 6];
const end = [1, 3];
const paths = getPaths(start, end);
// print(paths, false);
print(slice(paths), true);