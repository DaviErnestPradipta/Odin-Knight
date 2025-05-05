import getPaths from "./getPaths.js";
import {slice, print} from "./utilities.js";

const start = [2, 1];
const end = [2, 1];
const paths = getPaths(start, end);
// print(paths, false);
print(slice(paths), true);