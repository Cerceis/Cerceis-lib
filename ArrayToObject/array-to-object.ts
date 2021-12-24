/**
 * Convert a 2-dimentional array ([[key, value], [key2, value2],...]) into Object.
 * @param arr Input 2-dimentional array [[key, value], [key2, value2],...]
 * @returns Object
 */
export const ArrayToObject = (arr: any[][]): { [key: string | number]: any } => {
    let tmpObj: { [key: string | number]: any } = {}
    arr.forEach(e => tmpObj[e[0]] = e[1])
    return tmpObj
}