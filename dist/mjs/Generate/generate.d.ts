import { AlphabateOptions } from "./types";
/**
 * Generator that generates all kinds of values.
 * alphanum
 * objectId
 * int
 * array
 */
interface generateArrayOptions {
    min?: number;
    max?: number;
}
export declare const Generate: {
    /**
     * Generates a string consist of alphanumeric characters of given length
     * @param {number}[len=4] Length of the string
     * @returns Alphanumeric string
     */
    alphanum(len?: number): string;
    /**
    * Generates Object Id.
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
     *  Generates an array with random integer as elemnt of desired length.
     *  @param len @required Length of the array.
     *  @returns Array of a given length
     */
    array(len: number, ops?: generateArrayOptions): number[];
    /**
     * Generates random alphabate of specified length.
     * @param {number} [len=5] Length of the string. default = 5,
     * @param {AlphabateOptions} [options] Options
     */
    alphabate(len?: number, options?: AlphabateOptions): string;
    /**
     * @returns Current Date Time with a format of "YYYY-MM-DD""
     */
    currentDate(): string;
    /**
     * @returns Current Date Time with a format of "HH:mm:ss""
     */
    currentTime(): string;
    /**
     * @returns Current Date Time with a format of "YYYY-MM-DD HH:mm:ss""
     */
    currentDateTime(): string;
    /**
     * Generates and return list of date of specified day.
     * Ex: All Sunday and Monday of 2022-01-01 to 2022-03-01
     * @param f  From : YYYY-MM-DD
     * @param t  To : YYYY-MM-DD
     * @param days  number[] 0 ~ 6 Sunday ~ Saturday.
     */
    listOfDateOfDays(f: string, t: string, days: number[]): string[];
};
export {};
