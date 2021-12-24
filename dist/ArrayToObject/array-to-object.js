/**
 * Convert a 2-dimentional array ([[key, value], [key2, value2],...]) into Object.
 * @param arr Input 2-dimentional array [[key, value], [key2, value2],...]
 * @returns Object
 */
export const ArrayToObject = (arr) => {
    let tmpObj = {};
    arr.forEach(e => tmpObj[e[0]] = e[1]);
    return tmpObj;
};
//# sourceMappingURL=array-to-object.js.map