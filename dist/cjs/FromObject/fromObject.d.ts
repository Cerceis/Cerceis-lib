export declare const FromObject: {
    _isObj: (x: Object) => boolean;
    /**
     * Convert Object into a 2-dimentional array ([[key, value], [key2, value2],...]).
     * @param inputObj Input object.
     * @returns An 2 dimentional array with a type of [[key, value], [key2, value2],...]
     */
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
    getDeepest(obj: Object, multi?: boolean): object | object[];
};
