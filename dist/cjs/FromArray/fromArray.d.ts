export declare const FromArray: {
    /**
     * Returns a/multiple random element in an array.
     * @param arr Array of input numbers.
     * @param {number} [noOfResult=1] Number of results to return.
     * @param returnIndex [returnIndex=false] Return the index instead.
     * @returns
     */
    getRandom(arr: any[], noOfResult?: number, returnIndex?: boolean): any[];
    /**
     * Find and return the largest n numbers
     * @param numbers Array of numbers.
     * @param {number} [n] Number of results to return.
     * @param {boolean} [returnIndex] Return the index instead of the value.
     * @returns Array of largest n number.
     */
    getLargest(numbers: number[], n?: number, returnIndex?: boolean): number[];
    /**
     * Find and return the smallest n numbers
     * @param numbers Array of numbers.
     * @param {number} [n=1] Number of results to return.
     * @param {boolean} [returnIndex=false] Return the index instead of the value.
     * @returns Array of smallest n number.
     */
    getSmallest(numbers: number[], n?: number, returnIndex?: boolean): number[];
    /**
     * Return intersection of two arrays.
     * @param arrA Array A to find intersection.
     * @param arrB Array B to find intersection.
     * @param duplicated Return duplicated results.
     * @returns any[]
     */
    getIntersect(arrA: any[], arrB: any[], duplicated?: boolean): any[];
    /**
     * Randomly shuffle an Array. Based on anwser by https://stackoverflow.com/questions/2450954/
     * @param arr Array to shuffle.
     * @returns Shuffled array.
     */
    shuffle(arr: any[]): any[];
    /**
     * The thanos snap, remove half of the elements randomly
     * length - 1 if total length is an odd number.
     * Mutates the original array. You can never go back.
     * @param arr Input Array
     */
    thanosSnap(arr: any[]): any[];
    /**
     * Convert a 2-dimentional array ([[key, value], [key2, value2],...]) into Object.
     * @param arr Input 2-dimentional array [[key, value], [key2, value2],...]
     * @returns Object
     */
    toObject(arr: any[][]): {
        [key: string]: any;
        [key: number]: any;
    };
    /**
    * Split array into speficied ratio.
    * ex) a = [1,2,3,4], split into [1,3]. returns = {1:[1], 2:[2,3,4]}
    * ex) a = [1,2,3,4], split into [1,2,1]. returns = {1:[1], 2:[2,3], 3:[4]}
    * ! If the the numbers of element can't fit into specified ratio,
    * it will return as an array in the "extra" field.
    * @param arr Array to split.
    * @param arr Ratio to split into.
    * @returns {[key: string]: any[]}
    */
    splitInto(arr: any[], ratio: number[]): {
        [key: string]: any[];
    };
    /**
     * A wrapper to console log an array, can take specified index range to print
     * specific range, useful when logging large dataset.
     * @param arr Array to Log.
     * @param from Starting index (Included), default = 0
     * @param to Ending index (Excluded), default = arr.length
     */
    log(arr: any[], from?: number, to?: number): void;
};
