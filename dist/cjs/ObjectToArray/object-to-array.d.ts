/**
 * Convert Object into a 2-dimentional array ([[key, value], [key2, value2],...]).
 * @param inputObj Input object.
 * @returns An 2 dimentional array with a type of [[key, value], [key2, value2],...]
 */
export declare const ObjectToArray: (inputObj: {
    [key: string]: any;
    [key: number]: any;
}) => any[][];
