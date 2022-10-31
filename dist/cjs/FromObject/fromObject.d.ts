export declare const FromObject: {
    _isObj: (x: Object) => boolean;
    /**
     * Convert Object into a 2-dimentional array ([[key, value], [key2, value2],...]).
     * @param inputObj Input object.
     * @returns An 2 dimentional array with a type of [[key, value], [key2, value2],...]
     */
    _isNumber: (x: number) => boolean;
    ObjectToArray(inputObj: {
        [key: string]: any;
        [key: number]: any;
    }): any[][];
    /**
     * Flatten a multi level object.
     * @param obj Object
     * @param overwriteKey Determine if to overwrite duplicated key, default: false.
     * @returns
     */
    flatten(obj: Object, overwriteKey?: boolean): object;
    /**
     * Find and return the nested deepest object. If there are 2 result at the same depth, it will
     * return the last occur deepest object.
     * @param obj input Object;
     * @param multi return all result if multiple result is available.
     * @returns Deepest object
     */
    getDeepest(obj: object, multi?: boolean): object | object[];
    /**
     * Sum all the value of an object, support up to single nested object
     * return the sum.
     * @param obj input Object;
     * @param field target field if inputs are nested object;
     * @returns Sum
    */
    sumAll(obj: object, field?: string): number;
    /**
     * Find the max value of an object, support up to single nested object
     * return the max.
     * @param obj input Object;
     * @param field target field if inputs are nested object;
     * @returns Max value.
    */
    max(obj: object, field?: string): number;
    /**
     * Find the min value of an object, support up to single nested object
     * return the min.
     * @param obj input Object;
     * @param field target field if inputs are nested object;
     * @returns Min value.
    */
    min(obj: object, field?: string): null;
};
