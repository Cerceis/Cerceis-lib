/**
 * Convert Object into a 2-dimentional array ([[key, value], [key2, value2],...]).
 * @param inputObj Input object.
 * @returns An 2 dimentional array with a type of [[key, value], [key2, value2],...]
 */
export const ObjectToArray = (inputObj) => Object.keys(inputObj).map((key) => { return [String(key), inputObj[key]]; });
