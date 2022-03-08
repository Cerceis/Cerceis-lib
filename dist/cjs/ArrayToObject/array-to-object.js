"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayToObject = void 0;
/**
 * Convert a 2-dimentional array ([[key, value], [key2, value2],...]) into Object.
 * @param arr Input 2-dimentional array [[key, value], [key2, value2],...]
 * @returns Object
 */
const ArrayToObject = (arr) => {
    let tmpObj = {};
    arr.forEach(e => tmpObj[e[0]] = e[1]);
    return tmpObj;
};
exports.ArrayToObject = ArrayToObject;
