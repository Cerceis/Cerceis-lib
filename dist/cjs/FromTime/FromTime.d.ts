/**
 * The standard format will be "YYYY-MM-DD HH:mm:ss",
 * this applies to all the functions.
 */
export interface formatOptions {
    time?: boolean;
    asObject?: boolean;
}
export interface ObjectifiedDate {
    Y: number;
    M: number;
    D: number;
    h?: number;
    m?: number;
    s?: number;
}
export declare const isDateObject: (d: any) => boolean;
export declare const FromTime: {
    jpnDayMap: {
        [key: number]: string;
    };
    toMs: (h?: number, m?: number, s?: number, ms?: number) => number;
    toSeconds: (h?: number, m?: number, s?: number, ms?: number) => number;
    toMinutes: (h?: number, m?: number, s?: number, ms?: number) => number;
    toHours: (h?: number, m?: number, s?: number, ms?: number) => number;
    /**
     * Format date object into "YYYY-MM-DD HH:mm:ss" aka the best format.
     * @param date Date object
     * @param time
     * @returns formatted string.
     */
    format(date: Date, options?: formatOptions): string | ObjectifiedDate;
    /**
     * Convert to readable x shotest possible date length.
     * Year > Month > Day > Same day > time only.
     * currently support jpn only
     * @params input The input date string
     * @locale language, default = jpn
    */
    toDateTimeShortLocale(input: string, locale?: string): string;
};
export declare class cDate {
    private _date;
    constructor(date: string | Date);
    addMonth(n: number): void;
    get dateTime(): string;
    get date(): string;
    get time(): string;
}
