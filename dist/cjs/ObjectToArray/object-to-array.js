"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectToArray = void 0;
/**
 * Convert Object into a 2-dimentional array ([[key, value], [key2, value2],...]).
 * @param inputObj Input object.
 * @returns An 2 dimentional array with a type of [[key, value], [key2, value2],...]
 */
const ObjectToArray = (inputObj) => Object.keys(inputObj).map((key) => { return [String(key), inputObj[key]]; });
exports.ObjectToArray = ObjectToArray;
