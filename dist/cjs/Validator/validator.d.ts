interface Error {
    errored: any;
    code: string;
    label?: string;
    labelEn?: string;
    labelJpn?: string;
}
export type Locale = "eng" | "jpn";
export declare class Validator {
    private locale;
    inputValue: any;
    private currentErrorName;
    errorMap: {
        [key: string]: Error[];
    };
    private pristineMap;
    private valueMap;
    value(inputValue: any): this;
    setLocale(locale: Locale): void;
    /**
     *
     * @param inputName A name for the value used to group errors in errorMap. must be chained after value()
     * @returns
     */
    as(inputName: string): this;
    private _addError;
    static isDefined: (x: any) => boolean;
    static isUndefined: (x: any) => boolean;
    static isArray: (arg: any) => arg is any[];
    static isString: (x: any) => x is string | String;
    static isObject: (x: {}) => boolean;
    static isNumber: (x: number) => boolean;
    static isBoolean: (x: boolean) => boolean;
    /**
     *
     * @param min Check minimum, if the input value is a string,
     * it will check it's length. If it's a number, it will check mathematically.
     * (This does not check for null | undefined ! Use **required()** to check null values. )
     * @returns {this} this
     */
    min(min: number): this;
    max(max: number): this;
    isEmail(): this;
    required(): this;
    alphanumeric(): this;
    noSpecials(space?: boolean, //true = allow space
    extendJpn?: boolean | null): this;
    isUUIDv4(): this;
    isSameAs(value: any): this;
    verify(returnErrors?: boolean): boolean | {
        [key: string]: Error[];
    };
    hasError(): boolean;
    reset(): void;
}
export declare const validator: Validator;
export {};
