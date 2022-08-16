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
export declare const FromTime: {
    _isDateObject: (d: any) => boolean;
    jpnDayMap: {
        [key: number]: string;
    };
    /**
     * Format date object into "YYYY-MM-DD HH:mm:ss"
     * @param date Date object
     * @param time
     * @returns formatted string.
     */
    format(date: Date, options?: formatOptions): string | ObjectifiedDate;
    toMs(h?: number, m?: number, s?: number, ms?: number): number;
    toSeconds(h?: number, m?: number, s?: number, ms?: number): number;
    toMinutes(h?: number, m?: number, s?: number, ms?: number): number;
    toHours(h?: number, m?: number, s?: number, ms?: number): number;
    /**
     * Convert to readable x shotest possible date length.
     * Year > Month > Day > Same day > time only.
     * currently support jpn only
     * @params input The input date string
     * @locale language, default = jpn
    */
    toDateTimeShortLocale(input: string, locale?: string): string;
};
