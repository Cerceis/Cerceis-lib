export declare const toMs: (h?: number, m?: number, s?: number, ms?: number) => number;
export declare const toSeconds: (h?: number, m?: number, s?: number, ms?: number) => number;
export declare const toMinutes: (h?: number, m?: number, s?: number, ms?: number) => number;
export declare const toHours: (h?: number, m?: number, s?: number, ms?: number) => number;
/**
 * Convert to readable x shotest possible date length.
 * Year > Month > Day > Same day > time only.
 * currently support jpn only
 * @params input The input date string
 * @locale language, default = jpn
 */
export declare const toDateTimeShortLocale: (input: string, locale?: string) => string | undefined;
