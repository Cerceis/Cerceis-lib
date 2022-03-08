export declare const FromArray: {
    /**
     * Returns a/multiple random element in an array.
     * @param arr Array of input numbers.
     * @param {number} [noOfResult=1] Number of results to return.
     * @returns
     */
    getRandom(arr: any[], noOfResult?: number): any[];
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
};
