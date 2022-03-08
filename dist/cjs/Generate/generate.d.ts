import { AlphabateOptions } from "./types";
/**
 * Generator that generates all kinds of values.
 * alphanum
 * objectId
 * int
 * array
 */
export declare const Generate: {
    /**
     * Generates a string consist of alphanumeric characters of given length
     * @param {number}[len=4] Length of the string
     * @returns Alphanumeric string
     */
    alphanum(len?: number): string;
    /**
    * Generates random integer in a given range of (].
    * @returns
    */
    objectId(): string;
    /**
     * Generates random integer in a given range of [).
     * Includes Min, exclude Max.
     * @param min
     * @param max
     * @returns number
     */
    int(min: number, max: number): number;
    /**
     *  Generates an array with random number as elemnt of desired length.
     *  @param len @required Length of the array.
     *  @returns Array of a given length
     */
    array(len: number): number[];
    /**
     * Generates random alphabate of specified length.
     * @param {number} [len=5] Length of the string. default = 5,
     * @param {AlphabateOptions} [options] Options
     */
    alphabate(len?: number, options?: AlphabateOptions): string;
};
